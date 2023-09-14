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
      <section className="servicePageSection webServicePageSection filmsService position-relative">
        <div className="content_container position-relative">
          <img
            src="/images/films-service.png"
            alt="films-service"
            className="filmsServiceVector"
          />
          <div className="servicePageBanner">
            <h1 className="colorBlack fw-800 projectHeading wow animate__animated animate__fadeInUp">
              Transform Your Vision <br />
              into Stunning Films
            </h1>

            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_100ms">
              Frame.
            </h4>
            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_200ms">
              Story.
            </h4>
            <h4 className="serviceKeyPoints colorRed fw-800 wow animate__animated animate__fadeInUp animation_delay_300ms">
              Magic.
            </h4>
          </div>
        </div>
      </section>

      <section className="webServiceWhatWeDo whatWeDo">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Video production Services
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
                  {/* <span className="fw-800">01</span> */}
                  Explainer Videos
                </li>
                <li
                  onClick={() => handleTabClick(1)}
                  className={
                    activeTab === 1
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  {/* <span className="fw-800">02</span> */}
                  Process Videos
                </li>
                <li
                  onClick={() => handleTabClick(2)}
                  className={
                    activeTab === 2
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  {/* <span className="fw-800">03</span> */}
                  Social Media Stories
                </li>
                <li
                  onClick={() => handleTabClick(3)}
                  className={
                    activeTab === 3
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  {/* <span className="fw-800">04</span> */}
                  Social Media Films
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
                    Demonstrate the convenience that your product or service
                    provides, easily impart user instructions, training and many
                    more things with intelligently scripted and executed 2D & 3D
                    explainer videos. We have the capability to execute films in
                    20 international languages and all major Indian languages.
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
                    Document the progress of your projects and create an impact
                    with our time lapse videos. Help customers understand your
                    manufacturing and service delivery process with process
                    videos.
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
                    If you are trying to establish an emotional connection with
                    your audience on social media, it doesn’t get more effective
                    than a beautiful story tied into your product. Leave the
                    story, concept and execution to us and just get ready for
                    the accolades.
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
              {activeTab === 3 && (
                <div
                  className={
                    activeTab === 3
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <p className="colorBlack fw-400">
                    Unlock the power of storytelling with our service, turning
                    your moments into captivating cinematic experiences that
                    leave a lasting impression on your audience.
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
      <section className="ourWorkSlider wow animate__animated animate__slideInLeft">
        <div className="content_container">
          <h2 className="sectionHead colorBlack wow fw-800">
            <img src="/images/icons/line.svg" alt="line" />
            More Works
          </h2>
          <Slider {...settings}>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/icici-prudential"
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
                  <img src="/images/cards/video/icicipru.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Icici Prudential</h2>
                <span className="colorGrey fw-400">Video Production</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/recipe"
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
                  <img src="/images/cards/video/recipe.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Recipe</h2>
                <span className="colorGrey fw-400">Video Production</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/speak-event"
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
                  <img src="/images/cards/video/speakevent.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Speak Event</h2>
                <span className="colorGrey fw-400">Video Production</span>
              </div>
            </div>

            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/qr678"
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
                  <img src="/images/cards/video/car.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">QR678</h2>
                <span className="colorGrey fw-400">Video Production</span>
              </div>
            </div>
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
          <h2 className="sectionHead text-white colorWhite fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Our Expertise
          </h2>
          <div className="accordianParent wow animate__animated animate__fadeIn animation_delay_300ms">
            <Accordion title="Project & Process Mapping Videos">
              <p>
                Elevate your project documentation with our time-lapse videos,
                enabling you to showcase the journey of your projects and
                enhance customer comprehension of your manufacturing and service
                delivery processes through informative process videos.
              </p>
            </Accordion>
            <Accordion title="Annual Report Videos">
              <p>
                We specialise in crafting engaging Annual Report Videos that
                effectively convey your company's achievements, milestones, and
                vision, providing stakeholders with a comprehensive overview of
                your organisation's annual performance.
              </p>
            </Accordion>
            <Accordion title="Video Ads">
              <p>
                Most social platforms are now allowing for a variety of ad
                formats with unique advantages. We help you create quick,
                interesting, attention-grabbing video ads that will supercharge
                your advertising efforts.
              </p>
            </Accordion>
            <Accordion title="Corporate Videos & Documentaries">
              <p>
                We have helped several companies showcase their manufacturing,
                technical and people strengths in an immersive, story-based
                narrative. An entire team of highly creative and technical
                people come together to script, shoot, edit and package your
                video. Beautiful drone assisted and ground level photography,
                slick animation and sharp editing create an outstanding product.
                We have proven expertise in conducting shoots at international
                locations within affordable budgets.
              </p>
            </Accordion>
            <Accordion title="Social Project Documentaries / CSR Videos">
              <p>
                Translate and communicate the impact you’ve made on-ground and
                spread the word with a social initiative documentary. Whether as
                an NGO or an organisation dedicated to Corporate Social
                Responsibility (CSR) initiatives, just reach out to us and we
                will deliver.
              </p>
            </Accordion>
            <Accordion title="Sales / Training Videos">
              <p>
                When managing a large sales team, how do you ensure that
                everyone is on the same page? Supporting your training modules
                with an intelligently crafted, shareable video can drastically
                improve the performance of your team.
              </p>
            </Accordion>
            <Accordion title="Case Study Videos">
              <p>
                Showcase your successes on a broader canvas with case study
                videos created with passion and creativity. Companies have
                observed that compelling case studies boost customer confidence
                manifold and provide a tangible edge over competition.
              </p>
            </Accordion>
            <Accordion title="Storyboarding">
              <p>
                Storyboarding is a creative and time-consuming process which we
                plan and execute meticulously. We specialise in both Photoshop
                based storyboards and hand-sketched illustrations based on
                individual project requirements.
              </p>
            </Accordion>
            <Accordion title="2D/3D Animation">
              <p>
                Challenging concepts become simple and engaging when visualised.
                From engineering to medical, our 3d animated videos have helped
                companies explain complex topics in a simple and visually
                engaging manner. 2d animation can turn any AV into an enjoyable
                experience – be it explainer videos, testimonial videos or
                finance videos for investors.
              </p>
            </Accordion>
          </div>
          <h2 className="sectionHead colorWhite text-white fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Why Choose Us
          </h2>
          <div className="whyChooseUsDetails">
            <p className="colorWhite fw-400 wow animate__animated animate__fadeInUp">
              In the realm of video production, we've consistently shattered
              conventions and stretched the boundaries of creativity to bridge
              the gap between your objectives and the audience's desires. Our
              video production expertise incorporates interactive tools,
              compelling content, captivating visuals, and user-friendly
              interfaces, seamlessly fused with cutting-edge technologies such
              as High tech cameras, Graphics and Animation Software, Virtual
              Reality (VR) and Augmented Reality (AR) Tools, Streaming and
              Delivery Platforms, and more, to craft immersive cinematic
              experiences.
            </p>
            {/* <div className="d-flex align-items-center"> */}
            <ul className="d-flex align-items-center wow animate__animated animate__fadeInUp animation_delay_300ms">
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Motion Capture
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Drone Technology
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Live Streaming Tools
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                360-Degree Video Cameras
              </li>
              {/* <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                
              </li> */}
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Audio and Video Codecs
              </li>
              {/* <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                
              </li> */}
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Cloud-Based Collaboration Tools
              </li>
              {/* <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Collaboration Tools
              </li> */}
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                3D Modeling and Rendering
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Audio Editing Software
              </li>
              {/* <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                WordPress
              </li> */}
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
    </>
  );
};

export default FilmsService;
