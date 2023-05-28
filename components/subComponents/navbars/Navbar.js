import React, { useEffect, useState } from "react";
import AvatarMUI from "@/components/muiComps/Avatar";
import BasicPopover from "@/components/muiComps/Popover";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import MyModal from "@/components/muiComps/modal";
import NavMobile from "./NavMobile";
function Navbar(props) {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollThreshold = 150;

      if (currentScrollPos > scrollThreshold) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const endPoints = [
    "/login",
    "/register",
    "/forgotPassword",
    "/updateInfo",
    "/store",
  ];
  const onLogOut = () => {
    Cookies.remove("refreshToken");
    Cookies.remove("accessToken");
    props.setIsLogged(false);
  };
  return (
    <div
      className={`${
        navbarBg || endPoints.includes(router.pathname)
          ? "bg-color_5"
          : "bg-transparent"
      } flex justify-between bg-[white] items-center w-full z-10 fixed  font-signika`}
    >
      <div className="md:flex hidden justify-between w-full  items-center text-color_2">
        <div
          className=" font-semibold text-[24px]  font-workSan text-color_2 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <AvatarMUI
            src="./web/webLogo.png"
            alt="logo"
            width={"100%"}
            height={55}
          />
        </div>
        <div className="flex justify-around gap-7 items-center ">
          <div
            className="text-color_2 cursor-pointer"
            onClick={() => {
              router.push("/myOrders");
            }}
          >
            My Orders
          </div>
          <div
            className="text-color_2 cursor-pointer"
            onClick={() => {
              router.push("/store");
            }}
          >
            Store
          </div>
          <div className="text-color_2 ">Memes</div>
          <div className="text-color_2 ">Custom</div>
          <BasicPopover
            button={<div className="text-color_2 cursor-pointer">Shows</div>}
            content={
              <div className="flex flex-col gap-2  text-right px-8 py-3 text-color_5 bg-color_2">
                <div>Naruto</div>
                <div>Avengers</div>
                <div>DathNote</div>
              </div>
            }
          />
          {/* <BasicPopover
            button={<div className="text-color_2 cursor-pointer">Wears</div>}
            content={
              <div className="flex flex-col gap-2 px-5 py-3 text-right text-color_5 bg-color_2">
                <div>Shirts</div>
                <div>Jackets</div>
                <div>Accessories</div>
              </div>
            }
          /> */}

          <div className="">
            <AvatarMUI
              src="./icons/cartShoppingFast.png"
              alt="logo"
              width={25}
              height={25}
            />
          </div>
          <div className="">
            <AvatarMUI
              src="./icons/search.png"
              alt="logo"
              width={25}
              height={25}
            />
          </div>
          {!props.isLogged ? (
            <div
              className={`${
                router.pathname === "/login" && "bg-color_6"
              } px-8 py-1 hover:bg-color_6 duration-200 mr-2 hover:text-color_5 cursor-pointer text-color_2 border border-color_6 rounded-full`}
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </div>
          ) : (
            <div className="mr-2 flex justify-center items-center  hover:cursor-pointer ">
              <BasicPopover
                button={
                  <div className="pt-1">
                    <AvatarMUI
                      src="./icons/man.png"
                      alt="logo"
                      width={40}
                      height={40}
                    />
                  </div>
                }
                disableScrollLock={true}
                content={
                  <div className="flex flex-col gap-1 px-5 py-2 text-color_5 cursor-pointer text-right  whitespace-nowrap bg-color_2">
                    <div
                      className="duration-200  py-1 text-color_5"
                      onClick={() => {
                        router.push("/updateInfo");
                      }}
                    >
                      Edit Profile
                    </div>
                    <div
                      onClick={onLogOut}
                      className="  duration-200  py-1 text-color_5"
                    >
                      Logout
                    </div>
                  </div>
                }
              />
            </div>
          )}
        </div>
      </div>

      {/*mobile */}
      <div className="w-full md:hidden block">
        <NavMobile setIsLogged={props.setIsLogged} isLogged={props.isLogged} />
      </div>
    </div>
  );
}

export default Navbar;
