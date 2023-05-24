import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/subComponents/navbars/Navbar";
import Hero from "@/components/subComponents/Hero/Hero";
import Store from "@/components/subComponents/Store";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import SwiperJS from "@/components/subComponents/Swiper";
import AvatarMUI from "@/components/muiComps/Avatar";
// const inter = Inter({ subsets: ["latin"] });
import { axiosPost } from "@/components/controllers/axios/AxiosPost";
import { toast } from "react-toastify";
export default function Home() {
  const commonClass =
    "text-color_5 flex items-end md:w-[200px] overflow-hidden  md:h-[200px] bg-color_5 rounded-full mx-auto font-bold font-workSans";
  const accepttedErrorCodes = ["400", "401", "404", "403"];
  const pages = [
    {
      pageData: (
        <div className={commonClass}>
          <div>
            <AvatarMUI
              src="./web/banner_1.png"
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
              src="./web/banner_1.png"
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
              src="./web/banner_1.png"
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
              src="./web/banner_1.png"
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
              src="./web/banner_1.png"
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
              src="./web/banner_1.png"
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
              src="./web/banner_1.png"
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
              src="./web/banner_1.png"
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
              src="./web/banner_1.png"
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
              src="./web/banner_1.png"
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
              src="./web/banner_1.png"
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
              src="./web/banner_1.png"
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
          <div className="md:mx-10 md:pb-20 pb-5 pt-[100px] md:pt-20">
            <span className="font-workSans text-color_2 font-semibold text-[30px] md:text-[55px] ">
              Shop your
            </span>
            <div className="text-color_6 font-workSans text-[30px] md:text-[40px] font-bold ">
              Favourate <span className="text-color_2"> Characters</span>
            </div>
            {/* <div className="border rounded-full border-color_6 py-3 text-center font-semibold mt-4 cursor-pointer duration-100 over:bg-color_6  text-[20px]">
              Exclusives
            </div> */}
          </div>
        }
        className="text-color_2"
        rightText={
          <AvatarMUI
            src="./web/banner_1.png"
            alt="logo"
            width={"100%"}
            height={"100%"}
          />
        }
      />
      <div className=" mx-auto sm:w-[80%] sm:px-0 px-3 ">
        <div className=" text-color_5 font-bold  text-[40px]">Trendings</div>
        <div className="pb-10 pt-5 ">
          <SwiperJS pages={pages} />
        </div>
        <Store />
      </div>
    </>
  );
}
