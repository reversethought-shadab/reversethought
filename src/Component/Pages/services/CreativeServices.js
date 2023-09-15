import React, { useState } from "react";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap-accordion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import WOW from "wowjs";
import { Icon } from "@iconify/react";
import ClientLogo from "../../Shared/ClientLogo";

const CreativeServices = (props) => {
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
      <section className="servicePageSection webServicePageSection creativeServices position-relative">
        <div className="content_container position-relative">
          <img
            src="/images/creative-services.png"
            alt="creative-services"
            className="creativeServicesVector"
          />
          <div className="servicePageBanner">
            <h1 className="colorBlack fw-800 projectHeading wow animate__animated animate__fadeInUp">
              Designing Your Brand <br />
              Identity with Style!
            </h1>

            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_100ms">
              Imagine.
            </h4>
            <h4 className="serviceKeyPoints colorBlack fw-800 wow animate__animated animate__fadeInUp animation_delay_200ms">
              Craft.
            </h4>
            <h4 className="serviceKeyPoints colorRed fw-800 wow animate__animated animate__fadeInUp animation_delay_300ms">
              Innovate.
            </h4>
          </div>
        </div>
      </section>

      <section className="webServiceWhatWeDo whatWeDo">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Creative Services
          </h2>
          <div className="row m-0 whatwedoTabs">
            <div className="col-sm-6 p-0 whatwedoTabsL wow animate__animated animate__fadeInUp">
              <ul>
                <li
                  onClick={() => handleTabClick(0)}
                  className={activeTab === 0 ? "active" : ""}
                >
                  Video Advertising & Marketing
                </li>
                <li
                  onClick={() => handleTabClick(1)}
                  className={activeTab === 1 ? "active" : ""}
                >
                  Display Banners
                </li>
                <li
                  onClick={() => handleTabClick(2)}
                  className={activeTab === 2 ? "active" : ""}
                >
                  Video Content
                </li>
                <li
                  onClick={() => handleTabClick(3)}
                  className={activeTab === 3 ? "active" : ""}
                >
                  Innovative Content
                </li>
              </ul>
            </div>
            <div className="col-sm-6 p-0 whatwedoTabsR wow animate__animated animate__fadeInUp animation_delay_300ms">
              {activeTab === 0 && (
                <div className="whatWeDoTabsResult">
                  <p className="colorBlack fw-400">
                    Facebook, LinkedIn, Twitter, Instagram, Whatsapp- Whatever
                    is the medium you choose, we blend the right creative style
                    and message to create posts.
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
                <div className="whatWeDoTabsResult">
                  <p className="colorBlack fw-400">
                    Google or Facebook, we create digital banners, both static
                    and animated to support your advertising campaigns.
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
                <div className="whatWeDoTabsResult">
                  <p className="colorBlack fw-400">
                    Empower your brand with compelling video content that
                    captivates, informs, and engages your audience like never
                    before.
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
                <div className="whatWeDoTabsResult">
                  <p className="colorBlack fw-400">
                    Experience a world of innovative content that sparks
                    creativity and engages your audience like never before.
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
      <section className=" ourWorkSlider ourWorkslider2 wow animate__animated animate__slideInLeft">
        <div className="content_container">
          <h2 className="sectionHead text-dark colorBlack fw-800 wow animate__animated animate__fadeIn">
            <img src="/images/icons/line.svg" alt="line" />
            More Works
          </h2>
          <Slider {...settings}>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/Memoria"
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
                  <img src="/images/cards/Creative/memoria.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Memoria</h2>
                <span className="colorGrey fw-400">Creative Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/rsbl-calendar"
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
                  <img src="/images/cards/Creative/rsbl.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">RSBL Calendar</h2>
                <span className="colorGrey fw-400">Creative Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/aym-syntex-brochure"
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
                  <img src="/images/cards/Creative/aymbro.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">Aym Syntex Brochure</h2>
                <span className="colorGrey fw-400">Creative Design</span>
              </div>
            </div>
            <div>
              <div className="sliderInner">
                <div className="imgHoverEffect position-relative">
                  <a
                    href="/aym-syntex-annual-report"
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
                  <img src="/images/cards/Creative/acrt.jpg" alt="work" />
                </div>
                <h2 className="colorBlack fw-800">AYM Syntex Annul Report</h2>
                <span className="colorGrey fw-400">Creative Design</span>
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
          <h2 className="sectionHead colorWhite text-white fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Our Expertise
          </h2>
          <div className="accordianParent wow animate__animated animate__fadeIn animation_delay_300ms">
            <Accordion title="Infographics">
              <p>
                Visualising information requires not just creativity, but also a
                keen understanding of the data and an analytical approach that
                can best present it. As audiences move increasingly away from
                intense use of words, our infographics will help you create
                shareable, easy to comprehend content.
              </p>
            </Accordion>
            <Accordion title="Emailers & Newsletters">
              <p>
                Stay in touch with your customers and forge meaningful
                conversations with mailers that are both engaging and
                informative. Bonus: our content creation teams help you craft
                compelling headlines proven to improve open rate.
              </p>
            </Accordion>
            <Accordion title="GIFs Creatives">
              <p>
                Crafting captivating GIF creatives goes beyond creativity; it
                demands a deep grasp of data and an analytical finesse for
                optimal presentation. As audiences gravitate towards more visual
                content, our GIFs service empowers you to share information
                effortlessly with eye-catching, easy-to-understand visuals.
              </p>
            </Accordion>
            <Accordion title="WhatsApp Creatives">
              <p>
                Elevate your WhatsApp Creatives with a blend of creativity and
                data-driven insight. Our infographics turn complex information
                into easily shareable, visually engaging content, aligning
                perfectly with the evolving preferences of today's audience.
              </p>
            </Accordion>
            <Accordion title="Logo & Stationery">
              <p>
                Crafting a memorable logo and stationery design demands more
                than just creativity; it requires a deep comprehension of your
                brand's essence and an analytical approach to visually represent
                it. In a world where visual communication reigns, our designs
                ensure your brand is not only memorable but also easily
                recognizable and shareable.
              </p>
            </Accordion>
            <Accordion title="Brochures & Flyers">
              <p>
                Transform your Brochures & Flyers with a fusion of artistic
                ingenuity and data-driven precision. Our designs convert
                intricate information into visually captivating content,
                perfectly aligned with the dynamic tastes of modern audiences.
              </p>
            </Accordion>
            <Accordion title="Graphic Design">
              <p>
                Elevate your brand's visual identity and captivate your audience
                with our meticulous and innovative graphic design, where
                creativity meets precision to deliver compelling, tailor-made
                visuals that leave a lasting impression.
              </p>
            </Accordion>
            <Accordion title="Giveaway Kit Design">
              <p>
                Transform your brand's image and captivate your audience with
                our expertly crafted Giveaway Kit, where creativity knows no
                bounds, and every detail is a masterpiece waiting to leave a
                lasting impression.
              </p>
            </Accordion>
            <Accordion title="Outdoor Ads">
              <p>
                Elevate your brand's visibility and captivate your audience with
                Outdoor Ads, where creativity meets the great outdoors, turning
                heads and sparking conversations at every corner.
              </p>
            </Accordion>
          </div>
          <h2 className="sectionHead colorWhite  text-white fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            Why Choose Us
          </h2>
          <div className="whyChooseUsDetails">
            <p className="colorWhite fw-400 wow animate__animated animate__fadeInUp">
              In the realm of creative design, we've consistently shattered
              conventions and stretched the boundaries of creativity to bridge
              the gap between your vision and your audience's desires. Our
              creative design expertise incorporates interactive tools,
              compelling content, captivating visuals, and user-friendly
              interfaces, seamlessly fused with cutting-edge technologies such
              as Web Design and Development Tools, Typography and Font Tools,
              animation software, Animation Software, to craft immersive and
              visually stunning experiences that leave a lasting impression.
            </p>
            <ul className="d-flex align-items-center wow animate__animated animate__fadeInUp animation_delay_300ms">
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Digital Illustration Tools
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Photography and Image Editing
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Project Management and Collaboration Tools
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Animation Software
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Video Editing Software
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Prototyping Tools
              </li>
              <li
                className="colorWhite fw-800"
                onMouseEnter={props.mouseEnterOnBlack}
                onMouseLeave={props.mouseLeaveOnBlack}
              >
                Color Management Tools
              </li>
              {/* <li
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
              </li> */}
            </ul>
          </div>
        </div>
      </section>

      <section className="webServicePageClient ourRecentClients">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Recent Clients
          </h2>
          <ClientLogo client="creativeDeisgnClient" />
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
            <p className="mb-0 wow">We transform your vision</p>
            <p className="mb-0 wow">into creative, compelling,</p>
            <p className="mb-0 wow">and visually stunning</p>
            <p className="mb-0 wow">designs.</p>
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

export default CreativeServices;
