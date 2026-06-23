import "./Landing.css";
import Typewriter from "./Typewriter";
import { ReactComponent as RmLogo } from "./images/rmlogo.svg";
import { FaArrowDown } from "react-icons/fa";

function Landing() {
  return (
    <div className="relative flex items-center min-h-screen px-6 py-24 overflow-hidden bg-bg sm:px-10 sm:py-0">
      {/* Soft, warm gradient wash — Airbnb-style airy background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -right-24 w-[34rem] h-[34rem] rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-24 w-[30rem] h-[30rem] rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      {/* Oversized logo watermark, sitting behind the content */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <RmLogo
          role="img"
          aria-label="Ryan Moreno logo"
          className="w-[150%] max-w-[80rem] h-auto opacity-[0.07] sm:w-[110%]"
        />
      </div>

      {/* Intro text */}
      <div className="relative z-10 flex flex-col items-start w-full max-w-3xl mx-auto">
        <span className="inline-flex items-center px-3 py-1 mb-5 text-eyebrow font-semibold text-accent bg-accent/10 rounded-full">
          Software Engineer · Full Stack
        </span>
        <Typewriter />
        <p className="mt-6 text-base text-muted max-w-prose sm:text-lead">
          I build fast, accessible web applications end to end — from polished
          React interfaces to the APIs and infrastructure behind them.
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-8">
          <button
            className="px-6 py-3 rounded-full bg-accent text-white font-semibold shadow-card transition-all hover:bg-accent-hover hover:shadow-card-hover active:translate-y-px"
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          >
            Get in touch
          </button>
          <button
            className="px-6 py-3 rounded-full bg-bg text-text font-semibold border border-border transition-all hover:border-text hover:shadow-card active:translate-y-px"
            onClick={() => window.scrollTo(0, 1650)}
          >
            View resume
          </button>
        </div>
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
