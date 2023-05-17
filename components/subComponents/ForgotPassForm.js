import React, { useState } from "react";
import AvatarMUI from "../muiComps/Avatar";
import InputField from "../muiComps/InputFields/InputField";
import PasswordInput from "../muiComps/InputFields/PasswordInput";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  emailVerification,
  passwordVerification,
} from "@/components/controllers/verifiers/general";
import { axiosPost } from "@/components/controllers/axios/AxiosPost";
import HorizontalStepper from "../muiComps/stepper/HorizontalStepper";
import { MuiOtpInput } from "mui-one-time-password-input";

function RegisterForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setpassword] = useState("");
  const [passwordError, setpasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [otp, setOtp] = useState("");

  const accepttedErrorCodes = ["400", "401", "404", "403"];
  const onClickHandler = async () => {
    const err1 = !emailVerification(username);
    const err2 = !passwordVerification(password);
    const err3 = !passwordVerification(confirmPassword);
    const err4 = !(otp && otp.length === 4);
    if (err1) {
      setUsernameError(true);
    }
    if (err2) {
      setpasswordError(true);
    }
    if (err3) {
      setConfirmPasswordError(true);
    }
    if (err1 || err2 || err3 || err4) {
      toast.error(
        "enter valid mail, OTP and password should at least be 6 characters"
      );
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password Do not match");
      return;
    }
    setProcessing(true);
    const response = await axiosPost({
      url: "user/auth/forgotPassword",
      body: {
        username,
        password,
        confirmPassword,
        otp,
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
      setCurrentPage(2);
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
    setProcessing(false);
  };

  const generateOTP = async () => {
    const err1 = !emailVerification(username);
    if (err1) {
      setUsernameError(true);
      toast.error("Enter valid mail");
      return;
    }
    setProcessing(true);
    const response = await axiosPost({
      url: "user/auth/regenrateFPotp",
      body: {
        username,
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
      setCurrentPage(1);
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
    setProcessing(false);
  };
  return (
    <>
      <div className="font-bold mb-3 pt-[50px] text-center text-color_5 text-[40px] font-rubik">
        Forgot Password?
      </div>
      <div className="my-5">
        <HorizontalStepper
          currentPage={currentPage}
          steps={["Generate OTP", "Set Password", "Done"]}
        />
      </div>
      {currentPage === 1 && (
        <div className="w-full h-full ">
          <div className="mb-3">
            <div className="text-color_5 py-2">Enter OTP</div>
            <MuiOtpInput
              onChange={(e) => {
                setOtp(e);
              }}
              value={otp}
            />
          </div>

          <div className="mb-4 w-full">
            <PasswordInput
              size="medium"
              fullWidth={true}
              label="Password"
              error={passwordError}
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
                setpasswordError(false);
              }}
            />
          </div>
          <div className="mb-4 w-full">
            <PasswordInput
              size="medium"
              fullWidth={true}
              label="Confirm Password"
              error={confirmPasswordError}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError(false);
              }}
            />
          </div>
          <div
            onClick={processing ? null : onClickHandler}
            className="duration-200 my-4 w-full bg-color_5 text-[white] p-3 text-center font-rubik cursor-pointer"
          >
            Change Password
          </div>
          <div className="w-full font-rubik text-center text-sm">
            By Signing up, you agree to our Terms of Use and Privacy Policy
          </div>
        </div>
      )}
      {currentPage == 0 && (
        <>
          <div className="my-4 w-full">
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
            <div
              onClick={processing ? null : generateOTP}
              className="duration-200 my-4 w-full bg-color_5 text-[white] p-3 text-center font-rubik cursor-pointer"
            >
              Generate OTP
            </div>
          </div>
        </>
      )}
      {currentPage == 2 && (
        <div className="min-h-[20vh] py-4 flex justify-center items-center ">
          <div className="text-color_5">
            Your new password is set, You can Login now
            <div
              className="text-center text-color_7 underline cursor-pointer"
              onClick={() => {
                router.push("/login");
              }}
            >
              login
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterForm;
