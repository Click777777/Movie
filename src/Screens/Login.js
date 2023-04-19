import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../Components/ReviewForm";
import Footer from "../Layout/Footer/Footer";
import Layout from "../Layout/Layout";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  return (
    <Layout>
      <div className=" container mx-auto px-2 pt-40 mb-24 flex-colo">
        <div className=" w-full bg-dry flex-colo p-6 xs:p-14 md:w-3/5 2xl:w-2/5 rounded-lg border border-border gap-8">
          <h1 className=" uppercase w-full text-center text-subMain text-2xl tracking-wider font-bold  ">
            movie | hv
          </h1>
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

          <Link
            to="/dashboard"
            className=" w-full text-white bg-subMain flex-rows gap-4 transition hover:bg-main p-4 rounded-lg"
          >
            <FiLogIn />
            Log In
          </Link>

          <div className=" text-center text-border flex-rows flex-wrap">
            <p>Don't have an account?</p>
            <div className="">
              <Link to="/register" className=" text-dryGray font-medium ml-2 ">
                Sing Up Now !
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full hidden lg:inline-block">
        <Footer></Footer>
      </div>
    </Layout>
  );
};

export default Login;
