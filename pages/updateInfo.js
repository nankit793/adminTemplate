import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/subComponents/navbars/Navbar";
import Hero from "@/components/subComponents/Hero/Hero";
import Store from "@/components/subComponents/Store";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import SwiperJS from "@/components/subComponents/Swiper";
import AvatarMUI from "@/components/muiComps/Avatar";
// const inter = Inter({ subsets: ["latin"] });
import { axiosPost } from "@/components/controllers/axios/AxiosPost";
import { toast } from "react-toastify";
import InputField from "@/components/muiComps/InputFields/InputField";

function UpdateInfo() {
  const [name, setName] = useState("");
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-color_6 font-semibold font-rubik text-[30px] my-2">
          Update Information
        </div>
        <div>
          <div className="w-[80px]  p-[80px] rounded-full bg-color_5"></div>
          <div className="text-color_6 hover:cursor-pointer font-ru text-center my-2">
            change
          </div>
        </div>
        <div className="[&>*]:w-[300px] [&>*]:mt-2">
          <div className="">
            <InputField
              label="Name"
              value={name}
              fullWidth={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="">
            <InputField
              label="Phone"
              value={name}
              fullWidth={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="">
            <InputField
              label="Adresses"
              value={name}
              fullWidth={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="bg-color_5 p-2 font-rubik text-center text-[white]">
            save
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateInfo;
