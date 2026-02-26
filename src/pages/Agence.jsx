import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);
  const imgArray = [
    "src/assets/carl.jpg",
    "src/assets/jarl.jpg",
    "src/assets/larl.jpg",
    "src/assets/parl.jpg",
    "src/assets/sarl.jpg",
    "src/assets/tarl.jpg",
    "src/assets/xarl.jpg",
    "src/assets/zarl.jpg",
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 20%",
        end: "top -120%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        anticipatePin: true,
        invalidateOnRefresh: true,

        onUpdate: (e) => {
          let index;
          if (e.progress < 1) {
            index = Math.floor(e.progress * imgArray.length);
          } else {
            index = imgArray.length - 1;
          }
          imgRef.current.src = imgArray[index];
          console.log(imgRef.current.src);
        },
      },
    });
  });

  return (
    <div>
      <div className="section-1 text-black py-1">
        <div
          ref={imgDivRef}
          className="border-black h-100 w-75 left-[29%] top-70 rounded-3xl bg-amber-300 overflow-hidden absolute"
        >
          <img
            ref={imgRef}
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
