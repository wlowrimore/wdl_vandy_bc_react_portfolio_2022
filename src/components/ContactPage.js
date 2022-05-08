import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const handleFormSubmit = (e) => {
  e.preventDefault();

  // check if email is the proper format
  if (!validateEmail(email)) {
    setErrorMessage("Invalid email type!");
    return;
  }

  console.log({ name, email, message });
  alert(`Thank you for your input, ${name}`);

  // clear values in input fields
  setName("");
  setEmail("");
  setMessage("");
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const [errorMessage, setErrorMessage] = useState("");

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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            name="message"
            defaultValue={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            placeholder="Message"
          />
        </div>
        <button
          className="btn shadow-none"
          type="submit"
          onClick={handleFormSubmit}
        >
          <FaArrowCircleRight className="icon" />
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
  );
}
