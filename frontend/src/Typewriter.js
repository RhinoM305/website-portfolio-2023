import "./Landing.css";

const Typewriter = ({ text }) => {
  return (
    <div className="sm:text-4sxl se:text-2xl">
      <h1 className="overflow-hidden font-mono font-bold text-white border-r-4 opacity-0 whitespace-nowrap border-r-white animate-typing1 xxl:text-7xl">
        Hello, world. I'm Ryan!
      </h1>
      <h1 className="overflow-hidden font-mono font-bold text-white border-r-4 opacity-0 whitespace-nowrap border-r-white animate-typing2 xxl:text-7xl">
        I'm a Full Stack &lt;<span className="text-cyan-300">Dev </span>/&gt;
      </h1>
    </div>
  );
};

export default Typewriter;
