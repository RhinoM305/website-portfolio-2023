import ProjectView from "./ProjectView";

function Portfolio() {
  return (
    <div className="flex flex-col items-center mb-10 bg-[white]">
      <h2
        className="mt-14 text-5xl font-bold font-sans font-helvetica-neue xxl:text-7xl"
        data-aos="fade-down"
        data-aos-delay="1200"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-center"
        data-aos-offset="300"
      >
        Portfolio
      </h2>
      <ProjectView />
    </div>
  );
}

export default Portfolio;
