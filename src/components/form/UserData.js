import "./UserData.css";
import React, { useState } from "react";

export default function UserData() {
  const [userName, setUserName] = React.useState("");
  const [formSubmission, setFormSubmission] = React.useState(false);
  const UsernameHandler = (event) => {
    setUserName(event.target.value);
  };
  console.log(userName);
  function formHandler(e){
    e.preventDefault();
    setFormSubmission(true);
  }
  return (
    <div className="form-section">
      <div className="form-heading">
        <div className="form-heading-box">
          <h1>GET IN TOUCH</h1>
          <h4>
            Please complete the form and we will
            <br />
            get back to you
          </h4>
        </div>
      </div>
      {formSubmission ? (
        <h1 className="form-submitted-text">
          Registered successfully
          <br /> We get back to you soon!
        </h1>
      ) : (
        <form onSubmit={formHandler} className="form-userdetails">
          <label>
            Name*
            <input
              type="text"
              name="fullname"
              placeholder="Enter Your Name"
              onChange={UsernameHandler}
              // pattern="[A-Za-z]{4}"
              title="Must be atleast 4 characters and no symbols or spaces"
              minlength="4"
              maxlength="32"
              required
            ></input>
          </label>

          <label>
            Email*
            <input
              type="email"
              name="fullname"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Enter valid email : example@example.com"
              placeholder="Enter Your Email"
              required
            ></input>
          </label>

          <label>
            Mobile Number*
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Your Mobile Number"
              pattern="[0-9]{10}"
              title="Enter valid 10 digit mobile number"
              required
            ></input>
          </label>

          <button type="submit" className="form-submitbutton">
            Register Now
          </button>
        </form>
      )}
    </div>
  );
}
