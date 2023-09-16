import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import WOW from "wowjs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Popup from "../Shared/Popup";
import ClientLogo from "../Shared/ClientLogo";
import News from "../Shared/News";

const Clients = (props) => {
  const [watchReel, setWatchReel] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  const watch_reel = () => {
    setWatchReel(true);
  };

  const close_reel = () => {
    setWatchReel(false);
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
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
          initialSlide: 1,
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
      {watchReel === true ? <Popup close_reel={close_reel} /> : ""}
      <section className="aboitUsSection clientsMainSection position-relative">
        <div className="content_container">
          <div className="servicePageBanner">
            <h1 className="colorBlack fw-800 projectHeading wow animate__animated animate__fadeInUp">
              We’re fortunate to work with Fantastic clients
            </h1>
            <p className="colorBlack fw-400 projectDesc wow animate__animated animate__fadeInUp animation_delay_300ms">
              <span className="colorRed fw-400 projectDesc">
                Since Fifteen years we following our passion for design and
                technology,
              </span>
              we have been extremely lucky to have worked with diverse clients.
            </p>
            <p
              className="colorBlack watch_reel_txt mb-0 mt-0 wow animate__animated animate__fadeInUp animation_delay_500ms"
              onMouseEnter={props.onMouseEnterSmall}
              onMouseLeave={props.onMouseLeaveSmall}
            >
              <span
                className="colorBlack fw-500 watch_reel_txt wow text-center d-flex"
                onClick={watch_reel}
                onMouseEnter={props.onMouseEnterSmall}
                onMouseLeave={props.onMouseLeaveSmall}
              >
                <img
                  src="/images/icons/play.svg"
                  alt="play"
                  className="img-fluid hero_reel_play "
                />
                &nbsp; Watch the Agency Reel!
              </span>
            </p>
            {/* <span className="colorBlack fw-500 reelLine">
              <img
                src="/images/icons/play.svg"
                alt="play"
                className="img-fluid"
              />
              &nbsp; Watch the Agency Reel!
            </span> */}
          </div>
        </div>
      </section>

      <section className="ourRecentClients">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Fantastic Clients
          </h2>
          <ClientLogo client="mainClient" />
        </div>
      </section>

      <section
        className="whatPeopleSaySection"
        onMouseEnter={props.mouseEnterOnBlack}
        onMouseLeave={props.mouseLeaveOnBlack}
      >
        <div className="content_container">
          <h2 className="sectionHead colorWhite text-white fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            What people say
          </h2>
          <Slider
            {...settings}
            className="wow animate__animated animate__zoomIn animation_delay_300ms"
          >
            <div className="whatPeopleSaysInnerSlider position-relative">
              <p className="colorBlack fw-800 text-center position-relative">
                <img
                  src="/images/quote.png"
                  alt="quote"
                  className="openQuote"
                  style={{ transform: "rotate(180deg)" }}
                />
                Having lived in India for over 10 years as MD of foreign
                companies. Part of my work is our global marketing and branding
                initiatives to benefit from the Indian talents vs cost
                advantages. Although the Indian web and graphics design is
                increasingly getting more organized. I’ve always found it
                difficult to find local partners that understand our vision,
                aesthetics, and respect Timelines. While servicing us
                efficiently and at a reasonable cost. I was lucky to top find
                all of these qualities in reverse thought through Tushar Garg
                and his team. We have now been collaborating from Over 5 years
                and never looked back.
                <img
                  src="/images/quote.png"
                  alt="quote"
                  className="closeQuote"
                />
              </p>
              <div className="peopleProfiles">
                <p className="colorRed fw-800">Youri D. Hermans</p>
                <span className="colorRed fw-400">
                  Co-founder, EMW & ex MD of SDG India
                </span>
              </div>
            </div>
            <div className="whatPeopleSaysInnerSlider position-relative">
              <p className="colorBlack fw-800 text-center position-relative">
                <img
                  src="/images/quote.png"
                  alt="quote"
                  className="openQuote"
                  style={{ transform: "rotate(180deg)" }}
                />
                Working with Reverse Thought was such a great experience! I
                received a referral from a friend that used their services a few
                years ago and she had nothing but great things to say and
                recommended that I use them to create my website. Now I can say
                the same! With the time difference as an obstacle they were very
                patient with me and my ideas easy to communicate with and gave
                great creative opinions where they saw fit. Thank you so very
                much!!!
                <img
                  src="/images/quote.png"
                  alt="quote"
                  className="closeQuote"
                />
              </p>
              <div className="peopleProfiles">
                <p className="colorRed fw-800">NIA LAUDERDALE</p>
                <span className="colorRed fw-400">
                  CHICAGO, IL USA - WWW.SOLEYSTUDIOS.COM
                </span>
              </div>
            </div>
            <div className="whatPeopleSaysInnerSlider position-relative">
              <p className="colorBlack fw-800 text-center position-relative">
                <img
                  src="/images/quote.png"
                  alt="quote"
                  className="openQuote"
                  style={{ transform: "rotate(180deg)" }}
                />
                We needed a quality website developed in a very rapid manner.
                Tushar's company was extremely helpful to accomplish this goal.
                We gave him very little time to put it together.
                <img
                  src="/images/quote.png"
                  alt="quote"
                  className="closeQuote"
                />
              </p>
              <div className="peopleProfiles">
                <p className="colorRed fw-800">RAJ SONI</p>
                <span className="colorRed fw-400">
                  PRESIDENT, KAARAN JEWELERS, HOUSE OF RAAJ
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="ourAchievements">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Achievements
          </h2>
          <div className="gridSystem">
            <div className="gridSystemInner text-center wow">
              <img
                src="/images/achievements/achievement-3.svg"
                alt="achievements"
                className="img-fluid"
              />
              <p className="colorBlack fw-800">Most promising Agency</p>
            </div>
            <div className="gridSystemInner text-center wow">
              <img
                src="/images/achievements/achievement-4.svg"
                alt="achievements"
                className="img-fluid"
              />
              <p className="colorBlack fw-800">Companies in Focus</p>
            </div>
            <div className="gridSystemInner text-center wow">
              <img
                src="/images/achievements/achievement-5.svg"
                alt="achievements"
                className="img-fluid"
              />
              <p className="colorBlack fw-800">Awwwards Nominee</p>
            </div>
            <div className="gridSystemInner text-center wow">
              <img
                src="/images/achievements/achievement-6.svg"
                alt="achievements"
                className="img-fluid"
              />
              <p className="colorBlack fw-800">Css Design Winner</p>
            </div>

            <div className="gridSystemInner text-center wow">
              <img
                src="/images/achievements/achievement-2.svg"
                alt="achievements"
                className="img-fluid"
                style={{ height: "25px" }}
              />
              <p className="colorBlack fw-800">Oscars of Indian Ad Awards</p>
            </div>
          </div>
          <div className="creativeThoughts position-relative">
            <div className="colorBlack fw-800 company">
              <p className="mb-0 wow">
                <span>Reverse Thought</span> creates
              </p>
              <p className="mb-0 wow">innovative design solutions</p>
              <p className="mb-0 wow">that inspire. Collaborate</p>
              <p className="mb-0 wow">with a digital design agency</p>
              <p className="mb-0 wow">that will make you proud.</p>
            </div>
            <div className="text-end">
              <img
                src="/images/icons/circle-r.svg"
                alt="circle-r"
                className="wow"
              />
            </div>
          </div>
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

export default Clients;
