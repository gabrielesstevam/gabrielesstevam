import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
    <div className="text-white p-5 m-2 flex gap-5 flex-col">
      <h2 className="text-4xl lg:text-5xl font-extrabold gradientText inline-block w-fit">CONTATO</h2>
      <div className="flex flex-col gap-3 lg:flex-row">
        <a href="https://www.linkedin.com/in/gabrielesstevam/" target="_blank" className="p-4 flex items-center gap-5 shadow-2xl shadow-[#8800f746] bg-linear-to-r from-[#8800f746] to-transparent border border-purple-500 rounded-2xl  text-purple-300 lg:px-8"> 
          <FontAwesomeIcon className="text-2xl" icon={faLinkedin}/>
          gabrielesstevam
        </a>
        <a href="https://github.com/gabrielesstevam" target="_blank" className="p-4 flex items-center gap-5 shadow-2xl shadow-[#8800f746] bg-linear-to-r from-[#8800f746] to-transparent border border-purple-500 rounded-2xl  text-purple-300 lg:px-8"> 
          <FontAwesomeIcon className="text-2xl" icon={faGithub}/>
          gabrielesstevam
        </a>
        <a href="mailto:gsfe1502@gmail.com" target="_blank" className="p-4 flex items-center gap-5 shadow-2xl shadow-[#8800f746] bg-linear-to-r from-[#8800f746] to-transparent border border-purple-500 rounded-2xl  text-purple-300 lg:px-8"> 
          <FontAwesomeIcon className="text-2xl" icon={faEnvelope}/>
          gsfe1502@gmail.com
      </a>
      </div>
      
    </div>
    </>
  );
}
