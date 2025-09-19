import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResumeAndCertificate = () => {
  const [activeTab, setActiveTab] = useState("resume");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to handle PDF download
  const handleDownload = (filePath, fileName) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to view PDF in new tab
  const handleView = (filePath) => {
    window.open(filePath, "_blank");
  };

  // Replace these with your actual file paths
  const resumePDF1 = "./Resume/Vikram_Frontend_Developer.pdf";
  const resumePDF2 = "./Resume/Vikram_MernStack_Resume1.pdf";
  const certificates = [
    {
      id: 1,
      title: "Web Development",
      issuer: "Chaicode",
      date: "2025",
      image: "./certificate/Web-Development.png",
    },
    {
      id: 2,
      title: "Java + DSA",
      issuer: "Physics Wallah",
      date: "2024",
      image: "./certificate/Java+DSA.png",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-full lg:w-2/3 lg:ml-[33.33%] px-4 sm:px-8 lg:px-8 xl:px-12 mt-20 bg-white"
    >
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h2
            style={{ fontFamily: "font2" }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
          >
            Resume & Certifications
          </h2>

          {/* Tab Navigation */}
          <div style={{ fontFamily: "font2" }} className="flex border-b border-gray-200 mb-8">
            <button
              className={`py-3 px-6 font-medium text-sm md:text-base ${
                activeTab === "resume"
                  ? "text-gray-900 border-b-2 border-gray-200"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("resume")}
            >
              Resume
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm md:text-base ${
                activeTab === "certificates"
                  ? "text-gray-900 border-b-2 border-gray-200"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("certificates")}
            >
              Certificates
            </button>
          </div>

          {/* Resume Section */}
          <AnimatePresence mode="wait">
            {activeTab === "resume" && (
              <motion.div
                key="resume"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="mb-12 md:flex items-center gap-10"
              >
                <div className="rounded-2xl shadow-md px-10 py-5 hover:shadow-xl transition-all border-1 border-gray-200 mb-6 md:mb-0">
                  <h3 style={{ fontFamily: "font2" }} className="text-xl font-semibold text-gray-800 mb-4">
                    MERN Stack Developer
                  </h3>

                  <div className="flex flex-col gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 bg-[#0A66C2]  text-white font-medium py-3 px-6 rounded-lg transition-colors"
                      onClick={() => handleDownload(resumePDF2, "My_Resume.pdf")}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download Resume
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 border border-[#0A66C2] text-[#0A66C2] hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors"
                      onClick={() => handleView(resumePDF2)}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 15.5v-11a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2z"
                        />
                      </svg>
                      View Resume
                    </motion.button>
                  </div>
                </div>
                <div className="rounded-2xl shadow-md px-10 py-5 hover:shadow-xl transition-all border-1 border-gray-200 ">
                  <h3 style={{ fontFamily: "font2" }} className="text-xl font-semibold text-gray-800 mb-4">
                    Front-End Developer
                  </h3>

                  <div className="flex flex-col gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 bg-[#0A66C2]  text-white font-medium py-3 px-6 rounded-lg transition-colors"
                      onClick={() => handleDownload(resumePDF1, "My_Resume.pdf")}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download Resume
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 border border-[#0A66C2] text-[#0A66C2] hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors"
                      onClick={() => handleView(resumePDF1)}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 15.5v-11a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2z"
                        />
                      </svg>
                      View Resume
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Certificates Section */}
          <AnimatePresence mode="wait">
            {activeTab === "certificates" && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="h-60 bg-gray-200 overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="font-semibold text-lg text-gray-800 mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-gray-600 mb-2">
                          {cert.issuer} • {cert.date}
                        </p>

                        <div className="flex justify-between mt-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-[#0A66C2] hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                            onClick={() => handleView(cert.image)}
                          >
                            View PDF
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-1"
                            onClick={() =>
                              handleDownload(
                                cert.image,
                                `${cert.title.replace(/\s+/g, "_")}.png`
                              )
                            }
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>
                            Download
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default ResumeAndCertificate;
