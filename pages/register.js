import Hero from "@/components/subComponents/Hero/Hero";
import LoginForm from "@/components/subComponents/LoginForm";
import RegisterForm from "@/components/subComponents/RegisterForm";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Register() {
  const router = useRouter();

  useEffect(() => {
    const username = sessionStorage.getItem("token");
    if (username) {
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
          <RegisterForm />
        </div>
      </div>
      ;
    </>
  );
}

export default Register;
