import React, { useRef } from "react";
import "./Contact.css";
import LinkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sw4ewyg",
        "template_jzxt0m5",
        form.current,
        "nn4jP4LvsTIBBRnpD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDescription">
        You can get in touch using the form below
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" className="submitBtn" value="Send">
          Submit
        </button>
        <div className="links">
          <img src={LinkedIn} alt="LinkedIn" className="link" />
          <img src={GitHub} alt="GitHub" className="link" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
