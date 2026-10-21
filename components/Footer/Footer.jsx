"use client";
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  
  return (
    <footer className="text-white flex justify-between mx-5 p-2 mt-10">
        <div className="flex gap-5 text-lg">
            <motion.a
            whileHover={{ scale:1.5 }}
            href="https://github.com/gabrielesstevam" target="_blank">
                <FontAwesomeIcon icon={faGithub}/>
            </motion.a>            
            <motion.a
            whileHover={{ scale:1.5 }}
            href="https://www.linkedin.com/in/gabrielesstevam/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin}/>
            </motion.a>

            <motion.a
            whileHover={{ scale:1.5 }}
            href="mailto:gsfe1502@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope}/>
            </motion.a>
        </div>
        <div className="flex gap-5">
            <motion.p
            whileHover={{ textShadow: "1px 1px 30px #ffffff" }} 
            className="flex gap-2 items-center text-sm md:text-xs">
                <FontAwesomeIcon icon={faCopyright}/>
                2026 Gabriel Estevam
            </motion.p>
        </div>
    </footer>
  );
}