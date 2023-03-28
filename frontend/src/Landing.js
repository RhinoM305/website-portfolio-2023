import "./Landing.css";
import Typewriter from "./Typewriter";
import { FaArrowDown } from "react-icons/fa";

function Landing() {
  // window.addEventListener("load", () => {
  //   window.scrollTo(0, 0);
  // });
  return (
    <div className="h-screen bg-[black] flex justify-center items-center flex-col border-b-2 border-[black] shadow-lg shadow-gray-800">
      <div className="w-13ch m-6 h-full flex items-end">
        <Typewriter />
      </div>
      <div className="w-full h-full flex items-end justify-center ">
        <button
          className=""
          onClick={() => {
            let arrow = document.querySelector(".bounce");
            arrow.classList.add("clicked");
            window.scrollTo(0, 600);
          }}
        >
          <FaArrowDown className="w-12 h-12 mb-2 bounce text-white down-arrow 2xl:w-[4rem] 2xl:h-[4rem]" />
        </button>
      </div>
    </div>
  );
}

export default Landing;
