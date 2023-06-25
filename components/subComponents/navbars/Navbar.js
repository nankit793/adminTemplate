import React, { useEffect, useState } from "react";
import AvatarMUI from "@/components/muiComps/Avatar";
import BasicPopover from "@/components/muiComps/Popover";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import MyModal from "@/components/muiComps/modal";
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

  const endPoints = ["/login", "/"];
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
      } flex justify-between bg-[white] items-center w-full z-10 ${
        props.isLogged ? "py-0" : "py-2"
      } fixed  font-signika`}
    >
      <div className="flex  justify-between w-full  items-center text-color_2">
        <div
          className="text-[24px]  font-workSan text-color_2 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Logo
        </div>
        <div className="flex justify-around gap-7 items-center ">
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
    </div>
  );
}

export default Navbar;
