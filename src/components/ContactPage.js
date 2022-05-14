import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { validateEmail } from "../utils/helpers";

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Invalid Credentials!");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleBlank(e) {
    if (e.target.name === "Name" || e.target.name === "Message") {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  }

  return (
    <section id="contact" className="container contact">
      <h1>Contact Me</h1>
      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="name"
            defaultValue={name}
            onBlur={handleBlank}
            name="name"
            placeholder="Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control info"
            type="email"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            name="message"
            defaultValue={message}
            onBlur={handleBlank}
            rows="5"
            placeholder="Message"
          />
        </div>
        {errorMessage && <div>Something Went Wrong!</div>}
        <button className="btn shadow-none" type="submit">
          <FaArrowCircleRight className="icon" />
        </button>
      </form>
    </section>
  );
}

export default ContactPage;
