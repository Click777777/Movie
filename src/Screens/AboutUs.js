import React from "react";
import Layout from "../Layout/Layout";
import Footer from "../Layout/Footer/Footer";
import Head from "../Components/Home/Head";

const AboutUs = () => {
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Head title="About Us"></Head>
        <div className="px-4 py-10 xl:py-20">
          <div className="grid gap-4 items-center xl:grid-cols-2 xl:gap-16 ">
            <div>
              <div>
                <h3 className="mb-4 text-xl font-semibold lg:text-3xl">
                  Welcome to our ONLINE STREAMING
                </h3>
              </div>
              <div className="mt-3 text-sm leading-8 text-text">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur odit delectus nulla repellat minima ad eos magni!
                  Tempora voluptatum ipsum ipsa, temporibus in provident
                  adipisci aperiam harum reiciendis mollitia, ipsam porro eos
                  unde obcaecati sit! Temporibus voluptatem ex illum laboriosam,
                  dolorem quidem minus sint. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aspernatur odit delectus nulla
                  repellat minima ad eos magni! Tempora voluptatum ipsum ipsa,
                  temporibus in provident adipisci aperiam harum reiciendis
                  mollitia, ipsam porro eos unde obcaecati sit! Temporibus
                  voluptatem ex illum laboriosam, dolorem quidem minus sint.
                </p>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi sunt voluptatem corrupti expedita. Quo labore amet
                  dolores accusamus similique necessitatibus reiciendis vitae?
                </p>
              </div>
              <div className="grid gap-6 mt-8 md:grid-cols-2">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl font-extrabold block">10K</span>
                  <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                  <p className="text-text leading-7 text-sm mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente doloremque ipsa id provident reiciendis molestiae
                    culpa error nemo.
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl font-extrabold block">8K</span>
                  <h4 className="text-lg font-semibold my-2">Lovely User</h4>
                  <p className="text-text leading-7 text-sm mb-0">
                    Complete free,without registeration!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="/image/zenitsuS.gif"
                alt="err"
                className="w-full object-cover rounded-lg hidden xl:block "
              />
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

export default AboutUs;
