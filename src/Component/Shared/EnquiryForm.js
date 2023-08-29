import React, { useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import {ThreeCircles} from 'react-loader-spinner'

const EnquiryForm = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [interestedIn, setInterestedIn] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const showForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      type: "quote",
      full_name: username,
      company_name: companyName,
      interested_in: interestedIn,
      email: email,
      mobile: number,
    };

    let data = new FormData();
      Object.keys(formData).forEach(key => data.append(key,formData[key]));
      const headers = {
        'Content-Type': 'multipart/form-data'
    };

    // const url = "http://111.118.212.37/mail/"
    const url = "https://uat.reversethought.com/mail/"

    axios
    .post(url, data, {
        headers
      })
      .then(response => {
        // Handle successful response
        if(response.status === 200){
          setSuccessMessage('Thanks for contacting us. We will reach you very soon.');
        }
        else{
          setSuccessMessage('')
        }
          

        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
        
        setErrorMessage('');
        //setFullName('');
        setUsername('')
        setCompanyName('');
        setEmail('');
        setNumber('');
        //setMobNo('');
        //setSource('');
        //setBudget('');
        setInterestedIn('');
        //setActiveItems('')
        setIsLoading(false);
        
      })
      .catch(error => {
        if (error.response.status === 400) {
          const errorList = error.response.data.errors;
          const errorMessages = Object.entries(errorList).map((value) => value[1]);
          setErrorMessage(errorMessages.join(", "));
        }
        
        else{
          setErrorMessage('')
        }
        
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
        setSuccessMessage('');
        setIsLoading(false);
    });


    // axios
    // .post("https://uat.reversethought.com/mail/", formData)
    //   .then(response => {
    //     // Handle successful response
    //     console.log(response)
    //     setSuccessMessage('Data fetched successfully!');
    //     setErrorMessage('');
    //   })
    //   .catch(error => {
    //     setErrorMessage('Error fetching data: ' + error.message);
    //     setSuccessMessage('');
    // });
    setIsFormVisible(false);
  };

  return (
    <>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <button className="colorWhite fw-800 enquireNowButton" onClick={showForm}>
        <Icon icon="ph:arrow-right-bold" />
        <span>Enquiry Form</span>
        <Icon icon="ph:arrow-left-bold" />
      </button>
      <div
        className="enquiryForm"
        onMouseEnter={props.mouseEnterOnRed}
        onMouseLeave={props.mouseLeaveOnRed}
      >
        <form
          className={isFormVisible ? "visible" : ""}
          onSubmit={handleSubmit}
        >
          <div className="close_quote_form" onClick={hideForm}>
            <Icon icon="iconamoon:close-thin" />
          </div>
          <button className="colorWhite fw-800 submitButton" type="submit">
            <Icon icon="ph:arrow-right-bold" />
            <span>Submit</span>
            <Icon icon="ph:arrow-left-bold" />
          </button>
          <p className="colorWhite fw-800">Enquiry form</p>
          <span className="colorWhite fw-800">
            Fill in the details below and will get back to you shortly.
          </span>
          <div>
            <input
              type="text"
              className="colorWhite fw-400"
              required
              name="Name"
              placeholder="Your Name*"
              onChange={(e) => setUsername(e.target.value)}
              pattern="[a-zA-Z][a-zA-Z ]{1,}"
            />
            <input
              type="text"
              name="Company name"
              className="colorWhite fw-400"
              placeholder="Company Name"
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <select
              className="colorWhite fw-400"
              required
              onChange={(e) => setInterestedIn(e.target.value)}
            >
              <option value="" selected disabled hidden>I’m Interested in....*</option>
              <option value="Web Design">Web Design</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
            <input
              type="email"
              name="Email"
              className="colorWhite fw-400"
              required
              placeholder="Your E-mail*"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              className="colorWhite fw-400"
              required
              name="Mobile"
              placeholder="Your Mobile*"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </form>
      </div>

      {
      isLoading && 
        <>
          <div className="spinnerCss"></div>
          <ThreeCircles
            height="100"
            width="100"
            color="#fff"
            wrapperStyle={{}}
            wrapperClass="inner_spinner_css"
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </>
      }
    </>
  );
};

export default EnquiryForm;
