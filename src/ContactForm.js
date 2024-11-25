import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xzhph9c",
        "template_vzxcixr",
        form.current,
        "Zm13UCE4aDAHEwSnR"
      )
      .then(
        (result) => {
          setStatusMessage("Your message has been sent!");
        },
        (error) => {
          setStatusMessage("Failed to send the message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Contact</h2>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit" className="send-button">Send</button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default ContactForm;
