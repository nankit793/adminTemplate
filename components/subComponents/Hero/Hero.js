import AvatarMUI from "@/components/muiComps/Avatar";
import Image from "next/image";
import React from "react";
function Hero(props) {
  return (
    // md:rounded-ee-[200px]
    <div className=" flex justify-between items-end overflow-hidden md:px-0 px-3 bg-color_5 ">
      <div className={props.className ? props.className : "text-color_2"}>
        {props.leftText}
      </div>

      <div
        className={`${
          props.className ? props.className : "text-color_2"
        } flex justify-end items-end`}
      >
        <div className="md:flex justify-end hidden">{props.rightText}</div>
      </div>
    </div>
  );
}

export default Hero;
