import React from "react";

function About() {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(
      "https://www.imdb.com/title/tt0113243/?ref_=fn_al_tt_1",
      "_blank"
    );
  };
  return (
    <div id="about" className="">
      <div className="flex flex-col items-center bg-[white]">
        <h2
          data-aos="fade-down"
          data-aos-anchor-placement="center-center"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-offset="450"
          className="mt-2 text-5xl font-bold font-sans font-helvetica-neue 2xl:text-7xl"
        >
          About Me
        </h2>
        <div className="flex mt-8 mb-8">
          <div
            className="w-full flex justify-center"
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-offset="300"
          >
            <img
              src={require("./images/Hackers-Movie-Poster.png")}
              className="h-96 transition-transform duration-250 ease-in-out transform scale-90 hover:scale-110 active:top-2 active:shadow-none active:outline-none active:relative 2xl:h-[40rem] 2xl:mb-4"
              onClick={handleClick}
            />
          </div>
          <div className="w-full flex content-center font-sans font-helvetica-neue">
            <p
              className="self-center text-2xl m-6 2xl:text-4xl"
              data-aos="fade-left"
              data-aos-anchor-placement="center-center"
              data-aos-offset="300"
            >
              My passion for coding was ignited after I was captivated by a
              thrilling crime film called Hackers, released in 1995. It was a
              cinematic masterpiece that not only entertained me but also
              sparked a fire in me to explore the exciting world of coding. Just
              like in the movie I want to positively impact the world using
              computers! Except the crime part of course!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
