"use client";
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"
import Projetos from "../../public/data/projetos.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss,
  faJs,
  faReact,
  faTailwindCss,
  faTypescript, 
  faGithub,
  faPython
} from "@fortawesome/free-brands-svg-icons";

function AcharIcon(text : string){
  switch(text){
    case("Html"):{
      return (faHtml5)
    }
    case("Css"):{
      return (faCss)
    }
    case("Js"):{
      return (faJs)
    }
    case("Tailwind"):{
      return (faTailwindCss)
    }
    case("React"):{
      return (faReact)
    }
    case("Ts"):{
      return (faTypescript)
    }
    case("Python"):{
      return (faPython)
    }
  }
}

export default function Home() {
  return (
    <>
    <motion.div 
        className="text-white p-5 m-2 flex gap-6 flex-col"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 0.5, ease:"easeIn", delay: 0.5 }}>
      <h2 className="text-4xl lg:text-5xl font-extrabold gradientText inline-block w-fit">PROJETOS</h2>
      <div className="flex flex-col gap-3 lg:grid grid-cols-2 lg:gap-5">
        {Projetos.map((projeto) => {
          return(
            <motion.div 
            whileHover={{ borderColor:"#ffffff" }}
            transition={{ type:"spring" }}
            key={projeto.titulo} className="p-3 border border-purple-500 bg-linear-to-r from-[#8800f746] to-transparent rounded-2xl shadow-2xl shadow-[#8800f780] flex flex-col gap-3">
              <p className="text-sm text-purple-300">{projeto.data}</p>
              <h1 className="font-medium text-xl">{projeto.titulo}</h1>
              <hr className="border-purple-300" />
              <p>{projeto.descricao}</p>
              <hr className="border-purple-300" />
              <div>
              {projeto.tecnologias.map((tecnologia) => {
                  return (
                    <FontAwesomeIcon key={tecnologia} className="text-2xl lg:text-3xl text-purple-200 hover:text-white transition" icon={AcharIcon(tecnologia)}></FontAwesomeIcon>
                  )
                })}
                </div>
              <hr className="border-purple-300" />
              <div className="flex gap-3 items-center">
                <motion.p whileHover={{ borderColor:"#ffffff", color:"#ffffff", scale:1.05 }} transition={{ type:"spring" }} className="flex items-center gap-3 p-2 border border-purple-500 bg-linear-to-r from-[#8800f780] to-transparent w-fit rounded-2xl text-purple-300">
                  Confira o Resultado <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </motion.p>
                <motion.a whileHover={{ scale:1.2 }} transition={{ type:"spring" }} href={projeto.github} target="_blank"><FontAwesomeIcon className="text-3xl text-purple-300 hover:text-white" icon={faGithub}/></motion.a>
                {projeto.site ? (<motion.a whileHover={{ scale:1.2 }} transition={{ type:"spring" }} href={projeto.site} target="_blank"><FontAwesomeIcon className="text-3xl text-purple-300 hover:text-white" icon={faGlobe}/></motion.a>) : ""}
              </div>
              

            </motion.div>
            
          )
        })}
      </div>
    </motion.div>



      {/* <div className="text-white p-5 m-2 flex gap-6 flex-col">
        <h2 className="text-4xl font-extrabold gradientText inline-block w-fit">SOBRE MIM</h2>
        <p className="text-justify">{Sobre.texto[0]}</p>
        <p className="text-justify">{Sobre.texto[1]}</p>
        <div>
          <h2 className="text-4xl font-extrabold gradientText inline">CONHECIMENTOS</h2>
          <h2 className="text-3xl font-extrabold">TÉCNICOS</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {Sobre.tecnologias.map((tecnologia) => {
            return (
              <div key={tecnologia.name} className="p-3 bg-linear-to-r from-[#ffffff80] to-transparent rounded-2xl border">
                {tecnologia.name}
              </div>
            )
          })}
        </div>
      </div> */}
    </>
  );
}
