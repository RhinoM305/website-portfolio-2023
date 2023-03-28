import React from "react";

function Skills() {
  return (
    <>
      <h2 className="text-6xl font-bold font-Helvetica Neue hide">SKILLS</h2>
      <p className="text-5xl mt-48 font-Helvetica Neue font-thin">Frontend</p>
      <div className="flex justify-around w-full mt-8">
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/front-end/html-icon.png")}
            alt="html icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/front-end/css-icon.png")}
            alt="css icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/front-end/javascript-icon.png")}
            alt="javascript icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/front-end/react-icon.png")}
            alt="react icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className="mt-6"
            src={require("./images/front-end/tailwind-icon.png")}
            alt="tailwind icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/front-end/bootstrap-icon.png")}
            alt="bootstrap icon"
          />
        </div>
      </div>
      <h3 className="text-5xl font-Helvetica-Neue font-thin mt-14">Backend</h3>
      <div className="flex justify-center w-full mt-8">
        <div className="h-40 w-40 mr-20">
          <img
            className=""
            src={require("./images/back-end/postgresql-icon.png")}
            alt="postgresql icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/back-end/node-icon.png")}
            alt="node icon"
          />
        </div>
        <div className="h-40 w-40 ml-20">
          <img
            className=""
            src={require("./images/back-end/express-icon.png")}
            alt="express icon"
          />
        </div>
      </div>
      <h3 className="text-5xl font-thin font-helvetica-neue mt-14">Tools</h3>
      <div className="flex justify-around w-full mt-8 mb-8">
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/tools/git-icon.png")}
            alt="git icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/tools/github-icon.png")}
            alt="github icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/tools/jest-icon.png")}
            alt="jest icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/tools/npm-icon.png")}
            alt="npm icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/tools/postman-icon.png")}
            alt="postman icon"
          />
        </div>
      </div>
      <div className="flex justify-around w-full mt-8 mb-8">
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/tools/visual-icon.png")}
            alt="visual icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/tools/DBeaver_logo.png")}
            alt="DBeaver icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/tools/Mocha-icon.png")}
            alt="Mocha icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/tools/puppeteer-icon.png")}
            alt="Puppeteer icon"
          />
        </div>
        <div className="h-40 w-40">
          <img
            className=""
            src={require("./images/tools/knex-icon.png")}
            alt="knex icon"
          />
        </div>
      </div>
    </>
  );
}

export default Skills;
