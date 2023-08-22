import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap-accordion";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import News from "../Shared/News";

const Careers = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <>
      <section className="aboitUsSection clientsMainSection careersPageCustomPaddingBottom position-relative">
        <div className="content_container">
          <div className="servicePageBanner">
            <h1 className="colorBlack fw-800 projectHeading wow animate__animated animate__fadeInUp">
              Hey, want to join our <br /> tribe ?
            </h1>
            <p className="colorBlack fw-400 projectDesc wow animate__animated animate__fadeInUp animation_delay_300ms">
              <span className="colorRed fw-400">
                As a young and imaginative company,
              </span>
              Reverse Thought has been rapidly growing with an unrelenting hunger
              to achieve more, be more, and do more.
            </p>
          </div>
        </div>
      </section>

      <section className="careersAccordian">
        <div className="content_container wow animate__animated animate__slideInUp animation_delay_200ms">
          <Accordion
            title={
              <>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h4 className="accordianTitle colorBlack fw-800">
                    Marketing Executive
                  </h4>
                </div>
                <Link
                  to="/contact-us"
                  className="unsetAll"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <button className="applyToJob colorWhite fw-800">
                    Apply Now
                  </button>
                </Link>
              </>
            }
          >
            <div className="position-relative">
              {/* <button className="applyToJob">Apply Now</button> */}
              <div className="d-flex customGap">
                <div>
                  <span className="colorBlack fw-800">Location</span>
                  <p className="accordianDesc colorBlack fw-400">
                    Mumbai, Remote
                  </p>
                </div>
                <div>
                  <span className="colorBlack fw-800">Job Type</span>
                  <p className="accordianDesc colorBlack fw-400">Permanent</p>
                </div>
              </div>
              <p className="accordianDesc colorBlack fw-400">
                Web development involves development of e-commerce websites,
                content management systems and promotional websites with
                functionality as required. Candidate should be able to map the
                flow and plan the project on hands-on basis.
              </p>
              <div className="sectionHeadandDesc">
                <h4 className="accordianTitle colorBlack fw-800">
                  What you'll do
                </h4>
                <ul className="m-0">
                  <li className="accordianDesc colorBlack fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                  <li className="accordianDesc colorGrey fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                </ul>
              </div>

              <div className="sectionHeadandDesc">
                <h4 className="accordianTitle colorBlack fw-800">What You are</h4>
                <ul className="p-0 m-0">
                  <li className="accordianDesc colorBlack fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                  <li className="accordianDesc colorGrey fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                </ul>
              </div>
            </div>
          </Accordion>
          <Accordion
            title={
              <>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h4 className="accordianTitle colorBlack fw-800">
                    Marketing Executive
                  </h4>
                </div>
                <Link
                  to="/contact-us"
                  className="unsetAll"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <button className="applyToJob colorWhite fw-800">
                    Apply Now
                  </button>
                </Link>
              </>
            }
          >
            <div className="position-relative">
              {/* <button className="applyToJob">Apply Now</button> */}
              <div className="d-flex customGap">
                <div>
                  <span className="colorBlack fw-800">Location</span>
                  <p className="accordianDesc colorBlack fw-400">
                    Mumbai, Remote
                  </p>
                </div>
                <div>
                  <span className="colorBlack fw-800">Job Type</span>
                  <p className="accordianDesc colorBlack fw-400">Permanent</p>
                </div>
              </div>
              <p className="accordianDesc colorBlack fw-400">
                Web development involves development of e-commerce websites,
                content management systems and promotional websites with
                functionality as required. Candidate should be able to map the
                flow and plan the project on hands-on basis.
              </p>
              <div className="sectionHeadandDesc">
                <h4 className="accordianTitle colorBlack fw-800">
                  What you'll do
                </h4>
                <ul className="m-0">
                  <li className="accordianDesc colorBlack fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                  <li className="accordianDesc colorGrey fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                </ul>
              </div>

              <div className="sectionHeadandDesc">
                <h4 className="accordianTitle colorBlack fw-800">What You are</h4>
                <ul className="p-0 m-0">
                  <li className="accordianDesc colorBlack fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                  <li className="accordianDesc colorGrey fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                </ul>
              </div>
            </div>
          </Accordion>
          <Accordion
            title={
              <>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h4 className="accordianTitle colorBlack fw-800">
                    Marketing Executive
                  </h4>
                </div>
                <Link
                  to="/contact-us"
                  className="unsetAll"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <button className="applyToJob colorWhite fw-800">
                    Apply Now
                  </button>
                </Link>
              </>
            }
          >
            <div className="position-relative">
              {/* <button className="applyToJob">Apply Now</button> */}
              <div className="d-flex customGap">
                <div>
                  <span className="colorBlack fw-800">Location</span>
                  <p className="accordianDesc colorBlack fw-400">
                    Mumbai, Remote
                  </p>
                </div>
                <div>
                  <span className="colorBlack fw-800">Job Type</span>
                  <p className="accordianDesc colorBlack fw-400">Permanent</p>
                </div>
              </div>
              <p className="accordianDesc colorBlack fw-400">
                Web development involves development of e-commerce websites,
                content management systems and promotional websites with
                functionality as required. Candidate should be able to map the
                flow and plan the project on hands-on basis.
              </p>
              <div className="sectionHeadandDesc">
                <h4 className="accordianTitle colorBlack fw-800">
                  What you'll do
                </h4>
                <ul className=" m-0">
                  <li className="accordianDesc colorBlack fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                  <li className="accordianDesc colorGrey fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                </ul>
              </div>

              <div className="sectionHeadandDesc">
                <h4 className="accordianTitle colorBlack fw-800">What You are</h4>
                <ul className="p-0 m-0">
                  <li className="accordianDesc colorBlack fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                  <li className="accordianDesc colorGrey fw-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </li>
                </ul>
              </div>
            </div>
          </Accordion>
        </div>
      </section>

      <section className="weareintheNews">
        <div className="content_container">
          <News />
        </div>
      </section>
    </>
  );
};

export default Careers;
