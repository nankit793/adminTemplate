import React, { useState } from "react";
function SideNav(props) {
  const { links, onClick, currSlide } = props;
  return (
    <div className="pt-1  w-full flex flex-col cursor-pointer  px-2 font-semibold text-color_5">
      {links.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              onClick(index);
            }}
            className={`${
              currSlide === index && "bg-color_5 text-color_2 "
            } hover:bg-color_5 font-workSans p-4 duration-100 rounded my-1 hover:text-color_2`}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default SideNav;
