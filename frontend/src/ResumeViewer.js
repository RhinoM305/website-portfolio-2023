import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const RESUME_URL = `${process.env.PUBLIC_URL}/resume.pdf`;

function ResumeViewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="resume-viewer w-full px-2 sm:px-8 lg:px-16 mt-8 mb-4">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div className="w-full h-[80vh] min-h-[420px] border border-border overflow-hidden shadow-lg rounded-lg">
          <Viewer
            fileUrl={RESUME_URL}
            plugins={[defaultLayoutPluginInstance]}
            defaultScale={SpecialZoomLevel.PageWidth}
          />
        </div>
      </Worker>
    </div>
  );
}

export default ResumeViewer;
