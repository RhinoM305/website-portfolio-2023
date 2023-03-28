function Navbar() {
  return (
    <div
      className="flex fixed z-10 w-full h-[4rem] bg-[black] backdrop-filter bg-opacity-20 backdrop-blur-lg items-center justify-between p-5 2xl:h-[6rem]"
      data-aos="fade-down"
      data-aos-offset="1500"
      data-aos-delay="50"
    >
      <h2 className="text-bold font-mono justify-self-start text-white text-4xl ml-4 2xl:text-6xl">
        ryan.dev
      </h2>
      <div className="text-white text-2xl 2xl:text-4xl">
        <button
          className="ml-4 mr-4"
          onClick={() => {
            window.scrollTo(0, 600);
          }}
        >
          About
        </button>
        <button
          className="ml-4 mr-4"
          onClick={() => {
            window.scrollTo(0, 1600);
          }}
        >
          Skills
        </button>
        <button
          className="ml-4 mr-4"
          onClick={() => {
            window.scrollTo(0, 2450);
          }}
        >
          Portfolio
        </button>
        <button
          className="ml-4 mr-4"
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
