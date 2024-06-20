import React from "react";
import introPic from "../assets/image-intro-mobile.jpg";

function Header() {
  return (
    <div>
      <div>
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button>View plans</button>
      </div>
      <img src={introPic} />
    </div>
  );
}

export default Header;
