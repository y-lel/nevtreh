import React, {useRef }  from 'react'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_cvtn22k",
          "template_7pozjok",
          form.current,
          "hJltE6qDCvkkG5Jk_"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Pisda: ", randomNum)
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    const randomNum = Math.floor(Math.random() * 1000000); // Generate random number
    
    return (
      <form ref={form} onSubmit={sendEmail}>
        <h3>Нэвтрэх</h3>
        <div className="mb-3">
          <label>Нэр</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <input type="hidden" name="message" value={randomNum} />
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>

    );
  };

export default Contact;

