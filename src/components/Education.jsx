// ContactCards.jsx
import { motion } from "framer-motion";

const contacts = [
  {
    id: 1,
    name: "Bachelor of computer aplication",
    college: "Arka Jain University, Jamshedpur",
    marks: "CGPA: 9.7",
    date: "2023 - 2026",
  },
  {
    id: 2,
    name: "Secondary School",
    college: "Inter Science College, Hazaribagh",
    marks: "Percentage: 78%",
    date: "2021 - 2023",
  },
  {
    id: 3,
    name: "Primary School",
    college: "Vananchal Shishu Vidya Mandir, Hazaribagh",
    marks: "Percentage: 93%",
    date: "2021",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function Education() {
  return (
    <div className="w-full lg:w-2/3 lg:ml-[33.33%] px-4 sm:px-8 lg:px-8 xl:px-12  mt-20">
      <h2
        style={{ fontFamily: "font2" }}
        className="text-2xl  mb-5 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        Education
      </h2>
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  px-4 sm:px-6">
        {contacts.map((contact, index) => (
          <motion.div
            key={contact.id}
            className="rounded-2xl shadow-md px-2 py-5 hover:shadow-xl transition-all border-1 border-gray-200"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div
              className={`text-black font-semibold transition-colors duration-300  rounded-full `}
            >
              {contact.name}
            </div>
            <div
              className={`text-black text-sm mt-1 font-semibold transition-colors duration-300  rounded-full `}
            >
              {contact.college}
            </div>
            <div
              className={`text-black text-sm mt-2 font-bold transition-colors duration-300  rounded-full `}
            >
              {contact.marks}
            </div>
            <div
              className={`text-black text-sm mt-2 font-bold transition-colors duration-300  rounded-full `}
            >
              {contact.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
