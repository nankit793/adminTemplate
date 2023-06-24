import Hero from "@/components/subComponents/Hero/Hero";
import LoginForm from "@/components/subComponents/LoginForm";
import SwiperJS from "@/components/subComponents/Swiper";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
function Login() {
  const router = useRouter();

  useEffect(() => {
    const Rtoken = Cookies.get("refreshToken");
    if (Rtoken) {
      router.push("/");
      toast.success("successfuly login");
    }
  }, [router]);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[90%] max-w-[450px] md:w-[60%]">
          <LoginForm />
        </div>
      </div>
      ;
    </>
  );
}

export default Login;
