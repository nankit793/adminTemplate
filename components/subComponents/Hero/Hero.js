import AvatarMUI from "@/components/muiComps/Avatar";
import Image from "next/image";
import React from "react";
function Hero(props) {
  return (
    <div className=" flex justify-between items-center py-3 md:px-0 px-3 bg-color_5 md:rounded-ee-[200px]">
      <div className={props.className ? props.className : "text-color_2"}>
        {props.leftText}
      </div>

      <div
        className={`${
          props.className ? props.className : "text-color_2"
        } flex justify-end `}
      >
        <div className="md:block hidden h-[100%] max-w-[500px] w-[40%]">
          {props.rightText}
        </div>
      </div>
    </div>
  );
}

export default Hero;
