import Sobre from "../../public/data/sobre.json";

export default function Home() {
  return (
    <>
      <div className="text-white p-5 m-2 flex gap-6 flex-col md:w-2/3">
        <h2 className="text-4xl lg:text-5xl font-extrabold gradientText inline-block w-fit">SOBRE MIM</h2>
        <p className="text-justify lg:text-lg">{Sobre.texto[0]}</p>
        <p className="text-justify lg:text-lg">{Sobre.texto[1]}</p>
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold gradientText inline">CONHECIMENTOS</h2>
          <h2 className="text-3xl font-extrabold">TÉCNICOS</h2>
        </div>
        <div className="flex flex-wrap gap-3 md:w-2/3">
          {Sobre.tecnologias.map((tecnologia) => {
            return (
              <div key={tecnologia.nome} className="py-3 px-5 text-purple-300 bg-linear-to-r from-[#8800f780] to-transparent rounded-2xl border border-purple-600 shadow-2xl shadow-[#8800f780]">
                {tecnologia.nome}
              </div>
            )
          })}
        </div>
        
        {/* <div className="text-4xl font-extrabold">
          <h2 className="text-2xl gradientText inline-block">GABRIEL ESTEVAM</h2>
          <h1>DESENVOLVEDOR FRONT-END <span className="text-4xl gradientText">JÚNIOR</span></h1>
        </div> */}
        
        
      </div>
    </>
  );
}
