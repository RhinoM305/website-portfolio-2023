function Navbar() {
  return (
    <div
      className="flex fixed z-10 w-full h-[4rem] bg-[black] backdrop-filter bg-opacity-20 backdrop-blur-lg items-center justify-between invisible p-5 xxl:h-[6rem] sm:visible"
      data-aos="fade-down"
      data-aos-offset="1000"
    >
      <h2 className="text-bold font-Titan-One text-white text-4xl ml-4 xxl:text-6xl">
        Ryan.dev
      </h2>
      <div className="text-white text-xxl xxl:text-4xl">
        <button
          className="ml-4 mr-4 noSelect"
          onClick={() => {
            window.scrollTo(0, 600);
          }}
        >
          About
        </button>
        <button
          className="ml-4 mr-4 noSelect"
          onClick={() => {
            window.scrollTo(0, 1750);
          }}
        >
          Skills
        </button>
        <button
          className="ml-4 mr-4 noSelect"
          onClick={() => {
            window.scrollTo(0, 2450);
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
