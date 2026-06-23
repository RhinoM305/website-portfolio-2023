import { ReactComponent as RmLogo } from "../images/rmlogo.svg";

function Navbar() {
  return (
    <div
      className="flex fixed z-30 w-full h-[4.5rem] bg-bg/90 backdrop-filter backdrop-blur-lg items-center justify-between invisible px-6 sm:px-10 border-b border-border shadow-nav xxl:h-[5rem] sm:visible"
    >
      <RmLogo role="img" aria-label="RM logo" className="h-8 w-8 xxl:h-10 xxl:w-12" />
      <div className="flex items-center gap-1 text-eyebrow font-semibold text-text">
        <button
          className="px-4 py-2 rounded-full transition-colors hover:bg-surface hover:text-accent noSelect"
          onClick={() => {
            window.scrollTo(0, 900);
          }}
        >
          Skills
        </button>
        <button
          className="px-4 py-2 rounded-full transition-colors hover:bg-surface hover:text-accent noSelect"
          onClick={() => {
            window.scrollTo(0, 1650);
          }}
        >
          Resume
        </button>
        <button
          className="ml-2 px-5 py-2 rounded-full bg-accent text-white font-semibold shadow-card transition-all hover:bg-accent-hover hover:shadow-card-hover active:translate-y-px noSelect"
          onClick={() => {
            window.scrollTo(0, document.body.scrollHeight);
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
}
export default Navbar;
