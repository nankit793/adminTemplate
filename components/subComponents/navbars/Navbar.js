import React, { useEffect, useState } from "react";
import AvatarMUI from "@/components/muiComps/Avatar";
import BasicPopover from "@/components/muiComps/Popover";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function Navbar(props) {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollThreshold = 200;

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

  const endPoints = ["/login", "/register", "/forgotPassword"];
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
      } flex justify-between py-3 px-3 z-10 duration-200 fixed w-full font-rubik`}
    >
      <div
        className=" font-semibold text-[24px] text-color_2 cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        CODEWEARS
      </div>

      <div className="md:flex hidden  gap-5 items-center text-color_2">
        <div className="text-color_2 ">MEMES</div>
        <BasicPopover
          button={<div className="text-color_2 cursor-pointer">WEARS</div>}
          content={
            <div className="font-semibold flex flex-col gap-2 p-5 pt-8 text-color_5 bg-color_2">
              <div>Shirts</div>
              <div>Jackets</div>
              <div>Accessories</div>
            </div>
          }
        />
        {!props.isLogged ? (
          <div
            className={`${
              router.pathname === "/login" && "bg-color_6"
            } px-8 py-1 hover:bg-color_6 duration-200  hover:text-color_5 cursor-pointer text-color_2 border border-color_6 rounded-full`}
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </div>
        ) : (
          <div
            onClick={onLogOut}
            className="text-color_2 cursor-pointer hover:text-color_6 druation-100"
          >
            Logout
          </div>
        )}
        <AvatarMUI
          src="./icons/cartShoppingFast.png"
          alt="logo"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
}

export default Navbar;
