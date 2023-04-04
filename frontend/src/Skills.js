function Skills() {
  return (
    <div className="w-full flex flex-col items-center bg-[black]">
      <h2
        className="text-6xl font-bold font-Helvetica Neue hide text-white mt-10 xxl:text-7xl xxl:mb-2"
        data-aos="fade-down"
        data-aos-anchor-placement="center-center"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-offset="350"
        id="skills"
      >
        SKILLS
      </h2>
      <p
        className="text-5xl mt-6 font-Helvetica Neue font-thin text-white xxl:text-6xl"
        data-aos="fade-right"
        data-aos-anchor-placement="center-center"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-offset="350"
      >
        Frontend
      </p>
      <div className="flex justify-around w-full mt-8 se:flex-wrap sm:flex-nowrap">
        <div className="se:h-20 se:w-20 se:m-4 sm:h-40 sm:w-40">
          <img
            data-aos="fade-down"
            data-aos-anchor-placement="center-center"
            data-aos-offset="250"
            className=""
            src={require("./images/front-end/html-icon.png")}
            alt="html icon"
          />
        </div>
        <div className="se:h-20 se:w-20 se:m-4 sm:h-40 sm:w-40">
          <img
            data-aos="fade-down"
            data-aos-delay="1400"
            data-aos-anchor-placement="center-center"
            data-aos-offset="250"
            className=""
            src={require("./images/front-end/css-icon.png")}
            alt="css icon"
          />
        </div>
        <div className="se:h-20 se:w-20 se:m-4 sm:h-40 sm:w-40">
          <img
            data-aos="fade-down"
            data-aos-delay="1600"
            data-aos-anchor-placement="center-center"
            data-aos-offset="250"
            className=""
            src={require("./images/front-end/javascript-icon.png")}
            alt="javascript icon"
          />
        </div>
        <div className="se:h-20 se:w-20 se:m-4 sm:h-40 sm:w-40">
          <img
            data-aos="fade-down"
            data-aos-delay="1800"
            data-aos-anchor-placement="center-center"
            data-aos-offset="250"
            className=""
            src={require("./images/front-end/react-icon.png")}
            alt="react icon"
          />
        </div>
        <div className="se:h-20 se:w-20 se:m-4 sm:h-40 sm:w-40">
          <img
            data-aos="fade-down"
            data-aos-delay="2000"
            data-aos-anchor-placement="center-center"
            data-aos-offset="250"
            className="mt-6"
            src={require("./images/front-end/tailwind-icon.png")}
            alt="tailwind icon"
          />
        </div>
        <div className="se:h-20 se:w-20 se:m-4 sm:h-40 sm:w-40">
          <img
            data-aos="fade-down"
            data-aos-delay="2200"
            data-aos-anchor-placement="center-center"
            data-aos-offset="250"
            className=""
            src={require("./images/front-end/bootstrap-icon.png")}
            alt="bootstrap icon"
          />
        </div>
      </div>
      <h3
        className="text-5xl font-Helvetica-Neue font-thin mt-14 text-white xxl:text-6xl"
        data-aos="fade-left"
        data-aos-anchor-placement="center-center"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-offset="300"
      >
        Backend
      </h3>
      <div className="flex justify-center w-full">
        <div className="mr-20  se:h-20 se:w-20 se:ml-8 sm:w-40 sm:h-40">
          <img
            data-aos="fade-down"
            data-aos-anchor-placement="center-center"
            data-aos-offset="150"
            className=""
            src={require("./images/back-end/postgresql-icon.png")}
            alt="postgresql icon"
          />
        </div>
        <div className="se:h-20 se:w-20 sm:w-40 sm:h-40">
          <img
            data-aos="fade-down"
            data-aos-anchor-placement="center-center"
            data-aos-offset="150"
            data-aos-delay="1400"
            className=""
            src={require("./images/back-end/node-icon.png")}
            alt="node icon"
          />
        </div>
        <div
          className="ml-20 bg-[white] rounded-full flex justify-center  se:h-16 se:w-20 se:mr-8 sm:w-40 sm:h-40"
          data-aos="fade-down"
          data-aos-anchor-placement="center-center"
          data-aos-offset="150"
          data-aos-delay="1600"
        >
          <img
            className="m-10 se:m-2 se:scale-75 sm:scale-1"
            src={require("./images/back-end/express-icon.png")}
            alt="express icon"
          />
        </div>
      </div>
      <h3
        className="text-5xl font-thin font-helvetica-neue mt-14 text-white xxl:text-6xl"
        data-aos="fade-right"
        data-aos-anchor-placement="center-center"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-offset="300"
      >
        Tools
      </h3>
      <div
        name="tool-icons"
        className="w-full se:flex se:h-[30rem] sm:h-auto sm:inline"
      >
        <div className="flex w-full mt-8 se:flex-col se:m-4 se:items-end sm:flex-row sm:m-0 sm:items-center sm:justify-around">
          <div className=" se:h-20 se:w-20 sm:h-40 sm:w-40 sm:m-4">
            <img
              data-aos="fade-down"
              data-aos-anchor-placement="center-center"
              data-aos-offset="150"
              className=""
              src={require("./images/tools/git-icon.png")}
              alt="git icon"
            />
          </div>
          <div
            className="bg-[white] rounded-full se:h-20 se:w-20 sm:h-40 sm:w-40 sm:m-4"
            data-aos="fade-down"
            data-aos-anchor-placement="center-center"
            data-aos-offset="150"
            data-aos-delay="1400"
          >
            <img
              className=""
              src={require("./images/tools/github-icon.png")}
              alt="github icon"
            />
          </div>
          <div className=" se:h-20 se:w-20 sm:h-40 sm:w-40 sm:m-4">
            <img
              data-aos="fade-down"
              data-aos-anchor-placement="center-center"
              data-aos-offset="150"
              data-aos-delay="1600"
              className=""
              src={require("./images/tools/jest-icon.png")}
              alt="jest icon"
            />
          </div>
          <div className=" se:h-20 se:w-20 sm:h-40 sm:w-40 sm:m-4">
            <img
              data-aos="fade-down"
              data-aos-anchor-placement="center-center"
              data-aos-offset="150"
              data-aos-delay="1800"
              className=""
              src={require("./images/tools/npm-icon.png")}
              alt="npm icon"
            />
          </div>
          <div className=" se:h-20 se:w-20 sm:h-40 sm:w-40 sm:m-4">
            <img
              data-aos="fade-down"
              data-aos-anchor-placement="center-center"
              data-aos-offset="150"
              data-aos-delay="2000"
              className=""
              src={require("./images/tools/postman-icon.png")}
              alt="postman icon"
            />
          </div>
        </div>
        <div className="flex w-full mt-8 se:flex-col se:m-4 sm:flex-row sm:m-0 sm:items-center sm:justify-around">
          <div className=" se:h-20 se:w-20 sm:h-40 sm:w-40 sm:m-4">
            <img
              data-aos="fade-down"
              data-aos-anchor-placement="center-center"
              data-aos-delay="2100"
              data-aos-offset="100"
              className=""
              src={require("./images/tools/visual-icon.png")}
              alt="visual icon"
            />
          </div>
          <div className=" se:h-20 se:w-20 sm:h-40 sm:w-40 sm:m-4">
            <img
              data-aos="fade-down"
              data-aos-anchor-placement="center-center"
              data-aos-delay="2200"
              data-aos-offset="100"
              className=""
              src={require("./images/tools/DBeaver_logo.png")}
              alt="DBeaver icon"
            />
          </div>
          <div className=" se:h-20 se:w-20 sm:h-40 sm:w-40 sm:m-4">
            <img
              data-aos="fade-down"
              data-aos-anchor-placement="center-center"
              data-aos-delay="2300"
              data-aos-offset="100"
              className=""
              src={require("./images/tools/Mocha-icon.png")}
              alt="Mocha icon"
            />
          </div>
          <div
            className="bg-[white] rounded-lg se:h-20 se:w-20 sm:h-40 sm:w-40 sm:m-4"
            data-aos="fade-down"
            data-aos-anchor-placement="center-center"
            data-aos-delay="2400"
            data-aos-offset="100"
          >
            <img
              className="p-2"
              src={require("./images/tools/puppeteer-icon.png")}
              alt="Puppeteer icon"
            />
          </div>
          <div className=" se:h-20 se:w-20 sm:h-40 sm:w-40 sm:m-4">
            <img
              data-aos="fade-down"
              data-aos-anchor-placement="center-center"
              data-aos-delay="2500"
              data-aos-offset="100"
              className=""
              src={require("./images/tools/knex-icon.png")}
              alt="knex icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
