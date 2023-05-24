import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/subComponents/navbars/Navbar";
import Hero from "@/components/subComponents/Hero/Hero";
// import Store from "@/components/subComponents/Store";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import SwiperJS from "@/components/subComponents/Swiper";
import AvatarMUI from "@/components/muiComps/Avatar";
import { authChecker } from "@/components/controllers/Auth";
import { useRouter } from "next/router";

function MyOrders() {
  const router = useRouter();
  useEffect(() => {
    const checkingHandle = async () => {
      const checker = await authChecker();
      if (!checker) {
        router.push("/");
      }
    };
    checkingHandle();
  }, [router]);

  return (
    <>
      <Hero
        leftText={
          <div className="md:mx-10 pb-10 pt-20">
            <span className="font-workSans text-color_2 font-semibold text-[30px] md:text-[50px] ">
              Manage Your
            </span>
            <div className="text-color_6 font-workSans text-[30px] md:text-[46px] font-bold ">
              Orders <span className="text-color_2">from here</span>
            </div>
          </div>
        }
        className="text-color_2"
        rightText={
          <AvatarMUI
            src="./web/banner_2.png"
            // src="./web/banner_2.png"
            alt="logo"
            width={"80%"}
            height={"80%"}
          />
        }
      />
      <div className=" py-5 md:w-[90%] mx-2 md:mx-auto">
        <div className="pb-[100px] text-color_5 font-bold  text-[45px]">
          My Orders
        </div>
        <div className=" text-text_2 font-rubik text-center text-[25px]">
          You have not ordered anything from us, YET!
          <div
            // onClick={onClickHandler}
            className="duration-200 my-4 mx-auto min-w-fit md:w-[30%] text-[16px] bg-color_5 text-[white] p-3 text-center font-rubik cursor-pointer"
          >
            View Store
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrders;
