import "./Landing.css";
import Typewriter from "./Typewriter";
import { FaArrowDown } from "react-icons/fa";

function Landing() {
  return (
    <div className="h-screen bg-[black] flex justify-center items-center flex-col">
      <div className="w-13ch m-6 h-full flex items-end">
        <Typewriter />
      </div>
      <div className="w-full h-full flex items-end justify-center ">
        <a href="#">
          <FaArrowDown className="w-12 h-12 mb-2 bounce text-white" />
        </a>
      </div>
    </div>
  );
}

export default Landing;
