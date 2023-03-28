import Landing from "./Landing";
import Skills from "./Skills";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Layout() {
  return (
    <div className="overflow-hidden">
      <Landing />
      <main className="w-full">
        <body className="mt-12 w-full flex flex-col items-center" id="skills">
          <Skills />
          <About />
          <Portfolio />
          <Contact />
        </body>
      </main>
    </div>
  );
}

export default Layout;
