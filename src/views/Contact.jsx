import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lfekk5s",
        "template_f4p2i9j",
        form.current,
        "q92oNrqt1FnJasT1M"
      )

      .then(
        (result) => {
          alert("Message successfully sent!");
          window.location.reload(false);
          setDone(true);
          form.reset(true);
        },
        (error) => {
          alert("Failed to send the message, please try again!");
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Contact me</h1>
      </div>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="user_name"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="user_email"
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="message"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="button">
            <button type="submit" className="btn btn-primary mb-2">
              Contact me
            </button>
            <span>{done && "Thank you for contacting me"}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
