import Navbar from "@/components/subComponents/navbars/Navbar";
import "../styles/globals.css";
// import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Footer from "@/components/molecules/Footer";

// import type { AppProps } from "next/app"
export default function App({ Component, pageProps }) {
  const [isLogged, setIsLogged] = useState(false);
  setTimeout(() => {
    console.log(Cookies.get("refreshToken"));
    if (Cookies.get("refreshToken")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, 1000);

  const router = useRouter();
  // const routesToShowBack = [];
  const endPoints = [
    "/login",
    "/register",
    "/forgotPassword",
    "/updateInfo",
    "/store",
  ];
  return (
    <>
      <div
        className={`${
          endPoints.includes(router.pathname) && "superbackImage"
        } `}
      >
        <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
        <Component {...pageProps} />
      </div>
      <div className="">
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}
