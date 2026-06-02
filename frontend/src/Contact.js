import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm('service_fuzv03p', 'template_3zy1oqo', form.current, {
        publicKey: '7UhxgVidbk-cqcFbS',
      })
      .then(
        () => {
          console.log('EmailJS: SUCCESS');
          form.current?.reset();
          setStatus('success');
        },
        (error) => {
          console.error('EmailJS: FAILED', error);
          setStatus('error');
        }
      );
  };

  const inputClass =
    'w-72 p-2 rounded-md bg-surface border border-border text-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors';
  const labelClass =
    'mt-3 mb-1 font-mono uppercase tracking-[0.08em] text-tag text-muted';

  return (
    <>
      <div
        className="flex w-full justify-center items-center bg-bg pt-20 pb-24 se:flex-col sm:flex-row"
        id="contact"
      >
        <div
          className="flex se:flex-col se:w-full se:ml-8 sm:items-center xxl:items-end xxl:pr-4"
          name="form side"
        >
          <div>
            <p className="ml-4 eyebrow text-eyebrow">03 — Contact</p>
            <h2 className="mt-2 ml-4 text-h2 text-heading">Contact</h2>
            <p className="mt-2 ml-4 text-lead text-muted">Let's talk.</p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col ml-6 mt-4 mb-8 w-[35rem] se:w-[22rem]">
            <label htmlFor="contactFullName" className={labelClass}>
              Full Name
            </label>
            <input
              className={inputClass}
              name="user_name"
              id="contactFullName"
              placeholder="Beetle Juice"
              required
            />
            <label htmlFor="emailAdress" className={labelClass}>
              Email Address
            </label>
            <input
              className={inputClass}
              name="user_email"
              id="emailAdress"
              placeholder="example@domain.com"
              required
            />
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              className="p-2 rounded-md bg-surface border border-border text-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors se:w-[20rem] se:h-[8rem] xr:w-[22rem]"
              name="message"
              id="message"
              placeholder="To Write"
              required
            ></textarea>
            <button
              className="rounded-lg w-full h-8 bg-accent text-bg mt-4 send-button se:w-[20rem] xr:w-[22rem] hover:bg-accent-hover transition-colors disabled:opacity-60"
              id="submit"
              type="submit"
              value="Send"
              disabled={status === 'sending'}
            >
              <div className="alt-send-button">
                <i className="mt-2 fa fa-paper-plane-o"></i>
                <span className="mt-2 send-text">
                  {status === 'sending' ? 'SENDING...' : 'SEND'}
                </span>
              </div>
            </button>
            {status === 'success' && (
              <p className="mt-3 text-body-sm text-accent" role="status">
                Message sent. Thanks for reaching out!
              </p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-body-sm text-red-600" role="alert">
                Could not send. Check the console, or try again with ad blockers
                disabled for this site.
              </p>
            )}
          </form>
        </div>
        <div
          className="flex flex-col items-center w-full sm:mt-[6rem] xxl:items-start xxl:ml-[14rem]"
          name="info side"
        >
          <hr className="border-border w-[20rem] se:ml-5 se:mr-2 se:mb-6 se:mt-2 xr:w-[22rem]" />
          <div name="contact-details">
            <div
              className="flex flex-col text-text w-[20rem]"
              name="contact-icon-side"
            >
              <div className="flex items-center my-8">
                <div className="flex items-center justify-center w-3/4">
                  <i className="fa fa-map-marker scale-[2.5] text-accent"></i>
                </div>
                <p className="w-full">Miami, FL</p>
              </div>
              <div className="flex items-center my-8">
                <div className="flex justify-center w-3/4">
                  <i className="fa fa-phone scale-[2.5] text-accent"></i>
                </div>

                <p className="w-full ">(210) 428-8320</p>
              </div>
              <div className="flex items-center my-8">
                <div className="flex justify-center w-3/4">
                  <i className="fa fa-envelope scale-[2.5] text-accent"></i>
                </div>
                <a
                  className="w-full transition-colors duration-200 hover:text-accent"
                  href="mailto:morenoryan33@gmail.com"
                >
                  morenoryan33@gmail.com
                </a>
              </div>
            </div>
          </div>
          <hr className="border-border w-[20rem] se:ml-5 se:mr-2 se:my-6 xr:w-[22rem]" />
          <div name="contact buttons" className="mb-4 flex gap-3">
            <a
              href="https://github.com/RhinoM305"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-20 py-2 rounded-md bg-surface border border-border text-text transition-all duration-200 hover:text-accent hover:border-accent active:translate-y-0.5 xxl:h-12 xxl:w-28"
            >
              <i className="fa fa-github xxl:scale-[1.5]"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-moreno01/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-20 py-2 rounded-md bg-surface border border-border text-text transition-all duration-200 hover:text-accent hover:border-accent active:translate-y-0.5 xxl:h-12 xxl:w-28"
            >
              <i className="fa fa-linkedin xxl:scale-[1.5]"></i>
            </a>
            <a
              href="mailto:morenoryan33@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="inline-flex items-center justify-center w-20 py-2 rounded-md bg-surface border border-border text-text transition-all duration-200 hover:text-accent hover:border-accent active:translate-y-0.5 xxl:h-12 xxl:w-28"
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
