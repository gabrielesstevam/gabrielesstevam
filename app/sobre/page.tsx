import Sobre from "../../public/data/sobre.json";

export default function Home() {
  return (
    <>
      <div className="text-white p-5 m-2 flex gap-6 flex-col">
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
        
        {/* <div className="text-4xl font-extrabold">
          <h2 className="text-2xl gradientText inline-block">GABRIEL ESTEVAM</h2>
          <h1>DESENVOLVEDOR FRONT-END <span className="text-4xl gradientText">JÚNIOR</span></h1>
        </div> */}
        
        
      </div>
    </>
  );
}
