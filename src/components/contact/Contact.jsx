/* ============================================================================ */
/*                                    IMPORT                                    */  
/* ============================================================================ */

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaFigma,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Contact = () => {
  const linkedin =
    "https://www.linkedin.com/";
  const github = "https://github.com/";
  const figma = "https://www.figma.com/";
  const instagram = "https://www.instagram.com/";
  const tiktok = "https://www.tiktok.com/";

  /* EMAIL JS */

  const Result = () => {
    return (
      <p>Thank you! I will contact you soon!</p>
    );
  };

  const form = useRef();

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "SERVICE_ID",
        "TEMPLATE_ID",
        form.current,
        "PUBLIC_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      showResult(true)
  };

  /* HIDE RESULT AFTER 5000MS */
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Social Media</h3>
          <div className="contact__socials">
            <a href={linkedin} className="contact__social-icon">
              <FaLinkedinIn />
            </a>
            <a href={github} className="contact__social-icon">
              <FaGithubAlt />
            </a>
            <a href={figma} className="contact__social-icon">
              <FaFigma />
            </a>
            <a href={instagram} className="contact__social-icon">
              <FaInstagram />
            </a>
            <a href={tiktok} className="contact__social-icon">
              <FaTiktok />
            </a>
          </div>

          <h3 className="contact__title">E-mail me:</h3>
          <p className="contact__details">janedoe@mail.com</p>
        </div>

        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="contact__form"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="user_name"
                className="contact__form-input"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                placeholder="Your e-mail"
                required
              />
            </div>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button
            className="contact__btn"
            type="submit"
            value="Send"
          >
            Send
          </button>

          <div className="contact__result">{result ? 
          <Result role="alert" /> : null}</div>

          
        </form>
      </div>
    </section>
  );
};

/* ============================================================================ */
/*                                  EXPORT                                      */
/* ============================================================================ */

export default Contact;
