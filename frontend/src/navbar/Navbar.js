function Navbar() {
  return (
    <div
      className="flex fixed z-10 w-full h-[4rem] bg-[black] backdrop-filter bg-opacity-20 backdrop-blur-lg items-center justify-between invisible p-5 xxl:h-[6rem] sm:visible"
      data-aos="fade-down"
      data-aos-offset="1000"
    >
      <h2 className="ml-4 font-mono text-4xl text-white xxl:text-6xl">
      Ryan.dev
      </h2>
      <div className="text-white text-xxl xxl:text-4xl">
        {/* <button
          className="ml-4 mr-4 noSelect"
          onClick={() => {
            window.scrollTo(0, 1000);
          }}
        >
          About
        </button> */}
        <button
          className="ml-4 mr-4 noSelect"
          onClick={() => {
            window.scrollTo(0, 900);
          }}
        >
          Skills
        </button>
        <button
          className="ml-4 mr-4 noSelect"
          onClick={() => {
            window.scrollTo(0, 1650);
          }}
        >
          Portfolio
        </button>
        <button
          className="ml-4 mr-4 noSelect"
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
