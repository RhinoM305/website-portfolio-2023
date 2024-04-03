function ProjectView() {
  return (
    <div className="flex mb-8 se:flex-col">
      <div className="md:flex">
      <div
        name="picture-side"
        className="w-full sm:block"
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
        className="flex flex-col items-center justify-center w-full"
        data-aos="fade-left"
        data-aos-anchor-placement="center-center"
        data-aos-offset="300"
      >
        <h4 className="mt-4 text-2xl xxl:text-4xl">periodic tables</h4>
        <p className="w-3/4 mt-2 text-lg font-Helvetica-Neue xxl:w-2/4 xxl:text-xl xxl:text-center">
          This is a website that allows users to manage reservations for
          specific dates. It includes features such as form validation, CORS
          website security, and the ability to create,delete,and update
          reservations. The website also keeps track of who is seated and can
          create new tables. This makes it a useful tool for businesses such as
          restaurants and event venues that need to manage reservations and
          seating arrangements.
        </p>
        <div className="flex flex-col items-center w-full mt-4">
          <div className="flex">
            <a
              href="https://restaurant-res-frontend.onrender.com"
              target="__blank"
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[black] xxl:h-12 xxl:w-28 xxl:py-4"
            >
              <i className="fa fa-desktop xxl:scale-[1.5]"></i>
            </a>
            <a
              href="https://github.com/RhinoM305/restaurant-res"
              target="__blank"
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[black] xxl:h-12 xxl:w-28 xxl:py-4"
            >
              <i className="fa fa-github xxl:scale-[1.5]"></i>
            </a>
          </div>
          <div className="flex">
            <img
              className="w-12 h-12"
              src={require("./images/project-icons/javascript-icon.png")}
            />
            <img
              className="w-12 h-12"
              src={require("./images/project-icons/react-icon.png")}
            />
            <img
              className="w-12 h-12"
              src={require("./images/project-icons/Bootstrap-icon.png")}
            />
          </div>
        </div>
      </div>
      </div>
      <div className="md:flex md:flex-row-reverse">
      <div
        name="picture-side"
        className="w-full sm:block"
        data-aos="fade-left"
        data-aos-anchor-placement="center-center"
        data-aos-offset="300"
      >
        <img
          src={require("./images/Project-Retro-SS.png")}
          className="w-full h-full scale-75"
        />
      </div>
      <div
        name="desc-side"
        className="flex flex-col items-center justify-center w-full"
        data-aos="fade-right"
        data-aos-anchor-placement="center-center"
        data-aos-offset="300"
      >
        <h4 className="mt-4 text-2xl xxl:text-4xl">The Game Island</h4>
        <p className="w-3/4 mt-2 text-lg font-Helvetica-Neue xxl:w-2/4 xxl:text-xl xxl:text-center">
          A Shopify backend based eccommerce website for a local retailer. This was a passion project to
          demonstrate how a local shop could improve it's website for useability and design. Not only was
          this extremely fun to work on, it provided invaluable knowledge about Shopify's backend API and
          services.
        </p>
        <div className="flex flex-col items-center w-full mt-4">
          <div className="flex">
            <a
              href="https://the-game-island-front-proto.onrender.com"
              target="__blank"
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[black] xxl:h-12 xxl:w-28 xxl:py-4"
            >
              <i className="fa fa-desktop xxl:scale-[1.5]"></i>
            </a>
            <a
              href="https://github.com/RhinoM305/the-game-island-front"
              target="__blank"
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[black] xxl:h-12 xxl:w-28 xxl:py-4"
            >
              <i className="fa fa-github xxl:scale-[1.5]"></i>
            </a>
          </div>
          <div className="flex">
            <img
              className="w-12 h-12"
              src={require("./images/project-icons/javascript-icon.png")}
            />
            <img
              className="w-12 h-12"
              src={require("./images/project-icons/react-icon.png")}
            />
            <img
              className="w-16 h-12 scale-[.7] mt-[2px]"
              src={require("./images/project-icons/Tailwind-icon.png")}
            />
            <img
              className="w-11 h-11 mt-[4px] scale-[.8]"
              src={require("./images/project-icons/Redis-icon.jpg")}
            />
            <img
              className="h-12 w-18 scale-[.9]"
              src={require("./images/project-icons/Apollo-icon.png")}
            />
          </div>
        </div>
      </div>
      </div>
      <p className="mx-16 mt-6 text-sm italic text-stone-700 sm:hidden">
        Intrested in any projects? Github/Demo links under description!
      </p>
    </div>
  );
}

export default ProjectView;
