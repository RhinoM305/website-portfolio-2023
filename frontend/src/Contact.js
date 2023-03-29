function Contact() {
  return (
    <div
      className="flex flex-col w-full justify-center items-center bg-[black]"
      id="contact"
    >
      <div
        className="flex"
        data-aos="fade-up"
        data-aos-placement="center-bottom"
        data-aos-offset="150"
      >
        <div>
          <h2 className="text-white text-5xl mt-14 font-Helvetica-Neue font-bold ml-4 2xl:text-7xl">
            Contact
          </h2>
          <h3 className="text-white ml-6 mt-2 2xl:text-xl">Let's Talk</h3>
        </div>
        <form className="flex flex-col ml-6 mt-4 mb-8 w-[35rem]">
          <label
            htmlFor="contactFullName"
            className="text-white text-xl mb-2 mt-2 2xl:text-2xl"
          >
            FULL NAME
          </label>
          <input
            className="w-72"
            name="full name"
            id="contactFullName"
            placeholder="Ryan Moreno"
            required
          />
          <label className="text-white text-xl mb-2 mt-2 2xl:text-2xl">
            EMAIL ADRESS
          </label>
          <input
            className="w-72"
            name="email adress"
            id="emailAdress"
            placeholder="example@domain.com"
            required
          />
          <label className="text-white text-xl mb-2 mt-2 2xl:text-2xl">
            MESSAGE
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="To Write"
            required
          ></textarea>
        </form>
      </div>
      <div name="contact buttons" className="mb-2">
        <a
          href="https://github.com/RhinoM305"
          target="_blank"
          className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[#323131] 2xl:h-12 2xl:w-28 2xl:py-4"
        >
          <i className="fa fa-github 2xl:scale-[1.5]"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-moreno01/"
          target="_blank"
          className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[#4875b4] 2xl:h-12 2xl:w-28 2xl:py-4"
        >
          <i className="fa fa-linkedin 2xl:scale-[1.5]"></i>
        </a>
        <a
          href="mailto:morenoryan33@gmail.com"
          target="_blank"
          className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[#444444] 2xl:h-12 2xl:w-28 2xl:py-4"
        >
          <i className="fa fa-envelope 2xl:scale-[1.5]"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
