import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image1 from "../../public/images/image1.png";
import image6 from "../../public/images/image6.png";
import image5 from "../../public/images/image5.png";
import image7 from "../../public/images/image7.png";
const MotionLink = motion(Link); // wrap the Link properly

const Project = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "SELLNBUY",
      date: "2025",
      image: image7,
      video:
        "https://res.cloudinary.com/djhdbide5/video/upload/v1754388890/sellnbuy_ognfsj.mp4",
      icon: ["React.js", "JavaScript", "TailwindCSS", "Node.js", "Express.js", "Mongo DB"],
      liveUrl: "https://sellnbuy.vercel.app/",
      githubUrl: "https://github.com/Vikram-Kumar12/Sab-Kharido-Sab-Becho-",
      description:
        "💡 What is SELLNBUY? SELLNBUY is a web-based marketplace where users can: ✔️ Buy second-hand products at minimal cost ✔️ Sell their own used items to reach other interested buyers The idea is to create a simplified and accessible platform where people can reuse resources and reduce waste 🌱",
    },
    {
      id: 2,
      title: "LeetLab",
      date: "2025",
      image: image6,
      video:
        "https://res.cloudinary.com/djhdbide5/video/upload/v1750854764/audo_enhanced_LeetLab_-_Google_Chrome_2025-06-01_22-01-08_1_qdtete.mp4",
      icon: ["React.js", "JavaScript", "TailwindCSS", "Framer Motion", "Node.js", "Express.js", "PostgreSQL", "Docker", "Judge0"],
      liveUrl: "https://res.cloudinary.com/djhdbide5/video/upload/v1750854764/audo_enhanced_LeetLab_-_Google_Chrome_2025-06-01_22-01-08_1_qdtete.mp4",
      githubUrl: "https://github.com/Vikram-Kumar12/Leetlab-Project",
      description:
        "A responsive coding practice platform built to simulate real-world coding environments. Developed interactive problem-solving interface using ReactJS and Tailwind CSS.",
    },
    {
      id: 3,
      title: "Movie App",
      date: "2024",
      image: image1,
      video:
        "https://res.cloudinary.com/djhdbide5/video/upload/v1737269500/Movie-Project_udo5jt.mp4",
      icon: ["React.js", "API", "TailwindCSS"],
      liveUrl: "https://movie-app-react-silk.vercel.app/",
      githubUrl: "https://github.com/Vikram-Kumar12/Movie-App-React",
      description:
        "Developed a user-friendly movie application utilizing the TMDB API, enabling users to search a database of over 10,000 movies. ",
    },
    {
      id: 4,
      title: "School Website",
      date: "2025",
      image: image5,
      video:
        "https://res.cloudinary.com/djhdbide5/video/upload/v1750696383/School_Website1_fvtgbu.mp4",
      icon: ["React.js", "TailwindCSS", "Framer Motion"],
      liveUrl: "https://little-flower-vidya-mandir.vercel.app/",
      githubUrl: "https://github.com/Vikram-Kumar12/School-Website",
      description:
        " A modern, responsive school website built using ReactJS, Tailwind CSS, and JavaScript. It includes sections for student info, teachers, notice board, gallery, and contact form.",
    },
  ]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full lg:w-2/3 lg:ml-[33.33%] px-4 sm:px-8 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-7">
          <h2
            style={{ fontFamily: "font2" }}
            className="text-3xl font-semibold text-zinc-700"
          >
            Projects
          </h2>
          <div className="">
            <MotionLink
              to="/all-projects"
              className=" text-blue-600 duration-300"
            >
              View All Projects
            </MotionLink>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-1 border-zinc-300"
            >
              {/* Project Image (Top half) */}
              <div className="relative group h-48 sm:h-56 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fit rounded-xl transition-opacity duration-300 px-1 py-1 hidden sm:block group-hover:opacity-0"
                />

                <video
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-fit rounded-xl opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-1 py-1"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Project Info (Bottom half) */}
              <div className="p-6 border-t-1 border-zinc-300">
                <div className="flex justify-between items-center mb-4 ">
                  <h3
                    style={{ fontFamily: "font2" }}
                    className="text-xl font-semibold "
                  >
                    {project.title}
                  </h3>
                  <span
                    style={{ fontFamily: "font2" }}
                    className="text-gray-500 text-sm border-1 border-zinc-300"
                  >
                    {project.date}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-4 ">
                  <p>{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.icon.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-red-50 text-black text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <a
                    style={{ fontFamily: "font2" }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base "
                  >
                    Live Demo
                  </a>
                  <a
                    style={{ fontFamily: "font2" }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base "
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
