import React, { useRef, Fragment } from "react";
import { Button } from "react-bootstrap";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  const enteredName = useRef();
  const enteredEmail = useRef();
  const enteredPhoneNumber = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      name: enteredName.current.value,
      email: enteredEmail.current.value,
      phoneNo: enteredPhoneNumber.current.value,
    };

    const response = await fetch(
      "https://react-fetch-api-project-default-rtdb.firebaseio.com/contactus.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("successfully posted", data);
    alert(`Successfully form has been filled`);

    enteredName.current.value = "";
    enteredEmail.current.value = "";
    enteredPhoneNumber.current.value = "";
  };

  return (
    <Fragment>
      <h3 className={classes.title}>Contact Us</h3>
      <div className={classes.container}>
        <form className={classes.form}>
          <div className={classes.formbox}>
            <label>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              ref={enteredName}
              className={classes["form-input"]}
            />
          </div>
          <div className={classes.formbox}>
            <label>Email Id</label>
            <input
              type="text"
              id="emailid"
              placeholder="Enter Email-Id"
              ref={enteredEmail}
              className={classes["form-input"]}
            />
          </div>
          <div className={classes.formbox}>
            <label>Phone number</label>
            <input
              type="number"
              id="phonenumber"
              placeholder="Enter Phone Number"
              ref={enteredPhoneNumber}
              className={classes["form-input"]}
            />
          </div>
          <div className={classes.formbox}>
            <Button className="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactUs;
