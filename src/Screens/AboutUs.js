import React from "react";
import Layout from "../Layout/Layout";
import Head from "../Components/Head";
import zinitsu from "../assist/zenitsuF.gif";

const AboutUs = () => {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 pt-20">
        <Head title="About Us" image={zinitsu}></Head>
        <div className="px-4 py-10 xl:py-20">
          <div className="grid items-center gap-4 xl:grid-cols-2 xl:gap-16 ">
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
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-dry p-8">
                  <span className="block text-3xl font-extrabold">10K</span>
                  <h4 className="my-2 text-lg font-semibold">Listed Movies</h4>
                  <p className="mb-0 text-sm leading-7 text-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente doloremque ipsa id provident reiciendis molestiae
                    culpa error nemo.
                  </p>
                </div>
                <div className="rounded-lg bg-dry p-8">
                  <span className="block text-3xl font-extrabold">8K</span>
                  <h4 className="my-2 text-lg font-semibold">Lovely User</h4>
                  <p className="mb-0 text-sm leading-7 text-text">
                    Complete free,without registeration!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="/image/aboutZen.gif"
                alt="err"
                className="hidden w-full rounded-lg object-cover xl:block "
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
