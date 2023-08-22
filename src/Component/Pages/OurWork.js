import React, { useEffect, useState } from "react";
import $ from "jquery";
import WOW from "wowjs";
import News from "../Shared/News";
import { Icon } from "@iconify/react";

const OurWork = (props) => {
  const [isACtive, setisACtive] = useState(0);

  const handleTabClick = (i) => {
    setisACtive(i);
  };

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  $(".projectSectiontabs li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // const ourWorkLeft = [
  //   {
  //     img: "proj-1.png",
  //     projectName: `Elley's <br/> Electronics`,
  //     projectType: "Web Development",
  //     projectLink: "https://www.elleys.group/",
  //   },
  //   {
  //     img: "proj-2.png",
  //     projectName: `Goodricke`,
  //     projectType: "Web Development",
  //     projectLink: "https://www.goodricke.com/",
  //   },
  //   {
  //     img: "proj-3.png",
  //     projectName: `AYM Syntex`,
  //     projectType: "Web Development",
  //     projectLink: "https://www.aymsyntex.com/",
  //   },
  //   {
  //     img: "proj-4.png",
  //     projectName: "Induslnd Bank",
  //     projectType: "",
  //     projectLink: "",
  //   },
  //   {
  //     img: "proj-13.png",
  //     projectName: "",
  //     projectType: "",
  //     projectLink: "",
  //   },
  //   {
  //     img: "proj-14.png",
  //     projectName: "",
  //     projectType: "",
  //     projectLink: "",
  //   },
  //   {
  //     img: "proj-15.png",
  //     projectName: "",
  //     projectType: "",
  //     projectLink: "",
  //   },
  //   {
  //     img: "proj-16.png",
  //     projectName: "",
  //     projectType: "",
  //     projectLink: "",
  //   },
  //   {
  //     img: "proj-17.png",
  //     projectName: "",
  //     projectType: "",
  //     projectLink: "",
  //   },
  //   {
  //     img: "proj-18.png",
  //     projectName: "",
  //     projectType: "",
  //     projectLink: "",
  //   },
  // ];

  return (
    <>
      <section
        className="projectsGallery"
        onMouseEnter={props.mouseEnterOnBlack}
        onMouseLeave={props.mouseLeaveOnBlack}
      >
        <div className="content_container">
          <ul className="projectSectiontabs p-0 m-0 d-flex justify-content-between align-items-center wow animate__animated animate__fadeIn">
            <li
              className="colorLightGrey fw-800 active"
              onClick={() => handleTabClick(0)}
            >
              All Project
            </li>
            <li
              className="colorLightGrey fw-800"
              onClick={() => handleTabClick(1)}
            >
              Websites/App
            </li>
            <li
              className="colorLightGrey fw-800"
              onClick={() => handleTabClick(2)}
            >
              Video Production
            </li>
            <li
              className="colorLightGrey fw-800"
              onClick={() => handleTabClick(3)}
            >
              Digital Marketing
            </li>
            <li
              className="colorLightGrey fw-800"
              onClick={() => handleTabClick(4)}
            >
              Creative Design
            </li>
            <li
              className="colorLightGrey fw-800"
              onClick={() => handleTabClick(5)}
            >
              Digital Activations
            </li>
            <li
              className="colorLightGrey fw-800"
              onClick={() => handleTabClick(6)}
            >
              Photography
            </li>
          </ul>
          {isACtive === 0 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-1.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Elleys’ <br />
                        Electronic
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/elleyselectrics"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-2.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Goodricke <br />
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/goodricke"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/aym1.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Welspun India</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welspungroup"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/indusind.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">IndusInd Bank</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/indusind"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/icicipro.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Icici Pro </h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/IciciPrudential"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/kukufm.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">KUKU FM</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/kukufm"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/recipe.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Recipe <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/recipe"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/calendar.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">RSBL Calendar</h2>
                      <p className="proj_type">Creative Design</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/rsbl-calendar"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/speakhealth.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Speak Health</h2>
                      <p className="proj_type">Animation & Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/speak-health"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/rainbow.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Vardhaman</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/vardhman"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/gaming.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">One Game Arcade</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/one-gaming-arcade"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/days8.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Dabur</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/dabur"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/cook.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Texprocil</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/texprocil"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryM">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-5.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Memoria</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/Memoria"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-6.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Notandas <br />
                        Jewellery
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/notandas"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-7.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Vardhaman</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/vardhman"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/malik.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Malik <br />
                        Architecture
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/malik-architecture"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/vijayseles.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Vijay Sales</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/vijay-sales"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/carnival.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        On Carnival <br />
                        Furniture
                      </h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/sos.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Speed Of Sound </h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/speed-of-sound"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/alkem.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Alkem Laboratories</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/alkem-laboratories"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/dhc.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">HDC Internation</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/HDCinternational"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/alkemar.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Alkem AR <br />
                      </h2>
                      <p className="proj_type">Digital Activation</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/alkem-ar-filters"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/onegaming.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        One Gaming <br />
                        Arcade
                      </h2>
                      <p className="proj_type">Animation & Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/one-gaming-arcade"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/matrix.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">L'Oréal Matrix</h2>
                      <p className="proj_type">Digital Activation</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/loreal-matrix"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/hero.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">One Game Arcade</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/one-gaming-aracde"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryR">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-26.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Welspun India</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welspungroup"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-9.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Dabur</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-10.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">McDowell's</h2>
                      <p className="proj_type">App</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/mcdowell"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/tea.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Goodricke</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welspungroup"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/bad.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Dabur</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/neoniche.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Neo Niche</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/mcdowell"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/skygreens.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Skygreens</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welspungroup"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/qr678.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Q678</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/jeasons.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Jesons</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/jesons"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/ljm.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">LJM</h2>
                      <p className="proj_type">Creative Design</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/notandas"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/dell.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Dell</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/vardhman"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/canadian.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Canadian Wood</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welspungroup"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/car.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">One Game Arcade</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welspungroup"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/essential.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Dabur</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/jindal.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Jindal</h2>
                      <p className="proj_type">Video production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/mcdowell"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {isACtive === 1 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-1.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Elleys’ <br />
                        Electronic
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/elleyselectrics"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/aym2.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Aym Syntex <br />
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/malik.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Malik Architecture
                        <br />
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/malik-architecture"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryM">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/ship.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Nagarkot
                        <br />
                        Logistics
                      </h2>
                      <p className="proj_type">Logistics</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/nagarkot-logistics"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-6.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Notandas <br />
                        Jewellery
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/notandas"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-7.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Vardhaman</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/vardhman"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/tea.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Goodricke</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/goodricke"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/bad.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Goodricke</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/goodricke"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryR">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/piplines.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Welspun India</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/floor.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Continuum India</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/continuum-india"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/cook.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Texprocil</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/texprocile"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {isACtive === 2 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-1.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Elleys’ <br />
                        Electronic
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/elleyselectrics"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-2.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Goodricke <br />
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryM">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-5.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Memoria</h2>
                      <p className="proj_type">Print</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/memoria"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-6.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Notandas <br />
                        Jewellery
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/notandas"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-7.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Vardhaman</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/vardhman"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryR">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-26.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Welspun India</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welspunGroup"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-9.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Dabur</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/dabur"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-10.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">McDowell's</h2>
                      <p className="proj_type">App</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/mcdowell"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {isACtive === 3 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-1.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Elleys’ <br />
                        Electronic
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/elleyselectrics"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-2.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Goodricke <br />
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryM">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-5.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Memoria</h2>
                      <p className="proj_type">Print</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/memoria"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-6.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Notandas <br />
                        Jewellery
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/notandas"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-7.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Vardhaman</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/vardhman"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryR">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-26.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Welspun India</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welspunGroup"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-9.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Dabur</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/dabur"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-10.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">McDowell's</h2>
                      <p className="proj_type">App</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/mcdowell"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {isACtive === 4 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-1.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Elleys’ <br />
                        Electronic
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/elleyselectrics"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-2.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Goodricke <br />
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryM">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-5.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Memoria</h2>
                      <p className="proj_type">Print</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-6.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Notandas <br />
                        Jewellery
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-7.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Vardhaman</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryR">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-26.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Welspun India</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-9.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Dabur</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-10.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">McDowell's</h2>
                      <p className="proj_type">App</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {isACtive === 5 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-1.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Elleys’ <br />
                        Electronic
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/elleyselectrics"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-2.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Goodricke <br />
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryM">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-5.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Memoria</h2>
                      <p className="proj_type">Print</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-6.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Notandas <br />
                        Jewellery
                      </h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-7.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Vardhaman</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projectsGalleryR">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-26.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Welspun India</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-9.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Dabur</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/projects/all-projects/proj-10.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">McDowell's</h2>
                      <p className="proj_type">App</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/our-work"
                        className="unsetAll"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="commonViewAll">View Our Projects</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
      <section className="weareintheNews customPaddingClass">
        <div className="content_container">
          <News />
        </div>
      </section>
    </>
  );
};

export default OurWork;
