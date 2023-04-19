import React from "react";
import { LoginForm } from "../../Components/ReviewForm";
import Upload from "../../Components/Upload";
import SideBar from "./SideBar";

const Profile = () => {
  return (
    <SideBar>
      <div className=" flex flex-col gap-6 md:gap-10">
        <h2 className=" text-xl font-bold">Profile</h2>
        <Upload />
        <LoginForm
          label="Email"
          placeholder="info@moviehv.com"
          type="email"
          bg={true}
        />

        <LoginForm
          label="Password"
          placeholder="*********************"
          type="password"
          bg={true}
        />

        <div className=" flex gap-2 flex-wrap flex-col-reverse justify-between items-center my-4 sm:flex-row ">
          <button className=" bg-subMain transition-all hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button className=" bg-main transition-all hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </SideBar>
  );
};

export default Profile;
