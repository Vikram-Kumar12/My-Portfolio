import { useState, useEffect } from "react";
// import SideNavbar from "./SideNavbar";
import About from "./About";
import SideNavbar from "./SideNavbar";

const Hero = () => {

  return (
    <div className="flex flex-col lg:flex-row">

      {/* Left Sidebar - Fixed on lg screens */}
      <SideNavbar/>

      {/* Right Content - Scrollable */}
      <About/>

    </div>
  );
};

export default Hero;
