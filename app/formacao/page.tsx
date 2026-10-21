"use client";
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"
import Formacao from "../../public/data/formacao.json";

export default function Home() {
  return (
    <div
      className="text-white p-5 m-2 flex gap-4 lg:gap-8 flex-col">
      <h2 className="text-4xl lg:text-5xl font-extrabold gradientText w-fit">FORMAÇÃO</h2>
      <div className="flex flex-col gap-5 lg:grid grid-cols-2">
        {Formacao.ensino.map((ensino, index) => {
          return (
            <motion.div
              key={ensino.nome}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                delay: index * 0.15,
                stiffness: 200,
                damping: 30
              }}
              whileHover={{ borderColor: "#ffffff" }}
              className="p-4 border border-purple-500 rounded-2xl shadow-2xl shadow-[#8800f746] bg-linear-to-r from-[#8800f746] flex flex-col gap-3"
            >
              <p className="text-purple-300 text-sm">{ensino.periodo}</p>
              <hr className="border-purple-300" />
              <h2 className="font-medium text-xl">{ensino.nome}</h2>
              <hr className="border-purple-300" />
              <p className="text-purple-300">{ensino.local}</p>
            </motion.div>
          );
        })}
      </div>
      <div>
        <h2 className="text-4xl lg:text-5xl font-extrabold gradientText w-fit">CURSOS</h2>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold w-fit">COMPLEMENTARES</h2>
      </div>
      <div className="flex flex-col gap-3 lg:grid grid-cols-3">
        {Formacao.cursos.map((curso, index) => {
          return (
            <motion.div
              key={curso.nome}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                delay: index * 0.15,
                stiffness: 200,
                damping: 30
              }}
              whileHover={{ borderColor: "#ffffff" }}
              className="p-4 border border-purple-500 rounded-2xl shadow-2xl shadow-[#8800f746] bg-linear-to-r from-[#8800f746] flex flex-col gap-3"
            >
              <p className="text-purple-300 text-sm">{curso.data}</p>
              <hr className="border-purple-300" />
              <h2 className="font-medium text-lg">{curso.nome}</h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
