import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Divider from "@mui/material/Divider";

function NavMobileData(props) {
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();
  const onLogOut = () => {
    Cookies.remove("refreshToken");
    Cookies.remove("accessToken");
    props.setIsLogged(false);
  };
  return (
    <>
      <div className="flex flex-col justify-between">
        {props.isLogged ? (
          <div className="mx-auto py-2 my-4 bg-color_7 w-[80%] rounded-xl border ">
            <>
              <div className="w-[60px] mx-auto p-[60px] rounded-full bg-color_5 "></div>
              <div className="text-color_5 py-2 text-center font-semibold ">
                Name here
              </div>
            </>
          </div>
        ) : (
          <div className="bg-color_5 py-2 my-4 rounded-md text-center mx-auto w-[80%] text-color_2 px-5">
            Login
          </div>
        )}
        <Divider />
        <div className="h-full flex flex-col gap-5 mt-5 justify-around px-2 [&>*]:font-semibold [&>*]:text-[17px] [&>*]:text-color_5">
          <div>My Orders</div>
          <div>My Cart</div>
          <div>Memes</div>
          <div>Custom</div>
          <div>Shows</div>
          <div>Wears</div>
        </div>
        {props.isLogged && (
          <div className="absolute w-full bottom-0 bg-color_5 p-3 text-center text-color_2 font-signika">
            Logout
          </div>
        )}
      </div>
    </>
  );
}

export default NavMobileData;
