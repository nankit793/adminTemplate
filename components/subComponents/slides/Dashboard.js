import React from "react";

function Dashboard() {
  return (
    <div className="w-full h-full px-3">
      <div className="text-color_5 text-[25px] font-semibold">Stats</div>
      <div className="flex justify-between items-center">
        <div className="w-[300px] text-color_2 h-[100px] text-center flex flex-col items-center justify-center   bg-color_6 drop-shadow">
          <div className="text-[35px]">240</div>
          <div className="text-color_5 font-semibold">Total Users</div>
        </div>
        <div className="w-[300px] text-color_2 h-[100px] text-center flex flex-col items-center justify-center   bg-color_6 drop-shadow">
          <div className="text-[35px]">240</div>
          <div className="text-color_5 font-semibold">Total Orders</div>
        </div>
        <div className="w-[300px] text-color_2 h-[100px] text-center flex flex-col items-center justify-center   bg-color_6 drop-shadow">
          <div className="text-[35px]">240</div>
          <div className="text-color_5 font-semibold">Total Sales</div>
        </div>
      </div>
      <div className="mt-5 text-color_5 text-[25px] font-semibold">
        Today{"'"}s Orders
      </div>
      <div></div>
    </div>
  );
}

export default Dashboard;
