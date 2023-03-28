function ProjectView({ flexDirection }) {
  return (
    <div className={`flex ${flexDirection} mt-14`}>
      <div name="picture-side" className="flex justify-end ">
        <img
          src={require("./images/Reservation-SS-.png")}
          className="w-full h-full pl-56 pt-12 pb-12"
        />
      </div>
      <div
        name="desc-side"
        className="w-full flex justify-start items-center flex-col"
      >
        <h4 className="text-2xl mt-4">periodic tables</h4>
        <p className="w-3/4 font-Helvetica-Neue text-lg mt-2">
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
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[black]"
            >
              <i className="fa fa-desktop"></i>
            </a>
            <a
              href="#"
              target="__blank"
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[black]"
            >
              <i className="fa fa-github"></i>
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
