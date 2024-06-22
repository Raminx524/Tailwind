import React from "react";
import introPic from "../assets/image-intro-mobile.jpg";
import MyBtn from "./ui-components/MyBtn";

function Header() {
  return (
    <div className="bg-myPurple text-white">
      <img src={introPic} />
      <div className="py-24 flex flex-col gap-3.5 items-center">
        <h1 className="text-4xl font-semibold text-center">
          Humanizing your insurance.
        </h1>
        <p className="text-center text-base w-80">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <MyBtn val={"View Plans"} />
      </div>
    </div>
  );
}

export default Header;
