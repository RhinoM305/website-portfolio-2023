import "./Landing.css";
import Typewriter from "./Typewriter";
import rmLogo from "./images/rmlogo.svg";
import { FaArrowDown } from "react-icons/fa";

function Landing() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen gap-4 py-24 overflow-hidden bg-bg sm:flex-row sm:items-center sm:gap-0 sm:py-0">
      {/* Code "waterfall" — right quarter of the background, slightly blurred */}
      <div className="absolute top-0 right-0 z-0 w-1/3 h-full pointer-events-none sm:w-1/4">
        <span className="absolute top-0 w-full h-[1914px] marquee-item opacity-[0.25] blur-[1px] sm:opacity-[0.45]"></span>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-bg"></div>
      </div>

      {/* Logo — left half */}
      <div className="z-10 flex items-center justify-center w-full px-6 sm:w-1/2">
        <img
          src={rmLogo}
          alt="Ryan Moreno logo"
          className="w-auto h-auto max-w-[11rem] xr:max-w-[14rem] sm:max-w-[18rem] xxl:max-w-[28rem]"
        />
      </div>

      {/* Intro text */}
      <div className="z-10 flex flex-col items-start flex-1 px-6">
        <p className="mb-4 eyebrow text-eyebrow">Software Engineer — Full Stack</p>
        <Typewriter />
        <p className="mt-6 text-base text-muted max-w-prose sm:text-lead">
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
