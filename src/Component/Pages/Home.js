import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import WOW from "wowjs";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import ClientLogo from "../Shared/ClientLogo";
import ClientLogo from "../Shared/ClientLogo";
import News from "../Shared/News";
import Popup from "../Shared/Popup";
import WhatWeHaveDone from "../Shared/WhatWeHaveDone";

const Home = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [watchReel, setWatchReel] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  const projectPreview = useRef(null);

  useEffect(() => {
    const wow = new WOW.WOW({});
    wow.init();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleCursor = () => {
    let cursor = document.querySelector(".custom-cursor");
    cursor.classList.add("active");
  };

  const watch_reel = () => {
    setWatchReel(true);
  };

  const close_reel = () => {
    setWatchReel(false);
  };

  return (
    <>
      {watchReel === true ? <Popup close_reel={close_reel} /> : ""}
      <section className="homeIntro">
        <div className="content_container">
          <h1 className="colorBlack fw-800 wow">
            Trusted for stunning design since 2008
            {/* Strategy & design for extraordinary organizations  */}
          </h1>
          <span className="colorBlack fw-400 hero_year wow ">
            2008&nbsp; <img src="/images/icons/line.svg" alt="line" />{" "}
            &nbsp;2023
          </span>
          <h2 className="colorBlack fw-400 wow">
            For the last 15 years{" "}
            <span className="colorRed fw-400">
              we have leveraged strategy, design and technology &nbsp;
            </span>
            to help leading Indian and multinational organizations achieve their
            objectives.
          </h2>
          <span
            className="colorBlack fw-500 watch_reel_txt wow"
            onClick={watch_reel}
            onMouseEnter={props.onMouseEnterSmall}
            onMouseLeave={props.onMouseLeaveSmall}
          >
            <img
              src="/images/icons/play.svg"
              alt="play"
              className="img-fluid hero_reel_play"
            />
            &nbsp; Watch the Agency Reel!
          </span>
          <span className="d-flex">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
          </span>
        </div>
      </section>

      <section className="projectPreview" ref={projectPreview}>
        <div className="content_container">
          <div className="projectGalleryMain">
            <div className="projectsGalleryL">
              <a
                href="/elleyselectrics"
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
              >
                <div className="project_box wow animate__animated animate__fadeInUp">
                  {" "}
                  <img
                    src="/images/projects/all-projects/proj-1.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name text-dark text-dark">
                        Elleys’ <br />
                        Electronic
                      </h2>
                      <p className="proj_type text-dark">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/elleyselectrics"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/goodricke"
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
              >
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-2.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name text-dark">
                        Goodricke <br />
                      </h2>
                      <p className="proj_type  text-dark">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/goodricke"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>{" "}
              </a>
            </div>

            <div className="projectsGalleryM">
              <a
                href="/Memoria"
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
              >
                {" "}
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-5.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name text-dark">Memoria</h2>
                      <p className="proj_type  text-dark">Creative Design</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/Memoria"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/notandas"
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
              >
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-6.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name text-dark">
                        Notandas <br />
                        Jewellery
                      </h2>
                      <p className="proj_type  text-dark">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/notandas"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/vardhman"
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
              >
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-7.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name text-dark">Vardhaman</h2>
                      <p className="proj_type  text-dark">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/vardhman"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="projectsGalleryR">
              <a
                href="/welspunGroup"
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
              >
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/welp.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name text-dark">Welspun </h2>
                      <p className="proj_type  text-dark">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welspun"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/icici-pension-fund"
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
              >
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/nps.webp"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name text-dark">
                        ICICI Pension Fund{" "}
                      </h2>
                      <p className="proj_type  text-dark">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/icici-pension-fund"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/mcdowell"
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
              >
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/mcd.jpg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name text-dark">McDowell's</h2>
                      <p className="proj_type  text-dark">
                        Digital Activations
                      </p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/mcdowell"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <a
            href="/our-work"
            className="unsetAll"
            onClick={() => window.scrollTo(0, 0)}
            onMouseEnter={props.onMouseEnterSmall}
            onMouseLeave={props.onMouseLeaveSmall}
          >
            <span className="commonViewAll">View All Projects</span>
            <Icon icon="clarity:arrow-line" />
          </a>
        </div>
      </section>
      {/* <section className="ourRecentClients">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Recent Clients
          </h2>
          <ClientLogo client="commonClient" />
        </div>
      </section> */}
      <section className="whatWeDo ">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            What we do
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
                  <span className="fw-800">01</span>
                  Websites/App
                </li>
                <li
                  onClick={() => handleTabClick(1)}
                  className={
                    activeTab === 1
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  <span className="fw-800">02</span>
                  Video Production
                </li>
                <li
                  onClick={() => handleTabClick(2)}
                  className={
                    activeTab === 2
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  <span className="fw-800">03</span>
                  Digital Marketing
                </li>
                <li
                  onClick={() => handleTabClick(3)}
                  className={
                    activeTab === 3
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  <span className="fw-800">04</span>
                  Creative Design
                </li>
                <li
                  onClick={() => handleTabClick(4)}
                  className={
                    activeTab === 4
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  <span className="fw-800">05</span>
                  Digital Activations
                </li>
                <li
                  onClick={() => handleTabClick(5)}
                  className={
                    activeTab === 5
                      ? "wow animate__animated animate__fadeInUp active"
                      : "wow animate__animated animate__fadeInUp"
                  }
                >
                  <span className="fw-800">06</span>
                  Photography
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
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">UI/UX</li>
                    <li className="colorBlack fw-800">Backend Development</li>
                    <li className="colorBlack fw-800">Front-end Development</li>
                    <li className="colorBlack fw-800">Mobile App design</li>
                    <li className="colorBlack fw-800">WordPress Development</li>
                  </ul>
                  <p className="colorBlack fw-400">
                    Let’s energise and elevate your website presence, with the
                    right balance of business strategy and user excitement. We
                    conceptualise, strategise, design and develop websites and
                    apps that establish new design standards in the industry,
                    while performing flawlessly on various devices. We focus
                    heavily on user experience & brand upliftment by leveraging
                    design, content and technology.
                  </p>
                  <a
                    href="/websiteDesign"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
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
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">Corporate Profiles</li>
                    <li className="colorBlack fw-800">Corporate Profiles</li>
                    <li className="colorBlack fw-800">AVs </li>
                    <li className="colorBlack fw-800">Video Editing</li>
                    {/* <li className="colorBlack fw-800">2d Animation</li> */}
                  </ul>
                  <p className="colorBlack fw-400">
                    A video is the best marketing tool for business. We
                    conceptualise and produce a broad range of videos from
                    corporate profiles to specific application videos. Through a
                    mix of on-ground & aerial photography, graphics, animation
                    and many more styles we can produce any kind of film for any
                    application that you can think of.
                  </p>
                  <a
                    href="/Video-production-Services"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
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
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">SEO</li>
                    <li className="colorBlack fw-800">
                      Social Media Marketing
                    </li>
                    <li className="colorBlack fw-800">Performance Marketing</li>
                    <li className="colorBlack fw-800">Integrated Marketing</li>
                    {/* <li className="colorBlack fw-800">Integrated Marketing  </li> */}
                    {/* <li className="colorBlack fw-800">
                      SMS & Whatsapp Campaigns
                    </li> */}
                  </ul>
                  <p className="colorBlack fw-400">
                    If your business isn’t online and visible to your customers,
                    you’re missing out on a crucial opportunity to grow. Through
                    a range of tools such as SEO, SEM as well as social media
                    marketing we create the right strategy and content to
                    achieve your business goals both organically and through
                    influencer and paid marketing.
                  </p>
                  <a
                    href="/Digital-Marketing-Services"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
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
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">Print design</li>
                    <li className="colorBlack fw-800">Branding</li>
                    <li className="colorBlack fw-800"> Creative Design</li>
                    {/* <li className="colorBlack fw-800">
                      Internal Communication
                    </li> */}
                  </ul>
                  <p className="colorBlack fw-400">
                    Creativity is the backbone of our agency and the reason for
                    us to do what we do. We design all kinds of branding
                    materials as well as collaterals that captivate and
                    effectively send the message across. We handle the design
                    and content for all kinds of digital and print creatives
                  </p>
                  <a
                    href="/Creative-Services"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    <span className="commonViewAll">Learn More</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
              {activeTab === 4 && (
                <div
                  className={
                    activeTab === 4
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft"
                      : "whatWeDoTabsResult"
                  }
                >
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">AR Filters</li>
                    <li className="colorBlack fw-800">Games</li>
                    <li className="colorBlack fw-800">
                      SMS & Whatsapp Campaigns
                    </li>
                  </ul>
                  <p className="colorBlack fw-400">
                    Break the clutter and engage your audience through custom
                    developed digital activations in the form of apps, games,
                    filters and more. We work closely with your team to develop
                    concepts that add weight to your messaging and develop the
                    assets to execute your campaign.
                  </p>
                  <a
                    href="/Digital-Activation-Services"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
                    onMouseEnter={props.onMouseEnterSmall}
                    onMouseLeave={props.onMouseLeaveSmall}
                  >
                    <span className="commonViewAll">Learn More</span>
                    <Icon icon="clarity:arrow-line" />
                  </a>
                </div>
              )}
              {activeTab === 5 && (
                <div
                  className={
                    activeTab === 5
                      ? "whatWeDoTabsResult wow animate__animated animate__fadeInLeft fifth "
                      : "whatWeDoTabsResult "
                  }
                >
                  <ul className="d-flex">
                    <li className="colorBlack fw-800">Profile Shoot</li>
                    <li className="colorBlack fw-800">Corporate Shoot</li>
                    <li className="colorBlack fw-800">
                      Drone Assisted Photography
                    </li>
                  </ul>
                  <p className="colorBlack fw-400">
                    Capture the essence of your brand with our photography
                    service, where we bring your vision to life through expertly
                    crafted visuals that resonate with your audience. We craft
                    captivating images that not only capture moments but also
                    engage your audience, adding a unique and compelling
                    dimension to your brand.
                  </p>
                  <a
                    href="/Photography"
                    className="unsetAll"
                    onClick={() => window.scrollTo(0, 0)}
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
      <section className="ourRecentClients">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Recent Clients
          </h2>
          <ClientLogo client="commonClient" />
        </div>
      </section>
      <WhatWeHaveDone />

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
                src="/images/achievements/achievement-1.svg"
                alt="achievements"
                className="img-fluid"
                style={{ height: "25px" }}
              />
              <p className="colorBlack fw-800">Oscars of Indian Ad Awards</p>
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
            <img
              src="/images/icons/circle-l.svg"
              alt="circle-l"
              className="wow animate__animated animate__rotateIn"
            />
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
      {/* <section className="ourRecentClients">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Our Recent Clients
          </h2>
          <ClientLogo client="commonClient" />
        </div>
      </section> */}

      <section className="blogsSection">
        <div className="content_container">
          <h2 className="sectionHead colorBlack fw-800 wow">
            <img src="/images/icons/line.svg" alt="line" />
            Blogs
          </h2>
          <div className="gridSystem">
            <div className="gridSystemInner wow animate__animated animate__fadeInUp">
              <a href="/">
                <img src="/images/blogs.svg" alt="blog" className="w-100" />
              </a>
              <h5 className="colorGrey fw-800">16 may | Accessibility</h5>
              <h4 className="colorBlack fw-800">
                What are the differences in designing B2B & B2C websites?
              </h4>
              <div className="d-flex align-items-center blogs_archive_footer">
                <p className="colorGrey fw-200 like_area">
                  <Icon icon="mdi:heart" />
                  <span>385 Likes</span>
                </p>
                <p className="colorGrey fw-200 share_area">
                  <Icon icon="mdi:share" />
                  <span>Share</span>
                </p>
              </div>
            </div>
            <div className="gridSystemInner wow animate__animated animate__fadeInUp animation_delay_100ms">
              <a href="/">
                <img src="/images/blogs.svg" alt="blog" className="w-100" />
              </a>
              <h5 className="colorGrey fw-800">16 may | Accessibility</h5>
              <h4 className="colorBlack fw-800">
                What are the differences in designing B2B & B2C websites?
              </h4>
              <div className="d-flex align-items-center blogs_archive_footer">
                <p className="colorGrey fw-200 like_area">
                  <Icon icon="mdi:heart" />
                  <span>385 Likes</span>
                </p>
                <p className="colorGrey fw-200 share_area">
                  <Icon icon="mdi:share" />
                  <span>Share</span>
                </p>
              </div>
            </div>
            <div className="gridSystemInner wow animate__animated animate__fadeInUp animation_delay_200ms">
              <a href="/">
                <img src="/images/blogs.svg" alt="blog" className="w-100" />
              </a>
              <h5 className="colorGrey fw-800">16 may | Accessibility</h5>
              <h4 className="colorBlack fw-800">
                What are the differences in designing B2B & B2C websites?
              </h4>
              <div className="d-flex align-items-center blogs_archive_footer">
                <p className="colorGrey fw-200 like_area">
                  <Icon icon="mdi:heart" />
                  <span>385 Likes</span>
                </p>
                <p className="colorGrey fw-200 share_area">
                  <Icon icon="mdi:share" />
                  <span>Share</span>
                </p>
              </div>
            </div>
          </div>
          <a
            href="/blogs"
            className="unsetAll"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="commonViewAll">View All Blogs</span>
            <Icon icon="clarity:arrow-line" />
          </a>
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
export default Home;
