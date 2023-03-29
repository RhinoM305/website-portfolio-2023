function ProjectView({ flexDirection }) {
  return (
    <div className={`flex ${flexDirection} mt-14 mb-8`}>
      <div
        name="picture-side"
        className="w-full"
        // data-aos="fade-right"
        // data-aos-anchor-placement="center-center"
        // data-aos-offset="300"
      >
        <img
          src={require("./images/Reservation-SS-.png")}
          className="w-full h-full scale-75"
        />
      </div>
      <div
        name="desc-side"
        className="w-full flex justify-start items-center flex-col"
        data-aos="fade-left"
        data-aos-anchor-placement="center-center"
        data-aos-offset="300"
      >
        <h4 className="text-2xl mt-4 2xl:text-4xl">periodic tables</h4>
        <p className="w-3/4 font-Helvetica-Neue text-lg mt-2 2xl:w-2/4 2xl:text-xl 2xl:text-center">
          This is a website that allows users to manage reservations for
          specific dates. It includes features such as form validation, CORS
          website security, and the ability to create,delete,and update
          reservations. The website also keeps track of who is seated and can
          create new tables. This makes it a useful tool for businesses such as
          restaurants and event venues that need to manage reservations and
          seating arrangements.
        </p>
        <div className="flex flex-col w-full items-center mt-4">
          <div className="flex">
            <a
              href="#"
              target="__blank"
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[black] 2xl:h-12 2xl:w-28 2xl:py-4"
            >
              <i className="fa fa-desktop 2xl:scale-[1.5]"></i>
            </a>
            <a
              href="#"
              target="__blank"
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[black] 2xl:h-12 2xl:w-28 2xl:py-4"
            >
              <i className="fa fa-github 2xl:scale-[1.5]"></i>
            </a>
          </div>
          <div className="flex">
            <img
              className="h-12 w-12"
              src={require("./images/project-icons/javascript-icon.png")}
            />
            <img
              className="h-12 w-12"
              src={require("./images/project-icons/react-icon.png")}
            />
            <img
              className="h-12 w-12"
              src={require("./images/project-icons/Bootstrap-icon.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectView;
