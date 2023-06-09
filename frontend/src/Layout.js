import Landing from "./Landing";
import Skills from "./Skills";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Aos from "aos";
import Navbar from "./navbar/Navbar";
import MobileNav from "./navbar/MobileNav";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function Layout() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 1200,
      once: true,
    });
  }, []);
  return (
    <div className="overflow-hidden overflow-x: hidden;" id="mainDom">
      <MobileNav />
      <Navbar />
      <Landing />
      <main className="w-full">
        <body className="mt-12 w-full flex flex-col items-center" id="skills">
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </body>
      </main>
    </div>
  );
}

export default Layout;
