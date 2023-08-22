import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import WOW from "wowjs";
import axios from "axios";
import $ from "jquery";
import {ThreeCircles} from 'react-loader-spinner'

const ContactUs = (props) => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [source, setSource] = useState("");
  const [budget, setBudget] = useState("");
  const [interestedIn, setInterestedIn] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [activeItems, setActiveItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const items = [
    "Web Design",
    "Graphic Design",
    "Video Production",
    "UI/UX",
    "Digital Marketing",
    "Digital Activations",
    "App Development",
    "Other",
  ];

  const handleItemClick = (index) => {
    // Get the value (inner text) of the clicked item
    const selectedItem = items[index];

    // Check if the clicked item is already in the activeItems array
    const isItemActive = activeItems.includes(index);

    if (isItemActive) {
      // If the item is active, remove it from the activeItems array
      setActiveItems((prevActiveItems) =>
        prevActiveItems.filter((itemIndex) => itemIndex !== index)
      );

      // Remove the clicked item from the interestedIn array
      setInterestedIn((prevInterestedIn) =>
        prevInterestedIn
          .split(", ")
          .filter((item) => item !== selectedItem)
          .join(", ")
      );
    } else {
      // If the item is not active, add it to the activeItems array
      setActiveItems((prevActiveItems) => [...prevActiveItems, index]);

      // Add the clicked item to the interestedIn array
      setInterestedIn((prevInterestedIn) =>
        prevInterestedIn ? prevInterestedIn + ", " + selectedItem : selectedItem
      );
    }
  };

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Create an object with the form data
    const formData = {
      type: "contact",
      full_name: fullName,
      company_name: companyName,
      interested_in: interestedIn,
      email: email,
      mobile: mobNo,
      hear_from: source,
      budget: budget,
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
        setFullName('');
        setCompanyName('');
        setEmail('');
        setMobNo('');
        setSource('');
        setBudget('');
        setInterestedIn('');
        setActiveItems('')
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

    
  };

  return (
    <>
      <section className="contactUsSection">
        <div className="content_container">
        {
          
        }
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {/* {successfulMsg === true ? (
            <div class="alert alert-success" role="alert">
              A simple success alert—check it out!
            </div>
          ) : (
            ""
          )} */}
          <div className="contactUsForm">
            <h1 className="colorBlack fw-800 text-center wow animate__animated animate__fadeInUp">
              Let’s Build a project together
            </h1>
            <form onSubmit={handleSubmit} method="post">
              <div className="innerForm">
                <input
                  type="text"
                  className="colorBlack fw-500 wow"
                  placeholder="Your Name*"
                  name="Name"
                  required
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="colorBlack fw-500 wow"
                  placeholder="Company Name"
                  name="company name"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
                <input
                  type="email"
                  className="colorBlack fw-500 wow"
                  placeholder="Your E-mail*"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="number"
                  className="colorBlack fw-500 wow"
                  placeholder="Your Mobile*"
                  name="mobile"
                  required
                  value={mobNo}
                  onChange={(e) => {
                    setMobNo(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Where did you hear about Us?"
                  name="where did you hear about Us"
                  className="colorBlack fw-500 wow"
                  value={source}
                  onChange={(e) => {
                    setSource(e.target.value);
                  }}
                />
                <input
                  type="number"
                  className="colorBlack fw-500 wow"
                  placeholder="Your Budget*"
                  name="budget"
                  pattern="^[0-9]*[.,]?[0-9]*$"
                  required
                  value={budget}
                  onChange={(e) => {
                    setBudget(e.target.value);
                  }}
                />
                <div className="interestedIn wow">
                  <p className="colorBlack fw-800">I’m Interested in ......</p>
                  <ul className="p-0 m-0 d-flex align-items-center flex-wrap">
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className={
                          activeItems.includes(index)
                            ? "colorGrey fw-800 active"
                            : "colorGrey fw-800"
                        }
                        onClick={() => handleItemClick(index)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-center wow animate__animated animate__slideInUp">
                <button className="colorWhite fw-800">Send Message</button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="officeLocation"
          onMouseEnter={props.mouseEnterOnBlack}
          onMouseLeave={props.mouseLeaveOnBlack}
        >
          <div className="content_container">
            <div className="row m-0">
              <div className="col-sm-6 p-0 officeLocationL wow animate__animated animate__fadeInUp">
                <div className="location_map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.548195037572!2d72.8438393!3d19.17829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6f0b470e419%3A0xc5ccb10923eb744c!2sReverse%20Thought%20Creative%20Studio%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1687890937795!5m2!1sen!2sin"
                    width="100%"
                    allowFullScreen=""
                    title="Location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="d-flex justify-content-center align-items-center socialDiv">
                  <Link
                    to="https://www.linkedin.com/company/reverse-thought"
                    className="colorWhite fw-800"
                  >
                    Linkedin
                  </Link>
                  <Link
                    to="https://www.instagram.com/reversethought/"
                    className="colorWhite fw-800"
                  >
                    Instagram
                  </Link>
                  <Link
                    to="http://www.facebook.com/pages/REVERSE-THOUGHT-CREATIVES/260606762932"
                    className="colorWhite fw-800"
                  >
                    Facebook
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 pe-0 officeLocationR">
                <div className="officeLocationDetails">
                  <h4 className="colorWhite fw-800 wow animate__animated animate__fadeInUp animation_delay_100ms">Office Address</h4>
                  <p className="colorWhite fw-400 wow animate__animated animate__fadeInUp animation_delay_200ms">
                    C 601, Kingston Heights, Chincholi <br /> Bunder Road, Malad
                    West, <br />
                    Mumbai-400064, India.
                  </p>
                </div>
                <div className="officeLocationDetails">
                  <h4 className="colorWhite fw-800 wow animate__animated animate__fadeInUp animation_delay_300ms">Contact</h4>
                  <a href="tel:+91 9930658107" className="colorWhite fw-400 wow animate__animated animate__fadeInUp animation_delay_400ms">
                    +91 9930658107 (Tushar)
                  </a>
                  <a href="tel:+91 9769733134" className="colorWhite fw-400 wow animate__animated animate__fadeInUp animation_delay_400ms">
                    +91 9769733134 (Sunidhi)
                  </a>
                  <a href="tel:+91 8291862924" className="colorWhite fw-400 wow animate__animated animate__fadeInUp animation_delay_400ms">
                    +91 8291862924 (Office)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactDetails">
          <div className="marqueSlide d-flex">
            <a
              href="mailto:contact@reversethought.com"
              className="colorBlack fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorRed fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorBlack fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorRed fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorBlack fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorRed fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorBlack fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorRed fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorBlack fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorRed fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorBlack fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorRed fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorBlack fw-500"
            >
              contact@reversethought.com
            </a>
            <a
              href="mailto:contact@reversethought.com"
              className="colorRed fw-500"
            >
              contact@reversethought.com
            </a>
          </div>
          <div className="content_container">
            <div className="ourNewsLetter text-center">
              <h4 className="colorBlack fw-800 wow animate__animated animate__fadeInUp">
                Stay updated with Reverse thought <br /> by signing up for our
                newsletter.
              </h4>
              <p className="colorBlack fw-400 wow animate__animated animate__fadeIn animation_delay_200ms">
                We'll keep you in the loop with everything good going on in the
                modern working world.
              </p>
              <form className="newsLetterInput d-flex align-items-center justify-content-center wow animate__animated animate__fadeIn animation_delay_300ms">
                <input
                  type="email"
                  placeholder="example@reversethought.com"
                  required
                />
                <button>
                  <Icon icon="maki:arrow" color="white" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
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

export default ContactUs;
