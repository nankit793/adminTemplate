/* eslint-disable @next/next/no-img-element */
import React from "react";

function ProductCard(props) {
  const { item } = props;
  return (
    <div className="sm:my-0 my-3 md:w-[200px] mx-auto max-w-[400px]  cursor-pointer ">
      <div className="w-full mx-auto relative ">
        <img src={item?.url} className="w-full  " alt="" />
        <div className="absolute bottom-0 font-signika text-color_2 drop-shadow px-2">
          <div>Rating: {item?.rating}/5</div>
          <div>{item?.size}</div>
        </div>
      </div>
      <div className="font-rubik px-1 text-color_5 bg-color_2">
        {item?.name}
      </div>
      <div className=" text-color_6 font-semibold justify-center bg-color_2 flex items-start gap-2">
        <div className="text-[16px] text-color_5 my-1">₹</div>
        <div className="flex items-end gap-2">
          <div className="text-[30px]">459</div>
          <div className="text-[16px] mb-1 text-color_5 items-end flex ">
            M.R.P
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
