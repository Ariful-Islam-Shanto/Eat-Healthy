import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";



const Home = () => {
  return (
    <div className="py-8 space-y-6">
      <h1 className="text-5xl text-[#2da116] font-bold text-center">
        Eating well
      </h1>
      <div className="flex ">
        <div className="bg-white shadow-xl  rounded-md w-1/4">
          <Nav></Nav>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
