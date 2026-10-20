import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <>
      <div className="text-white p-5 m-2 flex gap-5 flex-col">
        <div className="text-4xl font-extrabold">
          <h2 className="text-2xl gradientText inline-block">GABRIEL ESTEVAM</h2>
          <h1>DESENVOLVEDOR FRONT-END <span className="text-4xl gradientText">JÚNIOR</span></h1>
        </div>
        <p className="text-justify">Olá! Sou Gabriel, estudante de Sistemas para Internet no IFRN, apaixonado por tecnologia e desenvolvimento web. Estou desenvolvendo minhas habilidades em programação e criando projetos para evoluir como desenvolvedor.</p>
        <a href="../public/data/Currículo_GabrielEstevam.pdf" download={"Currículo_GabrielEstevam.pdf"} className="bg-linear-to-r from-[#8800f780] to-transparent border border-purple-600 rounded-2xl p-3 text-center">
          <FontAwesomeIcon icon={faDownload} />
          Baixe meu currículo aqui!
        </a>
      </div>
    </>
  );
}
