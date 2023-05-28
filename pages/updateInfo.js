import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/subComponents/navbars/Navbar";
import Hero from "@/components/subComponents/Hero/Hero";
// import Store from "@/components/subComponents/Store";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import AvatarMUI from "@/components/muiComps/Avatar";
// const inter = Inter({ subsets: ["latin"] });
import { axiosPost } from "@/components/controllers/axios/AxiosPost";
import { axiosGet } from "@/components/controllers/axios/axiosGet";
import { toast } from "react-toastify";
import InputField from "@/components/muiComps/InputFields/InputField";
import Cookies from "js-cookie";

function UpdateInfo() {
  const [name, setName] = useState("");
  const [data, setData] = useState({
    phoneNumber: "",
    name: "",
    adresses: [],
  });
  const accepttedErrorCodes = ["400", "401", "404", "403"];
  useEffect(() => {
    const fetcher = async () => {
      const response = await axiosPost({
        url: "v1/p/getInfo",
        body: {
          username: Cookies.get("username"),
        },
      });
      if (
        response &&
        response.state &&
        response.result &&
        response.result.status === 200 &&
        response.data
      ) {
        const data = response.data.data || {};
        setData({
          phoneNumber: data?.phoneNumber,
          name: data?.name,
          adresses: data?.adresses,
        });
      } else if (
        Boolean(
          response &&
            response.res &&
            response.data &&
            response.data.redirect === true
        )
      ) {
        toast.error(
          response.data?.message || "Access Restriction! Please Login Again"
        );
      } else {
        toast.error("Try again later");
      }
    };
    fetcher();
  }, []);

  const onClickHandler = async () => {
    const response = await axiosPost({
      url: "v1/p/updateInfo",
      body: {
        phoneNumber: data.phoneNumber,
        name: data.name,
        username: Cookies.get("username"),
        adresses: data.adresses,
      },
    });
    if (
      response &&
      response.state &&
      response.result &&
      response.result.status === 200 &&
      response.data &&
      response.data.message
    ) {
      toast.success(response.data.message);
    } else if (
      Boolean(
        response &&
          response.res &&
          accepttedErrorCodes.includes(response.res?.status.toString()) &&
          response.data &&
          response.data.message
      )
    ) {
      toast.error(response.data?.message);
    } else {
      toast.error("Try again later");
    }
  };

  return (
    <>
      <div className=" h-screen flex flex-col justify-center items-center md:my-0 md:pt-0 pt-20">
        <div className="text-color_6 font-semibold font-rubik text-[30px] md:my-2">
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
              value={data.name}
              fullWidth={true}
              onChange={(e) => {
                setData({
                  ...data,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="">
            <InputField
              label="Phone"
              value={data.phoneNumber}
              fullWidth={true}
              onChange={(e) => {
                setData({
                  ...data,
                  phoneNumber: e.target.value,
                });
              }}
            />
          </div>
          <div className="">
            <InputField
              label="Adresses"
              value={name}
              fullWidth={true}
              onChange={(e) => {
                setData({
                  ...data,
                  adresses: e.target.value,
                });
              }}
            />
          </div>
          <div
            onClick={onClickHandler}
            className="bg-color_5 p-2 cursor-pointer font-rubik text-center text-[white]"
          >
            save
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateInfo;
