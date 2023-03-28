import ProjectView from "./ProjectView";

function Portfolio() {
  return (
    <div className="flex flex-col items-center mb-10">
      <h2 className="mt-14 text-5xl font-bold font-sans font-helvetica-neue">
        Portfolio
      </h2>
      <ProjectView />
    </div>
  );
}

export default Portfolio;
