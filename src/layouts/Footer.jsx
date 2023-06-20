import React from "react";
import AboutUs from "./Modals/AboutUs";
import SupportUs from "./Modals/SupportUs";

function Footer() {
  return (
    <footer className="py-3 flex justify-center items-center bg-slate-300 w-screen">
      <p className="flex justify-center items-center">
        <span className="underline cursor-pointer ">
          <AboutUs />
        </span>{" "}
        |{" "}
        <span className=" underline cursor-pointer">
          <SupportUs />
        </span>
      </p>
      <div className="flex justify-center mx-1 ">
        <a href="#" className="cursor-pointer px-1 w-9">
          <img src="src/assets/iGoogle.svg" alt="google" />
        </a>
        <a href="#" className="cursor-pointer px-1 w-9">
          <img src="src/assets/iInstagram.svg" alt="instagram" />
        </a>
        <a href="#" className="cursor-pointer px-1 w-9">
          <img src="src/assets/iFacebook.svg" alt="facebook" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
