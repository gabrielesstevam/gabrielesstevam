"use client";
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="text-white p-5 m-2 flex gap-5 flex-col">
      <h2 className="text-4xl lg:text-5xl font-extrabold gradientText inline-block w-fit">CONTATO</h2>
      <div className="flex flex-col gap-3 lg:flex-row">
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0, stiffness: 200, damping: 30 }}
          whileHover={{
            color: "#ffffff",
            borderColor: "#ffffff",
            scale: 1.05,
            rotate: 1
          }}
          href="https://www.linkedin.com/in/gabrielesstevam/"
          target="_blank"
          className="p-4 flex items-center gap-5 shadow-2xl shadow-[#8800f746] bg-linear-to-r from-[#8800f746] to-transparent border border-purple-500 rounded-2xl text-purple-300 lg:px-8"
        >
          <FontAwesomeIcon className="text-2xl" icon={faLinkedin} />
          gabrielesstevam
        </motion.a>

        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0.15, stiffness: 200, damping: 30 }}
          whileHover={{
            color: "#ffffff",
            borderColor: "#ffffff",
            scale: 1.05,
            rotate: 1
          }}
          href="https://github.com/gabrielesstevam"
          target="_blank"
          className="p-4 flex items-center gap-5 shadow-2xl shadow-[#8800f746] bg-linear-to-r from-[#8800f746] to-transparent border border-purple-500 rounded-2xl text-purple-300 lg:px-8"
        >
          <FontAwesomeIcon className="text-2xl" icon={faGithub} />
          gabrielesstevam
        </motion.a>

        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0.3, stiffness: 200, damping: 30 }}
          whileHover={{
            color: "#ffffff",
            borderColor: "#ffffff",
            scale: 1.05,
            rotate: 1
          }}
          href="mailto:gsfe1502@gmail.com"
          className="p-4 flex items-center gap-5 shadow-2xl shadow-[#8800f746] bg-linear-to-r from-[#8800f746] to-transparent border border-purple-500 rounded-2xl text-purple-300 lg:px-8"
        >
          <FontAwesomeIcon className="text-2xl" icon={faEnvelope} />
          gsfe1502@gmail.com
        </motion.a>
      </div>
    </div>
  );
}
