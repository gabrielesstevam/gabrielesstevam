"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Link = [
  {name: "Início", link:"/inicio"},
  {name: "Sobre", link:"/inicio"},
  {name: "Projetos", link:"/inicio"},
  {name: "Formação", link:"/inicio"},
  {name: "Experiência", link:"/inicio"},
  {name: "Contato", link:"/inicio"},

]

export default function Header() {
  const [isMenuEnabled, setIsMenuEnabled] = useState(true)

  return (
    <>
      <div className="text-white border p-5 flex justify-end">
        <button>
          <FontAwesomeIcon icon={faBars} className="w-6 h-6"/>
        </button>
      </div>
      
      <div className={`text-white fixed h-screen w-2/3 bg-[#17121F] right-0 ${isMenuEnabled ? "" : "hidden"}`}>
        <div className="border border-blue-500 p-8">
          <FontAwesomeIcon icon={faCircleXmark} className="w-6 h-6"/>
        </div>
        <div className="border border-green-500 h-full flex justify-center items-center">
          <div>

          </div>
        </div>
        
      </div>
    </>
  );
}