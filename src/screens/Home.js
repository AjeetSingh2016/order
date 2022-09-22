import React from "react";
import { Customers, Main, Information } from "../components";

const Home = () => {
  return (
    <div className=" w-full h-screen flex justify-start">
      <Customers />

      <div className="bg-white w-4/5 h-full flex flex sm:flex-col lg:flex-row">

        <Main/>
        <Information />
      </div>
    </div>
  );
};

export default Home;
