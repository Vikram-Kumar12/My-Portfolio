import React from "react";
import Java_certificate from "/Java_certificate.png";
import { motion } from "framer-motion"; // Corrected the import
import { useNavigate } from "react-router-dom";

function Certificate() {
  const navigate = useNavigate();
  let certdetails = [
    {
      name: "Data Structures and Algorithms in Java",
      description:
        "Completed the DSA in Java course, gaining expertise in Algorithms, Data Structures and problem-solving techniques.",
      issueby: "Issued by: PW Skills",
      issuedate: "Issued Date: December 2024",
      img: Java_certificate,
    },
  ];

  return (
    <div className="w-full bg-[#170A3F] py-10 sm:px-10 px-3">
      <h1 className="flex items-center justify-center text-2xl sm:text-4xl">
        Certification & Achievements
      </h1>

      {certdetails.map((elem, index) => (
        <motion.div
          key={index}
          className="w-full sm:min-h-[80vh] min-h-[80vh] bg-[#390F7C] mt-5 sm:flex py-5 rounded-lg px-3 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="sm:ml-10 sm:w-[45%] w-full min-h-[35vh] sm:h-[67vh] sm:px-0 px-3 sm:flex sm:flex-col sm:justify-center">
            <motion.h1 className="sm:text-3xl font-semibold text-xl">
              {elem.name}
            </motion.h1>
            <p className="mt-5">{elem.description}</p>
            <motion.h3 className="mt-5 text-lg">{elem.issueby}</motion.h3>
            <motion.h3 className="mt-3 text-lg">{elem.issuedate}</motion.h3>
          </div>

          <div className="sm:w-[45%] sm:ml-10 w-full h-[40vh] sm:h-full overflow-hidden rounded-xl sm:mt-0 mt-0">
            <img
              className="w-full h-full object-contain rounded-lg"
              src={elem.img}
              alt={elem.name}
            />
          </div>
        </motion.div>
      ))}

      <button
        onClick={() => navigate(-1)}
        className="bg-[#00EEFF] shadow-[0_0_15px_#00EEFF] hover:shadow-[0_0_0px_#00EEFF] px-4 py-2 text-zinc-800 font-mono rounded-full transition-shadow duration-300 ease-in-out mt-10"
      >
        Back to Home
      </button>
    </div>
  );
}

export default Certificate;
