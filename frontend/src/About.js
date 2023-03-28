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
    <div className="flex flex-col items-center bg-[black]">
      <h2 className="mt-14 text-5xl font-bold font-sans font-helvetica-neue text-white">
        About Me
      </h2>
      <div className="flex mt-8 mb-8">
        <div className="w-full flex justify-center">
          <img
            src={require("./images/Hackers-Movie-Poster.png")}
            className="h-96 transition-transform duration-250 ease-in-out transform scale-90 hover:scale-110 active:top-2 active:shadow-none active:outline-none active:relative"
            onClick={handleClick}
          />
        </div>
        <div className="w-full flex content-center font-sans font-helvetica-neue">
          <p className="self-center text-2xl text-white m-6">
            My passion for coding was ignited after I was captivated by a
            thrilling crime film called Hackers, released in 1995. It was a
            cinematic masterpiece that not only entertained me but also sparked
            a fire in me to explore the exciting world of coding. Just like in
            the movie I want to positively impact the world using computers!
            Except the crime part of course!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
