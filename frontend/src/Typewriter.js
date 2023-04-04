import "./Landing.css";

const Typewriter = ({ text }) => {
  return (
    <div className="sm:text-5xl se:text-2xl">
      <h1 className="overflow-hidden whitespace-nowrap text-white font-mono font-bold border-r-4 border-r-white opacity-0 animate-typing1 xxl:text-7xl">
        Hello, world. I'm Ryan!
      </h1>
      <h1 className="overflow-hidden whitespace-nowrap text-white font-mono font-bold border-r-4 border-r-white opacity-0 animate-typing2 xxl:text-7xl">
        I'm a software engineer!
      </h1>
    </div>
  );
};

export default Typewriter;
