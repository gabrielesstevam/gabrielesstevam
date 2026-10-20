import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  
  return (
    <footer className="text-white flex justify-between mx-5 p-2">
        <div className="flex gap-5">
            <a href="https://github.com/gabrielesstevam">
                <FontAwesomeIcon icon={faGithub} style={{ width: "25px", height: "25px" }}/>
            </a>
            <a href="https://www.linkedin.com/in/gabrielesstevam/">
                <FontAwesomeIcon icon={faLinkedin} style={{ width: "25px", height: "25px" }}/>
            </a>
            <a href="mailto:gsfe1502@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} style={{ width: "25px", height: "25px" }}/>
            </a>
        </div>
        <div className="flex gap-5">
            <p className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faCopyright} style={{ width: "15px", height: "15px" }}/>
                2026 Gabriel Estevam
            </p>
        </div>
    </footer>
  );
}