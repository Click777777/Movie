import React from "react";
import { LoginForm } from "../../Components/ReviewForm";
import SideBar from "./SideBar";

const Password = () => {
  return (
    <SideBar>
      <div className=" flex flex-col gap-6 md:gap-10">
        <h2 className=" text-xl font-bold">Change Password</h2>
        <LoginForm
          label="Current Password"
          placeholder="*********************"
          type="password"
          bg={true}
        />

        <LoginForm
          label="New Password"
          placeholder="*********************"
          type="password"
          bg={true}
        />

        <LoginForm
          label="Comfirm Password"
          placeholder="*********************"
          type="password"
          bg={true}
        />

        <div className=" flex justify-end items-center my-4  ">
          <button className=" bg-main transition-all hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Change
          </button>
        </div>
      </div>
    </SideBar>
  );
};

export default Password;
