import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { axiosPost } from "@/components/controllers/axios/AxiosPost";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function AccountOTPVerify(props) {
  const [otp, setOtp] = useState("");
  const accepttedErrorCodes = ["400", "401", "404", "403"];

  const onClick = async () => {
    console.log("first");
    if (otp && otp.length == 4) {
      const response = await axiosPost({
        url: "user/auth/verifyAccount",
        body: {
          username: props.username,
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
        toast.success(response.data.message);
        props.setCurrentPage(2);
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
    } else {
      toast.error("OTP should be of 4 characters");
    }
  };
  return (
    <>
      <MuiOtpInput
        onChange={(e) => {
          setOtp(e);
        }}
        value={otp}
      />
      <div
        onClick={onClick}
        className="duration-200 my-4 w-full bg-color_5 text-[white] p-3 text-center font-rubik cursor-pointer"
      >
        Verify
      </div>
    </>
  );
}

export default AccountOTPVerify;
