import React, { useState } from "react";
import AvatarMUI from "../muiComps/Avatar";
import InputField from "../muiComps/InputFields/InputField";
import PasswordInput from "../muiComps/InputFields/PasswordInput";
import { useRouter } from "next/router";
import { axiosPost } from "@/components/controllers/axios/AxiosPost";
import {
  emailVerification,
  passwordVerification,
} from "@/components/controllers/verifiers/general";
import { toast } from "react-toastify";
import AccountOTPVerify from "../molecules/AccountOTPVerify";
import Cookies from "js-cookie";

function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setpassword] = useState("");
  const [passwordError, setpasswordError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [processing, setProcessing] = useState(false);
  const accepttedErrorCodes = ["400", "401", "404", "403"];

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };
  const onClickHandler = async () => {
    const err1 = !emailVerification(username);
    const err2 = !passwordVerification(password);
    if (err1) {
      setUsernameError(true);
    }
    if (err2) {
      setpasswordError(true);
    }
    if (err1 || err2) {
      return toast.error(
        "enter valid mail and password should at least be 6 characters"
      );
    }
    setProcessing(true);
    const response = await axiosPost({
      url: "user/auth/login",
      body: {
        username,
        password,
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
      // Cookies.set("username", username);
      router.push("/");
    } else if (
      Boolean(
        response &&
          response.res &&
          response.res?.status === 401 &&
          response.data &&
          response.data.message ===
            "Your account is not verified, Check your mail"
      )
    ) {
      setCurrentPage(1);
      toast.error(response.data.message);
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
    setProcessing(false);
  };
  return (
    <>
      <div className="font-bold mb-3 text-center text-color_5 text-[45px] font-workSans">
        Sign In
      </div>
      <div
        onClick={handleLogin}
        className="w-full rounded-full py-2 justify-center mx-auto cursor-pointer font-rubik text-[18px] text-color_5 border flex gap-5 items-center"
      >
        <AvatarMUI src="./icons/google.png" alt="logo" width={25} height={25} />
        <div>Login With Google</div>
      </div>
      {(currentPage === 0 || currentPage === 2) && (
        <div className="w-full h-full">
          <div className="my-4 w-full">
            <div
              className="text-color_7 text-right cursor-pointer font-rubik"
              onClick={() => {
                router.push("/register");
              }}
            >
              Create Account
            </div>
            <InputField
              fullWidth={true}
              label="Email"
              error={usernameError}
              size="medium"
              helperText="Enter valid Mail"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameError(false);
              }}
            />
          </div>
          <div className="mb-4 w-full">
            <PasswordInput
              size="medium"
              fullWidth={true}
              error={passwordError}
              label="Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
                setpasswordError(false);
              }}
            />
            <div
              onClick={() => {
                router.push("/forgotPassword");
              }}
              className="text-color_7 text-right font-rubik cursor-pointer"
            >
              Forgot Password?
            </div>
          </div>
          <div
            onClick={onClickHandler}
            className="duration-200 my-4 w-full bg-color_5 text-[white] p-3 text-center font-rubik cursor-pointer"
          >
            Login
          </div>
          <div className="w-full font-rubik text-center text-sm">
            By Signing up, you agree to our Terms of Use and Privacy Policy
          </div>
        </div>
      )}
      {currentPage == 1 && (
        <div className="min-h-[40vh] py-4">
          <div className="font-runik text-color_5 text-[18px] text-center my-2 ">
            OTP verification required
          </div>
          <AccountOTPVerify
            setCurrentPage={setCurrentPage}
            username={username}
          />
        </div>
      )}
    </>
  );
}

export default LoginForm;
