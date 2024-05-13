// Importing React and useState from the React library
import React, { useState } from "react";
// Importing a helper function that will check if the email is valid
import validateEmail from "../../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState(""); // State variable for email
  const [userName, setUserName] = useState(""); // State variable for username
  const [message, setMessage] = useState(""); // State variable for message
  const [errorMessage, setErrorMessage] = useState(""); // State variable for error message

  // Function to handle input change in the form fields
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // Then we check if the message is empty
    if (!message) {
      setErrorMessage(`Message is required.`);
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful submission.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      {/* contact form section  */}
      <div className="contact-form">
        <h3>Contact Me</h3>
        <form className="form">
          {/* Name */}
          <label htmlFor="contact-name">Your Name</label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            id="contact-name"
          />

          {/* Email */}
          <label htmlFor="contact-email">Your Email</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            id="contact-email"
          />

          {/* Message */}
          <label htmlFor="contact-message">Message</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            id="contact-message"
            style={{ height: "200px" }}
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
      {/* Display error message if there is any */}
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
