import ResumeViewer from "./ResumeViewer";

function Portfolio() {
  return (
    <div className="flex flex-col w-full mb-10 bg-[white]" id="resume">
      <h2 className="self-center text-5xl font-bold mt-14 font-Oswald xxl:text-7xl">
        Resume
      </h2>
      <ResumeViewer />
    </div>
  );
}

export default Portfolio;
