import { useState, useEffect } from "react";
import photo2 from "../../public/images/photo2.jpeg";
import photo1 from "../../public/images/photo1.jpeg";
const SideNavbar = () => {
  const [tapped, setTapped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Front-end Developer", "Backend Developer", "Problem Solver", "React Developer"];

  // Rotate roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Sidebar - Fixed on lg screens */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-6 sm:p-12 lg:p-8 xl:p-12 2xl:p-12 lg:fixed lg:h-full flex flex-col items-center  z-10 mt-10 sm:mt-0">
        {/* Square Profile Image with Hover Animation */}
        <div
          className="relative mb-4 w-70 h-70 rounded-xl "
          onMouseEnter={() => setTapped(true)}
          onMouseLeave={() => setTapped(false)}
          onTouchStart={() => setTapped(!tapped)}
          onTouchEnd={() => setTapped(!tapped)}
        >
          {/* Default Image */}
          <img
            src={photo1}
            alt="Normal"
            className={`w-full h-full object-cover rounded-xl transition-all ${
              tapped ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Hover/Tap Image */}
          <img
            src={photo2}
            alt="Special"
            className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-300 ${
              tapped ? "opacity-100 -rotate-3" : "opacity-0"
            }`}
          />
        </div>

        {/* Name */}
        <h1
          style={{ fontFamily: "font2" }}
          className="text-3xl 2xl:text-7xl sm:text-4xl font-bold text-gray-800 mb-1 text-center "
        >
          Vikram Kumar
        </h1>

        {/* Rotating Roles */}
        <div style={{ fontFamily: "font2" }} className="h-8">
          <p className="text-[#F5380E]  text-lg sm:text-xl italic transition-all duration-500 transform text-center 2xl:text-5xl 2xl:mt-3">
            {roles[currentRole]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;