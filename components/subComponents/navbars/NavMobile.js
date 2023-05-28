import React, { useEffect, useState } from "react";
import AvatarMUI from "@/components/muiComps/Avatar";
import BasicPopover from "@/components/muiComps/Popover";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import MyModal from "@/components/muiComps/modal";
import TemporaryDrawer from "@/components/muiComps/Drawer";
import InputField from "@/components/muiComps/InputFields/InputField";
import NavMobileData from "./NavMobileData";
function NavMobile(props) {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();
  const restrictPointsForSearchBar = ["/store"];
  return (
    <>
      <div className="flex justify-between w-full items-center  px-2">
        <TemporaryDrawer
          button={
            <div className="text-[white] gap-2 p-2 bg-color_2 rounded-full flex justify-start ">
              <AvatarMUI
                src="./icons/menu.png"
                alt="logo"
                width={20}
                height={20}
              />
            </div>
          }
          content={
            <NavMobileData
              setIsLogged={props.setIsLogged}
              isLogged={props.isLogged}
            />
          }
        />
        <div
          onClick={() => {
            router.push("/");
          }}
          className=" font-wordSans text-[white]"
        >
          <AvatarMUI
            src="./web/webLogo.png"
            alt="logo"
            width={"100%"}
            height={45}
          />
        </div>
        <div>
          <AvatarMUI
            src="./icons/cartShoppingFast.png"
            alt="logo"
            width={25}
            height={25}
          />
        </div>
      </div>
      <div
        className={` ${
          navbarBg || restrictPointsForSearchBar.includes(router.pathname)
            ? "hidden"
            : ""
        }  mx-3  my-2 rounded bg-color_2   `}
      >
        <InputField
          fullWidth={true}
          label="Search show, product or design..."
        />
      </div>
    </>
  );
}

export default NavMobile;
