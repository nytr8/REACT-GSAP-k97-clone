import React from "react";

const Agence = () => {
  return (
    <div>
      <div className="section-1 text-black">
        <div className="border-black h-100 w-75 left-[30%] top-[20%] rounded-3xl bg-amber-300 overflow-hidden absolute">
          <img
            className="object-cover h-full w-full"
            src="src/assets/carl.jpg"
            alt=""
          />
        </div>
        <div className="relative">
          <div className="mt-[55vh] flex flex-col items-center justify-center w-full ">
            <div className="font-[lau2] leading-[0.85] w-full flex items-center justify-center text-[20vw] uppercase">
              Soixan7e
            </div>
            <div className="font-[lau2]  leading-[0.85] w-full flex items-center justify-center text-[20vw] uppercase">
              Douze
            </div>
          </div>
          <div className="w-[60%] absolute right-0 text-[3vw] font-[lau2] leading-[0.95] ">
            <p className="px-5">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen"></div>
    </div>
  );
};

export default Agence;
