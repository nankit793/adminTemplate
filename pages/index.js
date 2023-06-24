// import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import AvatarMUI from "@/components/muiComps/Avatar";
// const inter = Inter({ subsets: ["latin"] });
import { axiosPost } from "@/components/controllers/axios/AxiosPost";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { authChecker } from "@/components/controllers/Auth";
import SideNav from "@/components/subComponents/index/SideNav";
import { links } from "@/components/controllers/sideNavButtons";
export default function Home() {
  const [currSlide, setCurrSlide] = useState(0);
  const commonClass = "w-full";
  const accepttedErrorCodes = ["400", "401", "404", "403"];
  const router = useRouter();

  useEffect(() => {
    const checkingHandle = async () => {
      const checker = await authChecker();
      if (!checker) {
        router.push("/login");
      }
    };
    checkingHandle();
  }, [router]);
  return (
    <>
      <div className="w-screenn h-screen pt-[50px] bg-color_8 flex justify-start">
        <div className="w-[35%] h-full bg-color_8 border-l border ">
          <SideNav
            links={links}
            onClick={(index) => {
              setCurrSlide(index);
            }}
            currSlide={currSlide}
          />
        </div>
        <div className="w-full h-full overflow-y-auto bg-color_2 pt-[5px]">
          {links[currSlide].pageData}
        </div>
      </div>
    </>
  );
}
