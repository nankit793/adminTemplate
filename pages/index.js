import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/subComponents/navbars/Navbar";
import Hero from "@/components/subComponents/Hero/Hero";
import Store from "@/components/subComponents/Store";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import SwiperJS from "@/components/subComponents/Swiper";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const pages = [
    {
      pageData: (
        <div className="text-color_2 text-[30px] font-bold font-workSans">
          Movies
        </div>
      ),
    },
    {
      pageData: (
        <div className="text-color_2 text-[30px] font-bold font-workSans">
          TV Shows
        </div>
      ),
    },
    {
      pageData: (
        <div className="text-color_2 text-[30px] font-bold font-workSans">
          Anime
        </div>
      ),
    },
    {
      pageData: (
        <div className="text-color_2 text-[30px] font-bold font-workSans">
          Hoolywood
        </div>
      ),
    },
    {
      pageData: (
        <div className="text-color_2 text-[30px] font-bold font-workSans">
          Boolywood
        </div>
      ),
    },
    {
      pageData: (
        <div className="text-color_2 text-[30px] font-bold font-workSans">
          Everything available here
        </div>
      ),
    },
  ];
  return (
    <>
      <Hero
        leftText={
          <div className="md:mx-10 py-20 md:py-30">
            <span className="font-rubik text-color_2 font-semibold text-[30px] md:text-[55px] ">
              Shop your
            </span>
            <div className="text-color_6 font-rubik text-[30px] md:text-[40px] font-bold ">
              Favourate Characters
            </div>
            <div className="border rounded-full border-color_6 py-3 text-center font-semibold mt-4 cursor-pointer duration-100 hover:text-color_5 hover:bg-color_6  text-[20px]">
              Exclusives
            </div>
          </div>
        }
        className="text-color_2"
        rightText={<SwiperJS pages={pages} />}
      />
      <div className="py-5 mx-auto sm:w-[90%] sm:px-0 px-3 ">
        <div className="text-color_5 font-rubik text-[35px] font-bold mb-5">
          STORE
        </div>
        <Store />
      </div>
    </>
  );
}
