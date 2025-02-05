import React, { useState } from "react";
import Classes from "./Contact.module.css";
import axios from "axios";
import swAlert from "sweetalert";

const validateForm = (data) => {
  const errors = {};
  const mailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!mailRegex.test(data.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!data.subject.trim()) {
    errors.subject = "Subject is required.";
  }
  if (!data.message.trim()) {
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

  // Nuevo: estados para manejo de “tocado” y “submit”
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true); // Marcamos que se presionó "submit"

    const currentErrors = validateForm(formState);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      // Todo OK
      swAlert({
        title: "Congratulations!",
        text: "Message sent successfully.",
        icon: "success",
        button: "Got it",
        timer: "5000",
      });
      axios.post("/send", formState);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTouched({});
      setSubmitted(false);
    } else {
      // Mostramos mensaje de error
      swAlert({
        title: "Oops!",
        text: "You must fill in all the blanks",
        icon: "error",
      });
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    // En cuanto el usuario tipea algo, marcamos el campo como “tocado”
    if (!touched[name]) {
      setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    }

    // Actualizamos formState y volvemos a validar
    const newFormState = { ...formState, [name]: value };
    setFormState(newFormState);
    setErrors(validateForm(newFormState));
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
            target="_blank"
            rel="noreferrer"
          >
            <div className={Classes.individualIcon}>
              <i className="nes-icon linkedin is-large"></i>
              Linkedin
            </div>
          </a>
          <a
            href="https://github.com/axel-lois"
            target="_blank"
            rel="noreferrer"
          >
            <div className={Classes.individualIcon}>
              <i className="nes-icon github is-large"></i>
              Github
            </div>
          </a>
        </div>
        <h3 className={Classes.bottomh3}>Or send me an email</h3>
      </div>

      <form className={Classes.form} onSubmit={submitHandler}>
        {/* NAME */}
        <div className={Classes.flexRow}>
          <div className={`nes-field ${Classes.inputElement}`}>
            <label htmlFor="name_field">Name</label>
            <input
              value={formState.name}
              name="name"
              onChange={changeHandler}
              type="text"
              id="name_field"
              className={`nes-input ${
                (touched.name || submitted) && errors.name ? "is-error" : ""
              }`}
            />
            {(touched.name || submitted) && errors.name && (
              <p className={`nes-text is-error ${Classes.errorText}`}>
                {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className={`nes-field ${Classes.inputElement}`}>
            <label htmlFor="email_field">Email</label>
            <input
              value={formState.email}
              name="email"
              onChange={changeHandler}
              type="email"
              id="email_field"
              className={`nes-input ${
                (touched.email || submitted) && errors.email ? "is-error" : ""
              }`}
            />
            {(touched.email || submitted) && errors.email && (
              <p className={`nes-text is-error ${Classes.errorText}`}>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* SUBJECT */}
        <div className={`nes-field ${Classes.inputElement}`}>
          <label htmlFor="subject_field">Subject</label>
          <input
            value={formState.subject}
            name="subject"
            onChange={changeHandler}
            type="text"
            id="subject_field"
            className={`nes-input ${
              (touched.subject || submitted) && errors.subject ? "is-error" : ""
            }`}
          />
          {(touched.subject || submitted) && errors.subject && (
            <p className={`nes-text is-error ${Classes.errorText}`}>
              {errors.subject}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div className={Classes.inputElement}>
          <label htmlFor="message_field">Message</label>
          <textarea
            value={formState.message}
            name="message"
            onChange={changeHandler}
            id="message_field"
            className={`nes-textarea ${
              (touched.message || submitted) && errors.message ? "is-error" : ""
            } ${Classes.textarea}`}
          />
          {(touched.message || submitted) && errors.message && (
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
