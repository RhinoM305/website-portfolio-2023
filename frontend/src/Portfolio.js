import ResumeViewer from "./ResumeViewer";

function Portfolio() {
  return (
    <div className="flex flex-col w-full pt-20 pb-10 bg-bg" id="resume">
      <div className="px-4 md:px-8 lg:px-16">
        <p className="eyebrow text-eyebrow">02 — Experience</p>
        <h2 className="mt-3 text-h2 text-heading">Resume</h2>
      </div>
      <ResumeViewer />
    </div>
  );
}

export default Portfolio;
