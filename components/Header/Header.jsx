"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link"

const LinkList = [
  {name: "Início", link:"/"},
  {name: "Sobre", link:"/sobre"},
  {name: "Projetos", link:"/projetos"},
  {name: "Formação", link:"/formacao"},
  {name: "Experiência", link:"/experiencia"},
  {name: "Contato", link:"/contato"},
]

export default function Header() {
  const [isMenuEnabled, setIsMenuEnabled] = useState(false)

  return (
    <>
      {/* ---------------------------------------------------------*/}

      <div className="text-white p-5 flex justify-end md:hidden">
        <button onClick={() => {setIsMenuEnabled(true)}}>
          <FontAwesomeIcon icon={faBars} style={{ width: "25px", height: "25px" }}/>
        </button>
      </div>
      <AnimatePresence>
        {isMenuEnabled ? (
          <motion.div 
          initial={{ x: 250 }}
          animate={{ x: 0 }}
          exit={{ x: 250 }}
          transition={{ duration:0.3, ease:"easeOut"}}
          
          className={`text-white fixed h-[100vh] w-1/2 bg-[#17121F] z-100 right-0 ${isMenuEnabled ? "" : "hidden"} boardshadow`}>

            <div className="p-8 absolute">
              <button className="relative z-50 " onClick={() => setIsMenuEnabled(false)}>
                <FontAwesomeIcon icon={faCircleXmark} style={{ width: "25px", height: "25px" }}/>
              </button>  
            </div>

            <div className="h-full flex justify-center items-center">
                <ul className="border-r p-5 flex flex-col landscape:gap-5 gap-15 text-lg">
                  {LinkList.map((link)=> {
                    return(
                      <li key={link.name} className="text-end link">
                        <Link href={link.link} onClick={() => setIsMenuEnabled(false)}>
                          {link.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
            </div>
          </motion.div>
        ) : ""}
      </AnimatePresence>

      {/* ---------------------------------------------------------*/}
      {/* ---------------------------------------------------------*/}

      <div className="hidden md:flex text-white h-20 justify-center items-center">
        <ul className="text-white flex border-b justify-center items-center w-fit gap-8 py-2 px-5">
          {LinkList.map((link) => {
            return( 
              <motion.p key={link.name}
                whileHover={{ scale:1.2,  textShadow: "1px 1px 20px #ffffff" }}
                whileTap={{ scale:1.7 }}
                transition={{ type:"spring", }}
                >
                <Link  href={link.link}>
                  {link.name}
                </Link>
              </motion.p>
            ) 
          })}
        </ul>
      </div>
      
    </>
  );
}