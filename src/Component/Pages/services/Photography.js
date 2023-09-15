import React, { useState } from "react";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap-accordion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import WOW from "wowjs";
import { Icon } from "@iconify/react";
import ClientLogo from "../../Shared/ClientLogo";

const FilmsService = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="servicePageSection webServicePageSection  photography position-relative">
        <div className="content_container position-relative">
          <img
            src="/images/Photography.png"
            alt="Photography"
            className="photographyVector"
          />
          <div className="servicePageBanner">
            <h1 className="colorBlack fw-800 projectHeading wow animate__animated animate__fadeInUp">
              Unleash your creativity <br />
              Frame Your World
            </h1>

            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_100ms">
              Capture.
            </h4>
            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_200ms">
              Frame.
            </h4>
            <h4 className="serviceKeyPoints colorRed fw-800 wow animate__animated animate__fadeInUp animation_delay_300ms">
              Evoke.
            </h4>
          </div>
        </div>
      </section>

      <section className="webServiceWhatWeDo whatWeDo">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Photography Services
          </h2>
          <div className="row m-0 whatwedoTabs">
            <div className="col-sm-6 p-0 whatwedoTabsL">
              <ul>
                <li
                  onClick={() => handleTabClick(0)}
                  className={
                    activeTab === 0
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  {/* <span className="fw-800">02</span> */}
                  Profile Shoot
                </li>
                <li
                  onClick={() => handleTabClick(1)}
                  className={
                    activeTab === 1
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  {/* <span className="fw-800">03</span> */}
                  Corporate Shoot
                </li>
                <li
                  onClick={() => handleTabClick(2)}
                  className={
                    activeTab === 2
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  {/* <span className="fw-800">04</span> */}
                  Drone Assisted Photography
                </li>
              </ul>
            </div>
            <div className="col-sm-6 p-0 whatwedoTabsR wow animate__animated animate__fadeInUp animation_delay_300ms">
              {activeTab === 0 && (
                <div
                  className={
                    activeTab === 0
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <p className="colorBlack fw-400">
                    Get powerful shots of people in your organisation with
                    professional profile shoots. Everything from creating the
                    right compositions to styling and dressing the team, we
                    handle it all.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
                    // onClick={() => window.scrollTo(0, 0)}
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    <span className="commonViewAll">Learn More</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
              {activeTab === 1 && (
                <div
                  className={
                    activeTab === 1
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <p className="colorBlack fw-400">
                    Showcase your corporate, manufacturing, research and
                    distribution facilities with powerful imagery shot and
                    treated by experienced professionals.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
                    // onClick={() => window.scrollTo(0, 0)}
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    <span className="commonViewAll">Learn More</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
              {activeTab === 2 && (
                <div
                  className={
                    activeTab === 2
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <p className="colorBlack fw-400">
                    Scale creates impact and aerial photography opens up a world
                    of creative avenues, offering the opportunity to capture
                    true scale with breathtaking panoramas.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
                    // onClick={() => window.scrollTo(0, 0)}
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    <span className="commonViewAll">Learn More</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="ourWorkSlider ourWorkslider2 wow animate__animated animate__slideInLeft">
        <div className="content_container">
          <h2 className="sectionHead text-dark colorBlack wow fw-800">
            <img src="/images/icons/line.svg" alt="line" />
            More Works
          </h2>
          <Slider {...settings}>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/commercial"
                    className="colorWhite fw-800"
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img src="/images/commercial.png" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Commercial</h2>
                <span className="colorGrey fw-400">Photography</span>
              </div>
            </div>
            {/* <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="#"
                    className="colorWhite fw-800"
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img
                    src="/images/our-work/digital_activation/alkemar/Maskgroup2.svg"
                    alt="work"
                  />
                </div>
                <h2 className="colorBlack fw-800">Ar Filers</h2>
                <span className="colorGrey fw-400">
                  Ar Filter Design & Development
                </span>
              </div>
            </div> */}
            {/* <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="#"
                    className="colorWhite fw-800"
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img
                    src="/images/our-work/digital_activation/alkemar/Maskgroup1.svg"
                    alt="work"
                  />
                </div>
                <h2 className="colorBlack fw-800">Canadian Woods</h2>
                <span className="colorGrey fw-400">
                  Ar Filter Design & Development
                </span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="#"
                    className="colorWhite fw-800"
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    View Projects &nbsp;
                    <img
                      src="/images/icons/toparrowWhite.svg"
                      alt="toparrow"
                      className="img-fluid"
                    />
                  </a>
                  <img src="/images/work.png" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Malikh Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div> */}
          </Slider>
          <Link
            to="/our-work"
            className="unsetAll"
            onClick={() => window.scrollTo(0, 0)}
            onMouseEnter={props.onMouseEnterSmall}
            onMouseLeave={props.onMouseLeaveSmall}
          >
            <span className="commonViewAll">View Our Projects</span>
            <Icon icon="clarity:arrow-line" />
          </Link>
        </div>
      </section>
      <section
        className="ourExpertiseSection wow animate__animated animate__slideInUp"
        onMouseEnter={props.mouseEnterOnBlack}
        onMouseLeave={props.mouseLeaveOnBlack}
      >
        <div className="content_container">
          <h2 className="sectionHead colorWhite text-white fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Our Expertise
          </h2>
          <div className="accordianParent wow animate__animated animate__fadeIn animation_delay_300ms">
            <Accordion title="Portrait Photography">
              <p>
                Get professionally shot impressive headshots of key people
                within your organisation with our portrait photography. We set
                up the studio at your premise and get the output you need
              </p>
            </Accordion>
            <Accordion title="Event Photography">
              <p>
                Get extensive coverage of your event through video or photos or
                both through our professional event photography services.
              </p>
            </Accordion>
            <Accordion
              title="Product Photography
"
            >
              <p>
                Building a catalogue or setting up an online store? Get
                high-quality aesthetically shot pictures for your products
                through our product photography services
              </p>
            </Accordion>
            <Accordion title="Fashion Photography">
              <p>
                If you’re dealing in fashion, creating the right look and feel
                that does justice to your brand is our forte. We work with
                leading fashion photographers and stylists who can give an edge
                to your brand
              </p>
            </Accordion>
            <Accordion title="Architectural Photography">
              <p>
                For new buildings, sample flats or showcases of designed work by
                interior designers- we cover the details of any space in a way
                that sets the right mood and reflects the vision of the
                designer.
              </p>
            </Accordion>
            <Accordion title="Aerial and Drone Photography">
              <p>
                Add a new dimension to your video or brochure, conduct
                land-mapping or even create timelapse videos of your project
                using our drone photography services
              </p>
            </Accordion>
            <Accordion title="360-Degree and Virtual Reality (VR) Photography">
              <p>
                Take viewers on a journey into your premises, home or factory
                with 360 degree photography that can be controlled by the viewer
                as per his choice
              </p>
            </Accordion>
          </div>
          <h2 className="sectionHead colorWhite text-white fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Why Choose Us
          </h2>
          <div className="whyChooseUsDetails">
            <p className="colorWhite fw-400 wow animate__animated animate__fadeInUp">
              In the world of creative photography, we've consistently pushed
              the boundaries of artistic expression to connect your vision with
              your audience's desires. Our photography expertise blends
              compelling compositions, captivating visuals, and user-friendly
              aesthetics, all combined with cutting-edge technology. This fusion
              of artistry and innovation results in stunning visual experiences
              that leave a lasting impression.
            </p>
            {/* <div className="d-flex align-items-center"> */}
            <ul className="d-flex align-items-center wow animate__animated animate__fadeInUp animation_delay_300ms">
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Digital Cameras
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Image Sensors
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Image Processing Software
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Drone Photography
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Facial Recognition
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Printing Technology
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Studio Lighting
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </section>

      <section className="webServicePageClient ourRecentClients">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Recent Clients
          </h2>
          <ClientLogo client="videoClient" />
        </div>
      </section>

      <section className="pt-0 creativeThoughts position-relative">
        <div className="content_container">
          <img
            src="/images/icons/circle-l.svg"
            alt="circle-l"
            className="wow animate__animated animate__rotateIn"
          />

          <div className="colorBlack fw-800 company">
            <p className="mb-0 wow">We combines cinematic</p>
            <p className="mb-0 wow">storytelling with cutting-</p>
            <p className="mb-0 wow">edge technology to create</p>
            <p className="mb-0 wow">unforgettable visual</p>
            <p className="mb-0 wow">experiences</p>
          </div>
          <div className="text-end">
            <img
              src="/images/icons/circle-r.svg"
              alt="circle-r"
              className="wow animate__animated animate__rotateIn"
            />
          </div>
        </div>
      </section>

      {/* <section className="ourWorkSection">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Works
          </h2>
          <Slider
            {...settings}
            className="wow animate__animated animate__slideInUp"
          >
            <div>
              <div className="sliderInner">
                <img src="/images/work.png" alt="work" />
                <h2 className="colorBlack fw-800">Malik Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <img src="/images/work.png" alt="work" />
                <h2 className="colorBlack fw-800">Malik Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <img src="/images/work.png" alt="work" />
                <h2 className="colorBlack fw-800">Malik Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <img src="/images/work.png" alt="work" />
                <h2 className="colorBlack fw-800">Malik Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
          </Slider>
          <a
            href="/our-work"
            className="unsetAll"
            // onClick={() => window.scrollTo(0, 0)}
          >
            <span className="commonViewAll">View Our Projects</span>
            <Icon icon="clarity:arrow-line" />
          </a>
        </div>
      </section> */}
    </>
  );
};

export default FilmsService;
