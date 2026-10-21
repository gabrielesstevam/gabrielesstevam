"use client";
import { motion } from "motion/react"

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-160 mx-5 text-center">
        <motion.h1 
          className="text-white text-4xl md:text-6xl lg:text-8xl font-extrabold gradientText p-2 lg:w-2/3" 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration: 2, ease:"easeIn", delay: 0.5 }}
        >NOVAS EXEPERIÊNCIAS EM BREVE</motion.h1>
      </div>
    </>
  );
}
