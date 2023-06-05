import React from "react";
import { Link } from "react-router-dom";
import { Links } from "./support";

const Footer = () => {
  return (
    <div className="border-black bg-dry py-4">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 justify-between gap-5 py-10 sm:gap-9 md:grid-cols-7 lg:gap-11 xl:grid-cols-12 xl:gap-7">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 pb-3.5 sm:pb-0 md:col-span-2 lg:col-span-3"
            >
              <h3 className="mb-4 pb-0.5 text-base font-medium sm:mb-5 lg:mb-6 lg:leading-7">
                {link.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {link.links.map((text, index) => (
                  <li key={index}>
                    <Link
                      to={text.link}
                      className="text-border hover:text-subMain"
                    >
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Logo */}
          <div className="col-span-1 min-w-[200px] md:col-span-2 lg:col-span-3">
            <Link to="/">
              <img
                src="/image/fixedLogo.png"
                alt="logo"
                className="w-2/4 object-contain"
              />
            </Link>
            <p className="mt-3 space-y-1 text-sm leading-7 text-border">
              <span className="block">Main Street- 12,</span>
              <span className="block">Myanmar,Nay Pyi Taw</span>
              <span className="block">Tell +959 11100011010</span>
              <span className="block">Email: info@moviehv.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
