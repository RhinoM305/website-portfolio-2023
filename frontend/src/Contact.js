import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_fuzv03p', 'template_3zy1oqo', form.current, {
      publicKey: '7UhxgVidbk-cqcFbS',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }
  return (
    <>
      <div
        className="flex w-full justify-center items-center bg-[black] se:flex-col sm:flex-row"
        id="contact"
      >
        <div
          className="flex se:flex-col se:w-full se:ml-8 sm:items-center xxl:items-end xxl:pr-4"
          name="form side"
          // data-aos="fade-up"
          // data-aos-placement="center-bottom"
          // data-aos-offset="150"
        >
          <div>
            <h2 className="text-white text-5xl mt-14 font-Helvetica-Neue font-bold ml-4 sm:mr-[12rem] xxl:text-7xl xxl:mr-[6rem] font-Oswald">
              Contact
            </h2>
            <h3 className="mt-2 ml-6 text-white xxl:text-xl font-Roboto">Let's Talk</h3>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col ml-6 mt-4 mb-8 w-[35rem] se:w-[22rem]">
            <label
              htmlFor="contactFullName"
              className="mt-2 mb-2 text-xl text-white xxl:text-2xl font-Roboto"
            >
              FULL NAME
            </label>
            <input
              className="text-[white] w-72 border border-white bg-black p-2"
              name="user_name"
              id="contactFullName"
              placeholder="Beetle Juice"
              required
            />
            <label className="mt-2 mb-2 text-xl text-white xxl:text-2xl font-Roboto">
              EMAIL ADRESS
            </label>
            <input
              className="w-72 border border-white bg-black text-[white] p-2"
              name="user_email"
              id="emailAdress"
              placeholder="example@domain.com"
              required
            />
            <label className="mt-2 mb-2 text-xl text-white xxl:text-2xl font-Roboto">
              MESSAGE
            </label>
            <textarea
              className="text-[white] border border-white bg-black rounded-md se:w-[20rem] se:h-[8rem] xr:w-[22rem] p-2"
              name="message"
              id="message"
              placeholder="To Write"
              required
            ></textarea>
            <button
              className="rounded-lg w-full h-8 bg-white mt-4 send-button se:w-[20rem] xr:w-[22rem]"
              id="submit"
              type="submit"
              value="Send"
            >
              <div className="alt-send-button">
                <i className="mt-2 text-black bg-white fa fa-paper-plane-o"></i>
                <span className="mt-2 send-text">SEND</span>
              </div>
            </button>
          </form>
        </div>
        <div
          className="flex flex-col items-center w-full sm:mt-[6rem] xxl:items-start xxl:ml-[14rem]"
          name="info side"
          // data-aos="fade-up"
          // data-aos-placement="center-bottom"
          // data-aos-offset="150"
        >
          <hr className="border border-slate-50 w-[20rem] se:ml-5 se:mr-2 se:mb-6 se:mt-2 xr:w-[22rem]" />
          <div name="contact-details">
            <div
              className="flex flex-col text-[white] w-[20rem]"
              name="contact-icon-side"
            >
              <div className="flex items-center my-8">
                <div className="flex items-center justify-center w-3/4">
                  <i className="fa fa-map-marker scale-[2.5]"></i>
                </div>
                <p className="w-full">Miami, FL</p>
              </div>
              <div className="flex items-center my-8">
                <div className="flex justify-center w-3/4">
                  <i className="fa fa-phone scale-[2.5]"></i>
                </div>

                <p className="w-full ">(210) 428-8320</p>
              </div>
              <div className="flex items-center my-8">
                <div className="flex justify-center w-3/4">
                  <i className="fa fa-envelope scale-[2.5]"></i>
                </div>
                <a
                  className="w-full transition duration-200 hover:text-stone-400"
                  href="#"
                >
                  morenoryan33@gmail.com
                </a>
              </div>
            </div>
          </div>
          <hr className="border border-slate-50 w-[20rem] se:ml-5 se:mr-2 se:my-6 xr:w-[22rem]" />
          <div name="contact buttons" className="mb-4">
            <a
              href="https://github.com/RhinoM305"
              target="_blank"
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[#323131] xxl:h-12 xxl:w-28 xxl:py-4"
            >
              <i className="fa fa-github xxl:scale-[1.5]"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-moreno01/"
              target="_blank"
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[#4875b4] xxl:h-12 xxl:w-28 xxl:py-4"
            >
              <i className="fa fa-linkedin xxl:scale-[1.5]"></i>
            </a>
            <a
              href="mailto:morenoryan33@gmail.com"
              target="_blank"
              className="inline-block text-white border-0 py-2 px-2 w-20 opacity-90 shadow-md focus:outline-none text-center transition-transform duration-250 ease-in-out transform scale-90 text-base hover:text-gray-200 hover:scale-110 active:relative active:top-2 active:shadow-none active:text-gray-300 active: outline-none bg-[#444444] xxl:h-12 xxl:w-28 xxl:py-4"
            >
              <i className="fa fa-envelope xxl:scale-[1.5]"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
