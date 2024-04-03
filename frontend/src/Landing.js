import "./Landing.css";
import Typewriter from "./Typewriter";
import $ from "jquery";
import { FaArrowDown } from "react-icons/fa";

function Landing() {
  return (
    <div className="relative h-screen bg-[black] flex justify-center items-center flex-col overflow-hidden">
      <span className="absolute w-full h-[1914px] marquee-item top-0 opacity-[27%]"></span>
      <span className="absolute bottom-0 h-[60%] bg-black w-full spanBlur"></span>
      <div className="flex items-end h-full m-6 w-13ch">
        <Typewriter />
      </div>
      <div className="flex items-end justify-center w-full h-full ">
        <button
          className="z-50"
          onClick={() => {
            let arrow = document.querySelector(".bounce");
            arrow.classList.add("clicked");

            if (window.innerWidth > 780) {
              window.scrollTo(0, 950);
            } else if (
              window.innerWidth > 380 && 
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
            ) {
              window.scrollTo(0, 900);
            } else if (
              window.innerWidth > 300 &&
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
            ) {
              window.scrollTo(0, 660);
            }
          }}
        >
          <FaArrowDown className="w-12 h-12 mb-2 bounce text-white down-arrow xxl:w-[4rem] xxl:h-[4rem]" />
        </button>
      </div>
    </div>
  );
}

export default Landing;
