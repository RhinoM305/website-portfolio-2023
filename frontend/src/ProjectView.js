function ProjectView() {
  return (
    <div className="flex mb-8 se:flex-col sm:flex-row">
      <div
        name="picture-side"
        className="w-full hidden sm:block"
        data-aos="fade-right"
        data-aos-anchor-placement="center-center"
        data-aos-offset="300"
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
        <h4 className="text-2xl mt-4 xxl:text-4xl">periodic tables</h4>
        <p className="w-3/4 font-Helvetica-Neue text-lg mt-2 xxl:w-2/4 xxl:text-xl xxl:text-center">
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
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[black] xxl:h-12 xxl:w-28 xxl:py-4"
            >
              <i className="fa fa-desktop xxl:scale-[1.5]"></i>
            </a>
            <a
              href="#"
              target="__blank"
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[black] xxl:h-12 xxl:w-28 xxl:py-4"
            >
              <i className="fa fa-github xxl:scale-[1.5]"></i>
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
      <p className="text-sm italic text-stone-700 mx-16 mt-6 sm:hidden">
        Intrested in any projects? Github/Demo links under description!
      </p>
    </div>
  );
}

export default ProjectView;
