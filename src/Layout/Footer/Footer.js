import React from "react";
import { Link } from "react-router-dom";
import { Links } from "./support";

const Footer = () => {
  return (
    <div className="bg-dry py-4 border-t-2 border-black">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 justify-between py-10">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3 className="text-base lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
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
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="/">
              <img
                src="image/fixedLogo.png"
                alt="logo"
                className="object-contain w-2/4"
              />
            </Link>
            <p className="mt-3 text-sm leading-7 text-border space-y-1">
              <div>Main Street- 12,</div>
              <div>Myanmar,Nay Pyi Taw</div>
              <div>Tell +959 11100011010</div>
              <div>Email: info@moviehv.com</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
