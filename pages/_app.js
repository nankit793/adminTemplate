import Navbar from "@/components/subComponents/navbars/Navbar";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import type { AppProps } from "next/app"
export default function App({ Component, pageProps }) {
  const router = useRouter();
  // const routesToShowBack = [];
  const endPoints = ["/login", "/register"];

  return (
    <div
      className={`${endPoints.includes(router.pathname) && "superbackImage"} `}
    >
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
      <ToastContainer />
    </div>
  );
}
