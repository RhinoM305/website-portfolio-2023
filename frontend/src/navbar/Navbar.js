import rmLogo from "../images/rmlogo.svg";

function Navbar() {
  return (
    <div
      className="flex fixed z-30 w-full h-[4rem] bg-bg/80 backdrop-filter backdrop-blur-lg items-center justify-between invisible px-6 border-b border-border xxl:h-[5rem] sm:visible"
      data-aos="fade-down"
      data-aos-offset="1000"
    >
      <img src={rmLogo} alt="RM logo" className="h-10 w-auto xxl:h-14" />
      <div className="flex items-center gap-1 font-mono uppercase tracking-[0.08em] text-eyebrow text-text">
        <button
          className="px-3 py-1 transition-colors hover:text-accent noSelect"
          onClick={() => {
            window.scrollTo(0, 900);
          }}
        >
          Skills
        </button>
        <button
          className="px-3 py-1 transition-colors hover:text-accent noSelect"
          onClick={() => {
            window.scrollTo(0, 1650);
          }}
        >
          Resume
        </button>
        <button
          className="px-3 py-1 transition-colors hover:text-accent noSelect"
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
