import Hero from "@/components/subComponents/Hero/Hero";
import LoginForm from "@/components/subComponents/LoginForm";
import ForgotPassForm from "@/components/subComponents/ForgotPassForm";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

function ForgotPass() {
  const router = useRouter();

  useEffect(() => {
    const Rtoken = Cookies.get("refreshToken");
    if (Rtoken) {
      router.push("/");
    }
  }, [router]);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      sessionStorage.setItem("token", token);
      router.push("/");
    }
  }, [router, router.query]);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[90%] max-w-[450px] md:w-[60%]">
          <ForgotPassForm />
        </div>
      </div>
      ;
    </>
  );
}

export default ForgotPass;
