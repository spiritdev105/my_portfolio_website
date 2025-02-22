import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// icons
import { BsArrowRight } from "react-icons/bs";

export const ContactUs = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState({
    title: "",
    paragraph: "",
  });
  const sendEmail = (e) => {
    e.preventDefault();
    setFormSubmitted({ title: "Sending message...", paragraph: "" });
    emailjs
      .sendForm("service_2ral", "template_su4fjal", form.current, {
        publicKey: "CxYSqcAM_IC_MBcgr",
      })
      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: "Message sent!",
              paragraph: "David will contact you soon.",
            });
          } else {
            setFormSubmitted({
              title:
                "Unexpected status code received from EmailJS, please try again later",
              paragraph: "Please contact David by phone or email.",
            });
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          setFormSubmitted({
            title: "Error sending message, please try again later",
            paragraph: "Please contact David by phone or email.",
          });
        }
      );
  };

  return formSubmitted.title === "" ? (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex-1 flex flex-col gap-6 w-full mx-auto"
    >
      <div className="flex gap-x-6 w-full">
        <input
          type="text"
          name="user_name"
          placeholder="name"
          className="input"
        />

        <input
          type="email"
          name="user_email"
          placeholder="email"
          className="input"
        />
      </div>
      <textarea
        name="message"
        placeholder="message"
        className="textarea"
      ></textarea>
      <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent dark:hover:border-accentDark group">
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
          Send
        </span>
        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </button>
    </form>
  ) : (
    <div className="flex flex-col items-center">
      <h3 className="text-lato text-2xl font-light text-white">
        {formSubmitted.title}
      </h3>
      <p>{formSubmitted.paragraph}</p>
    </div>
  );
};

export default ContactUs;
