import React from "react";
import Layout from "../Layout/Layout";
import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";
import sukuna from "../assist/My project-2.png";
import Head from "../Components/Head";

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
      <div className="container mx-auto min-h-screen px-2 pt-20">
        <Head title="Contact Us" image={sukuna}></Head>

        <div className="my-10 grid gap-6 md:grid-cols-2 lg:my-20 lg:grid-cols-3 xl:gap-8">
          {data.map((i) => (
            <div
              key={i.id}
              className="flex-colo rounded-lg border border-border bg-dry p-10 text-center"
            >
              <span className="flex-colo mb-4 h-20 w-20 rounded-full bg-main text-2xl text-subMain">
                <i.icon />
              </span>
              <h5 className="mb-2 text-xl font-semibold">{i.title}</h5>
              <p className="mb-0 text-sm leading-7 text-text">
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
    </Layout>
  );
};

export default ContactUs;
