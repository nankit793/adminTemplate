import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/subComponents/navbars/Navbar";
import Hero from "@/components/subComponents/Hero/Hero";
import GeneralProducts from "@/components/subComponents/GeneralProducts";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import SwiperJS from "@/components/subComponents/Swiper";
import AvatarMUI from "@/components/muiComps/Avatar";
// const inter = Inter({ subsets: ["latin"] });
import { axiosPost } from "@/components/controllers/axios/AxiosPost";
import { toast } from "react-toastify";
export default function Home() {
  const commonClass = "w-full";
  const accepttedErrorCodes = ["400", "401", "404", "403"];
  const pages = [
    {
      pageData: (
        <div className={commonClass}>
          <div>
            <AvatarMUI
              src="./web/banners/1.png"
              alt="logo"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      ),
    },
    {
      pageData: (
        <div className={commonClass}>
          <div>
            <AvatarMUI
              src="./web/banners/2.png"
              alt="logo"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      ),
    },
    {
      pageData: (
        <div className={commonClass}>
          <div>
            <AvatarMUI
              src="./web/banners/3.png"
              alt="logo"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Hero
        leftText={
          <div className="md:mx-10 md:pb-10 pb-5 pt-[100px] md:pt-20">
            <span className="font-workSans text-color_2 font-semibold text-[30px] md:text-[55px] ">
              Shop your
            </span>
            <div className="text-color_6 font-workSans text-[30px] md:text-[40px] font-bold ">
              Favourate <span className="text-color_2"> Desings</span>
            </div>
            {/* <div className="border rounded-full border-color_6 py-3 text-center font-semibold mt-4 cursor-pointer duration-100 over:bg-color_6  text-[20px]">
              Exclusives
            </div> */}
          </div>
        }
        className="text-color_2"
        // rightText={
        //   <AvatarMUI
        //     src="./web/banner_1.png"
        //     alt="logo"
        //     width={"100%"}
        //     height={"100%"}
        //   />
        // }
      />
      <div className=" mx-auto sm:w-[90%] sm:px-0 px-3 ">
        <div className=" text-color_5 font-bold font-rubik text-[40px]">
          Popular
        </div>
        <div className="pb-5 pt-2 h-auto">
          <SwiperJS pages={pages} />
        </div>
        <GeneralProducts />
      </div>
    </>
  );
}
