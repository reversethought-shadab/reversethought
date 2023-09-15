import React, { useState } from "react";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap-accordion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import WOW from "wowjs";
import { Icon } from "@iconify/react";
import ClientLogo from "../../Shared/ClientLogo";

const WebService = (props) => {
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
      <section className="servicePageSection webServicePageSection">
        <div className="content_container position-relative">
          <img
            src="/images/web-service.png"
            alt="web-service"
            className="webServiceBannerVector"
          />
          <div className="servicePageBanner">
            <h1 className="colorBlack fw-800 projectHeading wow animate__animated animate__fadeInUp">
              Result-Driven Custom <br />
              Website Design
            </h1>

            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_100ms">
              Design.
            </h4>
            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_200ms">
              Development.
            </h4>
            <h4 className="serviceKeyPoints colorRed fw-800 wow animate__animated animate__fadeInUp animation_delay_300ms">
              Launch.
            </h4>
          </div>
        </div>
      </section>

      <section className="webServiceWhatWeDo whatWeDo">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Web Services
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
                  Interactive Websites
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
                  Ecommerce Websites
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
                  UI/ UX Design
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
                  CMS Development
                </li>
              </ul>
            </div>
            <div className="col-sm-6 p-0 whatwedoTabsR">
              {activeTab === 0 && (
                <div
                  className={
                    activeTab === 0
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <p className="colorBlack fw-400">
                    Thoughtfully designed and developed brand and corporate
                    websites that are a confluence of strategy, content, design
                    and cutting edge web technologies. Building interactivity
                    that enhances the user experience and creates higher
                    engagement is our key strength. Our work has been
                    consistently awarded and showcased by various online web
                    galleries.
                  </p>
                  <a
                    href="/our-work"
                    className="unsetAll"
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
                    Lead the market with ecommerce sites that are user-tested
                    for a great experience. All our sites are responsive. Let
                    your catalogues do the talking and pull out a wide range of
                    reports that will help you identify your best customers,
                    traffic sources and many more business building insights.
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
                    Designing the UI and UX of a site is a combination of user
                    behaviour insights, technology, design and lots of user
                    feedback. Through years of experience, we have mastered this
                    process which is reflected in the success of our projects.
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
                    Update your website at your convenience with a Content
                    Management System (CMS) that helps you manage the text and
                    image content on your website. Having a CMS also enables the
                    search feature for users.
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
          <h2 className="sectionHead colorBlack wow fw-800">
            <img src="/images/icons/line.svg" alt="line" />
            More Works
          </h2>
          <Slider {...settings}>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/i2m"
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
                  <img src="/images/cards/web/i2m.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">I2M</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/malik-architecture"
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
                  <img src="/images/cards/web/malik.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Malik Architecture</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/notandas"
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
                  <img src="/images/cards/web/notandas.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Notandas</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/texprocile"
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
                  <img src="/images/cards/web/texprocile.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Texprocile</h2>
                <span className="colorGrey fw-400">Website Design</span>
              </div>
            </div>
          </Slider>

          <Link
            to="/our-work/website-app"
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
        className="ourExpertiseSection wow"
        onMouseEnter={props.mouseEnterOnBlack}
        onMouseLeave={props.mouseLeaveOnBlack}
      >
        <div className="content_container">
          <h2 className="sectionHead text-dark colorWhite text-white fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Our Expertise
          </h2>
          <div className="accordianParent wow animate__animated animate__fadeIn animation_delay_300ms">
            <Accordion title="Web Applications and Portals">
              <p>
                No two apps or portals are the same. We custom design and code
                websites that can perform the functions that you envision and
                create a winning product of global standards.
              </p>
            </Accordion>
            <Accordion title="Campaign Landing Pages">
              <p>
                Connect with the users who click on your ads with a compelling
                landing page that converts interest into action. A landing page
                can give the user an expanded sales pitch and hook them with
                exciting offers and other reasons to act now.
              </p>
            </Accordion>
            <Accordion title="Microsites">
              <p>
                Walk down the unusual path with a microsite that can have the
                personality you want. Whether it is engaging deeper with your
                users, or telling an interesting new story, a good microsite
                enables all that and more.
              </p>
            </Accordion>
            <Accordion title="Blogs">
              <p>
                One of the most effective ways to turn your expertise into
                leads, blogs help you connect with your users beyond the limits
                of a website. They also drive traffic to your site. We help you
                create blogs that look great and can be tagged and formatted to
                derive maximum advantage.
              </p>
            </Accordion>
            <Accordion
              title="Marketplace Product Pages (Amazon, Flipkart, Nykaa + Everything else)
"
            >
              <p>
                Stand out on top marketplaces with custom designed pages for
                your products. We help you develop the content and also design
                the pages that stand true to the marketplace guidelines.
              </p>
            </Accordion>
            <Accordion title="Drive Traffic">
              <p>
                Through campaigns, advanced SEO, SEM we help you generate
                traffic for your website, which is the first step to business
                development.
              </p>
            </Accordion>
            <Accordion title="Lead Generation">
              <p>
                Through inbound marketing strategies and activities, we generate
                and provide qualified leads for your business.
              </p>
            </Accordion>
            <Accordion title="Website Maintenance">
              <p>
                Allow us to take regular backups of your website, troubleshoot
                bugs and errors and maintain the speed of your website at a
                nominal fee.
              </p>
            </Accordion>
            <Accordion title="Analytics">
              <p>
                How many visitors are coming to you every month? Who are they?
                Where do they discover you? What keywords are bringing them to
                you? We will answer all this for you and offer inputs for
                improvement.
              </p>
            </Accordion>
          </div>
          <h2 className="sectionHead colorWhite text-white fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Why Choose Us
          </h2>
          <div className="whyChooseUsDetails">
            <p className="colorWhite fw-400 wow animate__animated animate__fadeInUp">
              We have always broken moulds and pushed the limits of possibility
              to bring higher cohesion between your goals and the users’
              aspirations. Interactive tools, rich content, stunning visuals and
              intuitive UI combined with latest technologies like HTML5, CSS3,
              Bootstrap, PHP Laravel & more make for an immersive experience.
            </p>
            {/* <div className="d-flex align-items-center"> */}
            <ul className="d-flex align-items-center wow animate__animated animate__fadeInUp animation_delay_300ms">
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                CSS
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                HTML 5
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                JavaScript
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                PHP
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Microsoft.net
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                AngularJS
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                MySQL.
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                IOS
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Android
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Prestashop
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Magento
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                WordPress
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
          <ClientLogo client="webClient" />
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
            <p className="mb-0 wow">We pride ourselves on top-</p>
            <p className="mb-0 wow">tier design practices, where</p>
            <p className="mb-0 wow">aesthetic and usability both</p>
            <p className="mb-0 wow">play a key role.</p>
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

export default WebService;
