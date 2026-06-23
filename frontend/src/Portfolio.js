import { FaDownload } from "react-icons/fa";
import ResumeViewer from "./ResumeViewer";

function Portfolio() {
  return (
    <div className="flex flex-col w-full pt-20 pb-16 bg-bg" id="resume">
      <div className="px-6 md:px-8 lg:px-16">
        <p className="eyebrow text-eyebrow">02 — Experience</p>
        <div className="flex flex-col gap-5 mt-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-prose">
            <h2 className="text-h2 text-heading">Experience</h2>
            <p className="mt-3 text-base text-muted sm:text-lead">
              Full-stack engineer building web apps, AI-powered automation, and
              data-processing systems end to end — React / Next.js and
              TypeScript on the frontend, Node.js on the backend.
            </p>
          </div>
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold shadow-card transition-all hover:bg-accent-hover hover:shadow-card-hover active:translate-y-px shrink-0"
          >
            <FaDownload className="w-4 h-4" />
            Download résumé (PDF)
          </a>
        </div>
      </div>
      <ResumeViewer />
    </div>
  );
}

export default Portfolio;
