import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  
  return (
    <footer className="text-white flex justify-between mx-5 p-2 mt-10">
        <div className="flex gap-5 text-lg">
            <a href="https://github.com/gabrielesstevam">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://www.linkedin.com/in/gabrielesstevam/">
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <a href="mailto:gsfe1502@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope}/>
            </a>
        </div>
        <div className="flex gap-5">
            <p className="flex gap-2 items-center text-sm md:text-xs">
                <FontAwesomeIcon icon={faCopyright}/>
                2026 Gabriel Estevam
            </p>
        </div>
    </footer>
  );
}