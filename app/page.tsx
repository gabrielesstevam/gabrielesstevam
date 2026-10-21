"use client";
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <motion.div 
        className="text-white p-5 m-2 flex gap-5 flex-col lg:w-2/3"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 0.5, ease:"easeIn", delay: 0.5 }}
      >
        <div className="text-4xl md:text-7xl font-extrabold">
          <h2 className="text-3xl gradientText inline-block md:text-5xl">GABRIEL ESTEVAM</h2>
          <h1>DESENVOLVEDOR <br/> FRONT-END <span className="text-3xl md:text-5xl gradientText">JÚNIOR</span></h1>
        </div>
        <p className="text-justify lg:w-2/3 lg:text-lg">Olá! Sou Gabriel, estudante de Sistemas para Internet no IFRN, apaixonado por tecnologia e desenvolvimento web. Estou desenvolvendo minhas habilidades em programação e criando projetos para evoluir como desenvolvedor.</p>
        <a href="../public/data/Currículo_GabrielEstevam.pdf" download={"Currículo_GabrielEstevam.pdf"} className="bg-linear-to-r from-[#8800f780] to-transparent border border-purple-600 rounded-2xl p-3 text-center text-purple-300 flex items-center justify-center gap-3 shadow-2xl shadow-[#8800f780] lg:w-2/3">
          <FontAwesomeIcon className="text-xl" icon={faDownload} />
          Baixe meu currículo aqui!
        </a>
      </motion.div>
    </>
  );
}
