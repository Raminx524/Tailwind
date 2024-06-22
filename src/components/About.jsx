import React from "react";
import affordableIcon from "../assets/icon-affordable-prices.svg";
import snappyIcon from "../assets/icon-snappy-process.svg";
import peopleIcon from "../assets/icon-people-first.svg";

function About() {
  return (
    <div className="flex flex-col items-center text-center py-24">
      <div className="w-44 border-b-2  border-grayViolet"></div>
      <div className="flex flex-col gap-10">
        <h2>We’re different</h2>
        <div className="flex flex-col gap-5">
          <img src={snappyIcon} className="mx-auto" />
          <h3 className="font-bold">Snappy Process</h3>
          <p>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <img src={affordableIcon} className="mx-auto" />
          <h3 className="font-bold">Affordable Prices</h3>
          <p>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <img src={peopleIcon} className="mx-auto" />
          <h3 className="font-bold">People First</h3>
          <p>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
