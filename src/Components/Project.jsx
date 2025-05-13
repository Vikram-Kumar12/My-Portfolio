import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image1 from "../../public/images/image1.png";
import image2 from "../../public/images/image2.png";
const MotionLink = motion(Link); // wrap the Link properly

const Project = () => {
  const [projects] = useState([
    {
      id: 1,
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
      id: 2,
      title: "Car-Website",
      date: "2025",
      image: image2,
      video:
        "https://res.cloudinary.com/djhdbide5/video/upload/v1747122681/Vite_React_-_Brave_2025-05-01_22-46-06_eswby3.mp4",
      icon: ["React.js", "TailwindCSS", "Framer Motion"],
      liveUrl: "https://car-website-f262.vercel.app/",
      githubUrl: "https://github.com/Vikram-Kumar12/Car-Website",
      description:
        " Developed a responsive and visually engaging web application that helps users find their ideal car based on preferences such as brand, budget, and features.",
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
