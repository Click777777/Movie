import React from "react";
import Layout from "../Layout/Layout";
import Footer from "../Layout/Footer/Footer";
import Head from "../Components/Home/Head";
import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";

const ContactUs = () => {
  const data = [
    {
      id: 1,
      title: "Eamil Us",
      info: "Interactively grow backend ideas for cross-plateform models.",
      icon: FiMail,
      contact: "info@moviehv.com",
    },
    {
      id: 2,
      title: "Call Us",
      info: "Distinactively exploit optimal aligements for intuitive bandwidth.",
      icon: FiPhoneCall,
      contact: "+959 11100011010",
    },
    {
      id: 3,
      title: "Location",
      info: "Pyinmana, Main Street- 12",
      icon: FiMapPin,
      contact: "Myanmar,Nay Pyi Taw",
    },
  ];
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Head title="Contact Us"></Head>
        <div className="grid gap-6 my-10 md:grid-cols-2 lg:grid-cols-3 lg:my-20 xl:gap-8">
          {data.map((i) => (
            <div
              key={i.id}
              className="flex-colo p-10 bg-dry border border-border rounded-lg text-center"
            >
              <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
                <i.icon />
              </span>
              <h5 className="text-xl font-semibold mb-2">{i.title}</h5>
              <p className="text-sm text-text leading-7 mb-0">
                <a href={`mailto:{i.contact}`} className="text-blue-600">
                  {i.contact}
                </a>
                <br />
                {i.info}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full hidden lg:inline-block">
        <Footer></Footer>
      </div>
    </Layout>
  );
};

export default ContactUs;
