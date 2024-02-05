import React, { useState } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";

function Contact() {
  // initializes state variables 'name', 'phoneNumber', 'message', and 'errorMessage' using the 'useState' hook, with an initial value of an empty string; will be used to store the user's name, phone number, message, and error message inputs
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // defining an event handler that updates the name state variable when the user input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // defining an event handler that updates the phone number state variable when the user input changes
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // defining an event handler that updates the message state variable when the user input changes
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // this function handles the form submission when the user clicks the submit button; it prevents the default form submission behavior, validates the form input, and sends an email using EmailJS if the input is valid
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber) {
      setErrorMessage("Please fill in the required fields.");
      return;
    }

    // send the form data using emailjs.com
    const templateParams = {
      user_name: name,
      phone_number: phoneNumber,
      message,
    };

    emailjs
      .send(
        "service_xdyq0bq",
        "template_pkpot1m",
        templateParams,
        "xsCyHHL5iCeycQkO_"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.text);
          // reset form fields after successful submission
          setName("");
          setPhoneNumber("");
          setMessage("");
          setErrorMessage("")
          window.alert('Form submitted successfully!');
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    // setting up a flexbox container with a vertical layout
    <div className="flex flex-col mb-10 mx-auto">
      {/* centering its children both horizontally and vertically within its parent container */}
      <div className="flex justify-center items-center">
        {/* creating a form element */}
        {errorMessage && <p>{errorMessage}</p>}
        <form
          onSubmit={handleSubmit}
          method="POST" // specified HTTP method to be used when submitting the form
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            id="user_name"
            value={name}
            name="user_name"
            placeholder="Name"
            onChange={handleNameChange}
            required
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            id="phone_number"
            value={phoneNumber}
            name="phone_number"
            placeholder="Email"
            onChange={handlePhoneNumberChange}
            required
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            id="message"
            value={message}
            placeholder="Message"
            onChange={handleMessageChange}
            rows="10" // initial number of rows displayed in the textarea
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-lime-700 to-lime-400 drop-shadow-md hover:stroke-white hover:scale-105 hover:duration-1000"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
