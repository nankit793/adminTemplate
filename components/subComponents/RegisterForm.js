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
import AccountOTPVerify from "../molecules/AccountOTPVerify";

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

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };
  const accepttedErrorCodes = ["400", "401", "404", "403"];
  const onClickHandler = async () => {
    const err1 = !emailVerification(username);
    const err2 = !passwordVerification(password);
    const err3 = !passwordVerification(confirmPassword);
    if (err1) {
      setUsernameError(true);
    }
    if (err2) {
      setpasswordError(true);
    }
    if (err3) {
      setConfirmPasswordError(true);
    }
    if (err1 || err2 || err3) {
      toast.error(
        "enter valid mail and password should at least be 6 characters"
      );
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password Do not match");
      return;
    }
    setProcessing(true);
    const response = await axiosPost({
      url: "user/auth/registration",
      body: {
        username,
        password,
        confirmPassword,
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
      <div className="font-bold mb-3 pt-[50px] text-center text-color_5 text-[45px] font-rubik">
        Register
      </div>
      <div
        onClick={handleLogin}
        className="w-full rounded-full p-2 justify-center mx-auto cursor-pointer font-rubik md:text-[18px] text-color_5 border flex gap-5 items-center "
      >
        <div className="w-[20%] flex justify-center">
          <AvatarMUI
            src="./icons/google.png"
            alt="logo"
            width={25}
            height={25}
          />
        </div>
        <div>Register With Google - Direct Login</div>
      </div>
      <div className="my-5">
        <HorizontalStepper
          currentPage={currentPage}
          steps={["Enter Details", "Confirm OTP", "Done"]}
        />
      </div>
      {currentPage === 0 && (
        <div className="w-full h-full ">
          <div className="my-4 w-full">
            <div
              className="text-[blue] text-right font-rubik text-sm cursor-pointer"
              onClick={() => {
                router.push("/login");
              }}
            >
              <span className="text-color_5 mr-2 ">
                Already have an Account?
              </span>
              Login
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
            Register
          </div>
          <div className="w-full font-rubik text-center text-sm">
            By Signing up, you agree to our Terms of Use and Privacy Policy
          </div>
        </div>
      )}
      {currentPage == 1 && (
        <div className="min-h-[40vh] py-4">
          <AccountOTPVerify
            setCurrentPage={setCurrentPage}
            username={username}
          />
        </div>
      )}
      {currentPage == 2 && (
        <div className="min-h-[20vh] py-4 flex justify-center items-center ">
          <div className="text-color_5">
            You are verified, You can Login now
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
