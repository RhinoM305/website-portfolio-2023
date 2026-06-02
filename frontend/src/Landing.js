import "./Landing.css";
import Typewriter from "./Typewriter";
import rmLogo from "./images/rmlogo.svg";
import { FaArrowDown } from "react-icons/fa";

function Landing() {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-bg sm:flex-row sm:items-center">
      {/* Code "waterfall" — right quarter of the background, slightly blurred */}
      <div className="absolute top-0 right-0 z-0 w-1/2 h-full pointer-events-none sm:w-1/4">
        <span className="absolute top-0 w-full h-[1914px] marquee-item opacity-[0.45] blur-[1px]"></span>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-bg"></div>
      </div>

      {/* Logo — left half */}
      <div className="z-10 flex items-center justify-center w-full px-6 pt-24 sm:w-1/2 sm:pt-0">
        <img
          src={rmLogo}
          alt="Ryan Moreno logo"
          className="w-full h-auto max-w-[20rem] xxl:max-w-[30rem]"
        />
      </div>

      {/* Intro text */}
      <div className="z-10 flex flex-col items-start flex-1 px-6 pb-24 sm:pb-0">
        <p className="mb-4 eyebrow text-eyebrow">Software Engineer — Full Stack</p>
        <Typewriter />
        <p className="mt-6 text-lead text-muted max-w-prose">
          I build fast, accessible web applications end to end — from polished
          React interfaces to the APIs and infrastructure behind them.
        </p>
      </div>

      <div className="absolute bottom-0 z-10 flex items-end justify-center w-full pb-8">
        <button
          className="z-50"
          aria-label="Scroll to skills"
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
          <FaArrowDown className="w-8 h-8 mb-2 bounce text-accent down-arrow xxl:w-[3rem] xxl:h-[3rem]" />
        </button>
      </div>
    </div>
  );
}

export default Landing;
