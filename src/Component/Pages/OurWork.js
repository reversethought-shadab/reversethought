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
                    src="/images/thumbnails/all_projects/uluru.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Tiger</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/tiger"
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
                    src="/images/thumbnails/all_projects/dchem.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Dodhia Chemical
                        <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/dodhiachemicals"
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
              </div>

              <div className="projectsGalleryM">
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
                    src="/images/thumbnails/all_projects/phone.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        MPUH <br />
                      </h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/"
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
                    src="/images/thumbnails/all_projects/dorado.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Dorado Ivory
                        <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/dorado-ivory"
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
                        href="/jindal-SAW"
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
                    src="/images/thumbnails/all_projects/dit.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        DHC International
                        <br />
                        Teaser
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/DHCinternational-teaser"
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
                    src="/images/thumbnails/all_projects/i2m.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">I2M</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/i2m"
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
                        href="/welpsun-group"
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
                    src="/images/thumbnails/all_projects/conindia.png"
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
                    src="/images/thumbnails/all_projects/webm.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Local 2030</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/local2030"
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
                    src="/images/thumbnails/all_projects/mc.svg"
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
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/gray2333.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">256 Grays</h2>
                      <p className="proj_type">Web Development</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/256grays"
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
                    src="/images/thumbnails/all_projects/dodhia.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Dodhia Textile <br />
                        Film
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/dodhia-textiles"
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
                    src="/images/thumbnails/all_projects/pipeline.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Welpsun BKG <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welpsunBKG"
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
                    src="/images/thumbnails/all_projects/dit.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        DHC International
                        <br />
                        Teaser
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/DHCinternational-teaser"
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
                    src="/images/thumbnails/all_projects/ricv.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Rockman Industries
                        <br />
                        Corporate Video
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/rockman-industries"
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
                    src="/images/thumbnails/all_projects/dhci.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        DHC International <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/DHCinternational"
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
                    src="/images/thumbnails/all_projects/speakevent.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Speak Event <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/speak-event"
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
                    src="/images/thumbnails/all_projects/kfm.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Kuku FM
                        <br />
                      </h2>
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
                        Recipe
                        <br />
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
              </div>

              <div className="projectsGalleryM">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/50.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Vardhman</h2>
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
                    src="/images/thumbnails/all_projects/vjy1.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Vijay Sales <br />
                      </h2>
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
                    src="/images/thumbnails/all_projects/hyd.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Rockman Advanced
                        <br />
                        Composites
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/rockman-advance-comp"
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
                    src="/images/thumbnails/all_projects/dcf.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Dodhia Corporate
                        <br />
                        Film
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/dodhia-corporate-film"
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
                    src="/images/thumbnails/all_projects/icicipru.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        ICICI Prudential
                        <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/icici-prudential"
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
                    src="/images/thumbnails/all_projects/isolus.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Isolus
                        <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/rockman-advance-comp"
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
                    src="/images/thumbnails/all_projects/sphealth.png"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Speak Health
                        <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
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
                    src="/images/thumbnails/all_projects/dchem.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Dodhia Chemical
                        <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/dodhiachemicals"
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
                    src="/images/thumbnails/all_projects/cw.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Canadian Woods
                        <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/canadian-woods"
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
                    src="/images/thumbnails/all_projects/dorado.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Dorado Ivory
                        <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/dorado-ivory"
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
                    src="/images/thumbnails/all_projects/ideas.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Rockman Value Film</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/rockman-values-film"
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
                    src="/images/thumbnails/all_projects/hp.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Welpsun Group (Corp. Film )</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welpsunGroupCorpFilm"
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
                    src="/images/thumbnails/all_projects/wcsr.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Welpsun CSR</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/welspunCSR"
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
                        href="/neoniche"
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
                    src="/images/thumbnails/all_projects/al.svg"
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
                        href="/alkemlaboratories"
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
                    src="/images/thumbnails/all_projects/gson.svg"
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
                        href="/jesons-tech-centre"
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
                    src="/images/thumbnails/all_projects/vijay.png"
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
                        href="/vijay-sales2"
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
                    src="/images/thumbnails/all_projects/scalp.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">QR678</h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/qr678"
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
                    src="/images/thumbnails/all_projects/phone.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        MPUH <br />
                      </h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/"
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
                    src="/images/thumbnails/all_projects/49.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Advance Solution <br />
                      </h2>
                      <p className="proj_type">Video Production</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/advance-solution"
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
                    src="/images/thumbnails/all_projects/trade.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Icici Prudential</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/icici-prudential"
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
                    src="/images/thumbnails/all_projects/nps.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Icici Prudential</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/icici-prudential"
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
                    src="/images/thumbnails/all_projects/dabur2.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Dabur <br />
                      </h2>
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
                    src="/images/thumbnails/all_projects/flex.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">One Gaming Arcade</h2>
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
                    src="/images/thumbnails/all_projects/freely.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Speak Health</h2>
                      <p className="proj_type">Digital Marketing</p>
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
                        href="/sky-greens"
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
                    src="/images/thumbnails/all_projects/earth.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Jindal SAW</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/jindal-SAW"
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
                    src="/images/thumbnails/all_projects/education.svg"
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
                    src="/images/thumbnails/all_projects/ready.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Speed of Sounds</h2>
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
                    src="/images/thumbnails/all_projects/uluru.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Tiger</h2>
                      <p className="proj_type">Digital Marketing</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/tiger"
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
                    src="/images/thumbnails/all_projects/ayms.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        AYM <br />
                        Syntex
                      </h2>
                      <p className="proj_type">Creative Design</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/aym-syntex"
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
                    src="/images/thumbnails/all_projects/ljmm.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        LJM <br />
                      </h2>
                      <p className="proj_type">Creative Design</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/"
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
                    src="/images/thumbnails/all_projects/scaling.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">AYM Brochure</h2>
                      <p className="proj_type">Creative Design</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/aym-syntex-brochure"
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
                    src="/images/thumbnails/all_projects/calendar.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">RSBL Calendar</h2>
                      <p className="proj_type">Crative Design</p>
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
                    src="/images/thumbnails/all_projects/memo.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">Memoria</h2>
                      <p className="proj_type">Creative Design</p>
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
                    src="/images/thumbnails/all_projects/score.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        Alkem Ar <br />
                        Filters
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
                    src="/images/thumbnails/all_projects/ljmm.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">
                        LJM <br />
                      </h2>
                      <p className="proj_type">Digital Activation</p>
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
                    src="/images/thumbnails/all_projects/mcdowells.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">McDowells No.1</h2>
                      <p className="proj_type">Digital Activation</p>
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

              <div className="projectsGalleryR">
                <div className="project_box wow animate__animated animate__fadeInUp">
                  <img
                    src="/images/thumbnails/all_projects/matrix.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">lo'real Matrix </h2>
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
                    src="/images/thumbnails/all_projects/works.svg"
                    alt="Project"
                    className="img-fluid w-100"
                  />
                  <div className="project_overview">
                    <div className="top_overview">
                      <h2 className="proj_name">unknown</h2>
                      <p className="proj_type">Digital Activation</p>
                    </div>
                    <div className="bottom_overview">
                      <a
                        href="/"
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
