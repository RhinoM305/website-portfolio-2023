import $ from "jquery";
import "../index.css";

// bg-opacity-20 backdrop-blur-lg

function MobileNav() {
  return (
    <>
      <div
        name="container-for-hamburger"
        className="flex fixed justify-start items-center mix-blend-difference z-40 w-full h-[4rem] visible sm:invisible"
      >
        <div className="z-50" id="fixed-menu">
          <svg
            className="ham ham6"
            viewBox="0 0 100 100"
            width="80"
            id="hamburger"
            onClick={() => {
              $(this).toggleClass("open");
              $("#hamburger").toggleClass("active");
              $(".mobilenav--wrap").toggleClass("show--mobilenav");
            }}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            />
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center items-center fixed z-10 w-full h-[4rem] backdrop-filter backdrop-blur-sm visible sm:invisible ">
        <h3 className="pl-3 pr-3 text-3xl text-white bg-black rounded-lg bg-opacity-60 font-helvetica-neue">
          Ryan.dev
        </h3>
      </div>
      <div className="mobilenav--wrap">
        <div className="mobilenav backdrop-filter backdrop-blur-sm bg-black bg-opacity-[.97]">
          <ul>
            {/* <li className="ml-6">
              <button
                className="text-white font-helvetica-neue noSelect"
                onClick={() => {
                  $("#hamburger").toggleClass("active");
                  $(".mobilenav--wrap").toggleClass("show--mobilenav");

                  if (
                    window.innerWidth > 768 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, 600);
                  } else if (
                    window.innerWidth > 380 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, 850);
                  } else if (
                    window.innerWidth > 300 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, 660);
                  }
                }}
              >
                About
              </button>
            </li> */}
            <li className="ml-6">
              <button
                className="text-white font-helvetica-neue noSelect"
                onClick={() => {
                  $("#hamburger").toggleClass("active");
                  $(".mobilenav--wrap").toggleClass("show--mobilenav");
                  if (
                    window.innerWidth > 768 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, 1600);
                  } else if (
                    window.innerWidth > 380 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, 900);
                  } else if (
                    window.innerWidth > 300 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, 1620);
                  }
                }}
              >
                Skills
              </button>
            </li>
            <li className="ml-6">
              <button
                className="text-white font-helvetica-neue noSelect"
                onClick={() => {
                  $("#hamburger").toggleClass("active");
                  $(".mobilenav--wrap").toggleClass("show--mobilenav");
                  if (
                    window.innerWidth > 768 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, 2450);
                  } else if (
                    window.innerWidth > 380 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, 1850);
                  } else if (
                    window.innerWidth > 300 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, 2830);
                  }
                }}
              >
                Portfolio
              </button>
            </li>
            <li className="ml-6">
              <button
                className="text-white font-helvtica-neue noSelect"
                onClick={() => {
                  $("#hamburger").toggleClass("active");
                  $(".mobilenav--wrap").toggleClass("show--mobilenav");

                  if (
                    window.innerWidth > 768 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, document.body.scrollHeight);
                  } else if (
                    window.innerWidth > 380 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, 3450);
                  } else if (
                    window.innerWidth > 300 &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )
                  ) {
                    window.scrollTo(0, 3650);
                  }
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default MobileNav;
