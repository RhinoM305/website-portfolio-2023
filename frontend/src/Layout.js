import Landing from "./Landing";
import Skills from "./Skills";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Navbar from "./navbar/Navbar";
import MobileNav from "./navbar/MobileNav";
import React from "react";

function Layout() {
  return (
    <div className="overflow-hidden overflow-x: hidden;" id="mainDom">
      <MobileNav />
      <Navbar />
      <Landing />
      <div className="w-full">
        <main className="flex flex-col items-center w-full" id="skills">
          {/* <About /> */}
          <Skills />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default Layout;
