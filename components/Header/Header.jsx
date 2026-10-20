"use client";

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
      <div className="text-white p-5 flex justify-end md:hidden">
        <button onClick={() => {setIsMenuEnabled(true)}}>
          <FontAwesomeIcon icon={faBars} style={{ width: "25px", height: "25px" }}/>
        </button>
      </div>

      {isMenuEnabled ? (
        <div className={`text-white fixed h-[100vh] w-1/2 bg-[#17121F] right-0 ${isMenuEnabled ? "" : "hidden"} boardshadow`}>

          <div className="p-8 absolute">
            <button className="relative z-50 " onClick={() => setIsMenuEnabled(false)}>
              <FontAwesomeIcon icon={faCircleXmark} style={{ width: "25px", height: "25px" }}/>
            </button>  
          </div>

          <div className="h-full flex justify-center items-center">
              <ul className="border-r p-5 flex flex-col gap-15 text-lg">
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
        </div>
      ) : ""}
    </>
  );
}