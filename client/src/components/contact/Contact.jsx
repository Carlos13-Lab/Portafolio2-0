import React, { useState } from "react";
import Classes from "./Contact.module.css";
import axios from "axios";
import swAlert from "sweetalert";

const validateForm = (data) => {
  const errors = {};
  const mailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (data.name.trim().length === 0) {
    errors.name = "Name is required.";
  }
  if (data.email.trim().length === 0) {
    errors.email = "Email is required.";
  } else if (!mailRegex.test(data.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (data.subject.trim().length === 0) {
    errors.subject = "Subject is required.";
  }
  if (data.message.trim().length === 0) {
    errors.message = "Message is required.";
  }
  return errors;
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validateForm(formState));
    if (Object.keys(errors).length === 0 && formState.name) {
      swAlert({
        title: "Congratulations!",
        text: "Message sent successfully.",
        icon: "success",
        button: "Got it",
        timer: "5000",
      });
      axios.post("/send", formState);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      swAlert({
        title: "Oops!",
        text: "You must fill in all the blanks",
        icon: "error",
      });
    }
  };

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setErrors(validateForm({ ...formState, [e.target.name]: e.target.value }));
  };

  return (
    <div className={`${Classes.container} nes-container is-rounded is-dark`}>
      <div className={Classes.socialMedia}>
        <h3 className={Classes.toph3}>
          Do you want to get in touch? Here is my social media!
        </h3>
        <div className={Classes.allIcons}>
          <a
            href="https://www.linkedin.com/in/axel-lois-dev/"
            target={"_blank"}
          >
            <div className={Classes.individualIcon}>
              <i className="nes-icon linkedin is-large"></i>
              Linkedin
            </div>
          </a>
          <a href="https://github.com/axel-lois" target={"_blank"}>
            <div className={Classes.individualIcon}>
              <i className="nes-icon github is-large"></i>
              Github
            </div>
          </a>
          <a href="https://www.instagram.com/axel_lois7/" target={"_blank"}>
            <div className={Classes.individualIcon}>
              <i className="nes-icon instagram is-large"></i>
              Instagram
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=59891372662"
            target={"_blank"}
          >
            <div className={Classes.individualIcon}>
              <i className="nes-icon whatsapp is-large"></i>
              WhatsApp
            </div>
          </a>
        </div>
        <h3 className={Classes.bottomh3}>Or send me an email</h3>
      </div>

      <form className={Classes.form} onSubmit={submitHandler}>
        <div className={`nes-field ${Classes.inputElement}`}>
          <label htmlFor="name_field">Name</label>
          <input
            value={formState.name}
            name="name"
            onChange={changeHandler}
            type="text"
            id="name_field"
            className={`nes-input ${errors.name && "is-error"}`}
          />
          {errors.name && (
            <p className={`nes-text is-error ${Classes.errorText}`}>
              {errors.name}
            </p>
          )}
        </div>
        <div className={`nes-field ${Classes.inputElement}`}>
          <label htmlFor="email_field">Email</label>
          <input
            value={formState.email}
            name="email"
            onChange={changeHandler}
            type="email"
            id="email_field"
            className={`nes-input ${errors.email && "is-error"}`}
          />
          {errors.email && (
            <p className={`nes-text is-error ${Classes.errorText}`}>
              {errors.email}
            </p>
          )}
        </div>
        <div className={`nes-field ${Classes.inputElement}`}>
          <label htmlFor="subject_field">Subject</label>
          <input
            value={formState.subject}
            name="subject"
            onChange={changeHandler}
            type="text"
            id="subject_field"
            className={`nes-input ${errors.subject && "is-error"}`}
          />
          {errors.subject && (
            <p className={`nes-text is-error ${Classes.errorText}`}>
              {errors.subject}
            </p>
          )}
        </div>
        <div className={Classes.inputElement}>
          <label htmlFor="message_field">Message</label>
          <textarea
            value={formState.message}
            name="message"
            onChange={changeHandler}
            id="message_field"
            className={`nes-textarea ${errors.message && "is-error"} ${
              Classes.textarea
            }`}
          ></textarea>
          {errors.message && (
            <p className={`nes-text is-error ${Classes.errorText}`}>
              {errors.message}
            </p>
          )}
        </div>
        <button type="submit" className="nes-btn is-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
