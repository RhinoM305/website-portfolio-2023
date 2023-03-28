import "./Landing.css";

const Typewriter = ({ text }) => {
  return (
    <div>
      <h1 className="overflow-hidden whitespace-nowrap text-white font-mono text-5xl font-bold border-r-4 border-r-white opacity-0 animate-typing1 2xl:text-7xl">
        Hello, world. I'm Ryan!
      </h1>
      <h1 className="overflow-hidden whitespace-nowrap text-white font-mono text-5xl font-bold border-r-4 border-r-white opacity-0 animate-typing2 2xl:text-7xl">
        I'm a software engineer!
      </h1>
    </div>
  );
};

export default Typewriter;
