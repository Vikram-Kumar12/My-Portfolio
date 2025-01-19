import React from "react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This will enable smooth scrolling
    });
  };

  return (
    <div className="w-full py-5 bg-[#170A3F]">
      <div className="flex items-center justify-between mt-5 sm:px-5 px-3">
        <h1 className="text-sm sm:text-xl text-white">
          Copyrights © 2024 by @Vikram | All rights Reserved.
        </h1>
        <h1
          onClick={scrollToTop}
          className="bg-[#1CE8F7] rounded-lg px-3 py-2 cursor-pointer flex items-center justify-center"
        >
          <svg
            className="text-white"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001 13.2 13.2 34.8 13.2 48 0l451.8-451.8 445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"></path>
          </svg>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
