import "./Landing.css";

const Typewriter = ({ text }) => {
  return (
    <div className="text-3xl se:text-2xl sm:text-5xl xxl:text-7xl">
      <h1 className="overflow-hidden font-mono font-bold text-heading border-r-4 opacity-0 whitespace-nowrap border-r-accent animate-typing1">
        Hello, world. I'm Ryan!
      </h1>
      <h1 className="overflow-hidden font-mono font-bold text-heading border-r-4 opacity-0 whitespace-nowrap border-r-accent animate-typing2">
        I'm a Full Stack &lt;<span className="text-accent">Dev </span>/&gt;
      </h1>
    </div>
  );
};

export default Typewriter;
