import InputField from "@/components/muiComps/InputFields/InputField";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { axiosGet } from "@/components/controllers/axios/axiosGet";
import { axiosPost } from "@/components/controllers/axios/AxiosPost";

function Users() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [searching, setSearching] = useState(false);

  const accepttedErrorCodes = ["400", "401", "404", "403"];
  const getDetails = async () => {
    if (!username) {
      return toast.error("username required");
    }
    setSearching(true);
    const response = await axiosGet({
      url: "getInfo",
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
      toast.success(response.data.message);
      setUserData(response.data.data);
      // Cookies.set("username", username);
    } else {
      toast.error(response?.data?.message || "Error Try again Later");
    }
    setSearching(false);
  };
  const blockUser = async () => {
    if (!username) {
      return toast.error("username required");
    }
    const response = await axiosPost({
      url: "user/block",
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
      toast.success(response.data.message);
      setUserData(response.data.data);
      // Cookies.set("username", username);
    } else {
      toast.error(response?.data?.message || "Error Try again Later");
    }
    setSearching(false);
  };
  const unblockUser = async () => {
    if (!username) {
      return toast.error("username required");
    }
    const response = await axiosPost({
      url: "user/unblock",
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
      toast.success(response.data.message);
      setUserData(response.data.data);
      // Cookies.set("username", username);
    } else {
      toast.error(response?.data?.message || "Error Try again Later");
    }
    setSearching(false);
  };
  const thClass = "text-color_5 font-semibold whitespace-nowrap";
  const tdClass = "text-text_2";
  return (
    <>
      <div className="px-3 pt-2 w-[500px] flex justify-start gap-3">
        <InputField
          fullWidth={true}
          label="Search by username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <div
          onClick={() => {
            !searching && getDetails();
          }}
          className="px-5  py-2 bg-color_5 cursor-pointer text-center text-color_2"
        >
          {searching ? "Searching.." : " Search"}
        </div>
      </div>

      <div className="my-3">
        {userData && userData.blocked && (
          <>
            <div className="text-color_2 p-2 bg-[red] text-center">
              The User is blocked
            </div>
          </>
        )}
        {userData && (
          <div className="flex justify-start gap-[100px]">
            <table className="text-left [&>*]:[&>*]:p-2">
              <tr>
                <th className={thClass}>Name</th>
                <td className={tdClass}>
                  {userData.name ? userData.name : "--"}
                </td>
              </tr>
              <tr>
                <th className={thClass}>Phone Number:</th>
                <td className={tdClass}>
                  {userData.phoneNumber ? userData.phoneNumber : "--"}
                </td>
              </tr>
              <tr>
                <th className={thClass}>adresses</th>
                <td className={tdClass}></td>
              </tr>
              <tr>
                <th className={thClass}>Verified</th>
                <td className={tdClass}>
                  {userData.accountVerfication ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <th className={thClass}>Blocked</th>
                <td className={tdClass}>{userData.blocked ? "Yes" : "No"}</td>
              </tr>
            </table>
            <div className="w-[80%]">
              <div className="text-color_5  font-workSans">Actions</div>
              {userData.blocked ? (
                <div
                  onClick={unblockUser}
                  className=" bg-[red] py-2 px-7 cursor-pointer rounded mt-2 w-min text-color_2"
                >
                  Unblock
                </div>
              ) : (
                <div
                  onClick={blockUser}
                  className=" bg-text_2 py-2 px-7 cursor-pointer rounded mt-2 w-min text-color_2"
                >
                  Block
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="px-2">
        <div className="text-bold font-workSans  text-[30px]">
          Order History
        </div>
        <div className="text-text_2 text-[21px]">
          User has not ordered anything yet!
        </div>
      </div>
    </>
  );
}

export default Users;
