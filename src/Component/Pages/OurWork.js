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
      <section className="projectsGallery">
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
                <a
                  href="/elleyselectrics"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  {" "}
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/projects/all-projects/proj-1.png"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Elleys’ <br />
                          Electronic
                        </h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/elleyselectrics"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="aym-syntex"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/aym2.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Aym Syntex <br />
                        </h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/aym-syntex"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/jindal-SAW"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/earth.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Jindal SAW</h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/jindal-SAW"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/dodhiachemicals"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/dchem.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Dodhia Chemical
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/dodhiachemicals"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
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
                        <h2 className="proj_name text-black">
                          ICICI Pension Fund{" "}
                        </h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/iciciprudential"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryM">
                <a
                  href="/loreal-matrix"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/loreal.jpg"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">L'Oréal Matrix</h2>
                        <p className="proj_type text-black">
                          Digital Activation
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/loreal-matrix"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/mpuh"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/phone.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          MPUH <br />
                        </h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/mpuh"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
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
                        <h2 className="proj_name text-black">Vardhaman</h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/vardhman"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/malik-architecture"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/malik.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Malik <br />
                          Architecture
                        </h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/malik-architecture"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/vijay-sales"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/vijayseles.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Vijay Sales</h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/vijay-sales"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryR">
                <a
                  href="/welspun"
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
                        <h2 className="proj_name text-black">Welspun </h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/welspun"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/mcdowll"
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
                        <h2 className="proj_name text-black">McDowell's</h2>
                        <p className="proj_type text-black">
                          Digital Activations
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/mcdowell"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/dorado-ivory"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/dorado.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Dorado Ivory
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/dorado-ivory"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/tiger"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/tigerlong.png"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Tiger</h2>
                        <p className="proj_type text-black">Video production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/tiger"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/nagarkot-logistics"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/ship.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Nagarkot
                          <br />
                          Logistics
                        </h2>
                        <p className="proj_type text-black">Web Developement</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/nagarkot-logistics"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/DHCinternational-teaser"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/dit.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          DHC International
                          <br />
                          Teaser
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/DHCinternational-teaser"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            ""
          )}

          {isACtive === 1 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <a
                  href="/elleyselectrics"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/projects/all-projects/proj-1.png"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Elleys’ <br />
                          Electronic
                        </h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/elleyselectrics"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/aym-syntex"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/aymwebsite.jpg"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Aym Syntex <br />
                        </h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/aym-syntex"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/malik-architecture"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/malik.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Malik Architecture
                          <br />
                        </h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/malik-architecture"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryM">
                <a
                  href="/nagarkot-logistics"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/ship.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Nagarkot
                          <br />
                          Logistics
                        </h2>
                        <p className="proj_type text-black">Web Development </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/nagarkot-logistics"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
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
                        <h2 className="proj_name text-black">
                          Notandas <br />
                          Jewellery
                        </h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/notandas"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
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
                        <h2 className="proj_name text-black">Vardhaman</h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/vardhman"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
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
                      src="/images/thumbnails/all_projects/gdricke.jpg"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Goodricke</h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/goodricke"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/i2m"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/i2m.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">I2M</h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/i2m"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryR">
                <a
                  href="/welspun"
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
                        <h2 className="proj_name text-black">Welspun </h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/welspun"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/continuum-india"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/conindia.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Continuum India
                        </h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/continuum-india"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/local2030"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/webm.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Local 2030</h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/local2030"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/texprocile"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/mc.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Texprocil</h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/texprocile"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/256grays"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/gray2333.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">256 Grays</h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/256grays"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
          {isACtive === 2 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <a
                  href="/dodhia-textiles"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/dodhia.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Dodhia Textile <br />
                          Film
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/dodhia-textiles"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/welspunBKG"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/pipeline.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Welpsun BKG <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/welpsunBKG"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/DHCinternational-teaser"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/dit.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          DHC International
                          <br />
                          Teaser
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/DHCinternational-teaser"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/rockman-industries"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/ricv.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Rockman Industries Corp
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/rockman-industries"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="DHCinternational"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/dhci.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          DHC International <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/DHCinternational"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/speak-event"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/speakevent.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Speak Event <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/speak-event"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/kukufm"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/kfm.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Kuku FM
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/kukufm"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/recipe"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/recipe.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Recipe
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/recipe"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryM">
                <a
                  href="/vardhman"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/50.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Vardhman</h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/vardhman"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/vijay-sale"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/vjy1.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Vijay Sales <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/vijay-sales"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/rockman-advance-comp"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/hyd.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Rockman Advanced
                          <br />
                          Composites
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/rockman-advance-comp"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/dodhia-corporate-film"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/dcf.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Dodhia Corporate
                          <br />
                          Film
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/dodhia-corporate-film"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/icici-prudential"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/icicipru.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          ICICI Prudential
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/icici-prudential"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/isolus"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/isolus.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Isolus
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/isolus"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/speak-health"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/sphealth.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Speak Health
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/speak-health"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/dodhiachemicals"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/dchem.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Dodhia Chemical
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/dodhiachemicals"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/canadian-woods"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/cw.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Canadian Woods
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/canadian-woods"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/qr678"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/scalp.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">QR678</h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/qr678"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryR">
                <a
                  href="/rockman-values-film"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/ideas.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Rockman Value Film
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/rockman-values-film"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/welpsunGroupCorpFilm"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/hp.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Welpsun Group (Corp. Film )
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/welpsunGroupCorpFilm"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/welspunCSR"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/wcsr.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Welpsun CSR</h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/welspunCSR"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/neo-niche"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/nche.jpg"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Neo Niche</h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/neo-niche"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/alkemlaboratories"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/al.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Alkem Laboratories
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/alkemlaboratories"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/jesons-tech-centre"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/gson.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Jesons</h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/jesons-tech-centre"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/vijay-sales2"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/vijay.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Vijay Sales</h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/vijay-sales2"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/dorado-ivory"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/vlast.svg"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Dorado Ivory
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/dorado-ivory"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
          {isACtive === 3 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <a
                  href="/mpuh"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/phone.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          MPUH <br />
                        </h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/mpuh"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/advance-solution"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/49.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Advance Solution <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/advance-solution"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/icici-prudential"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/trade.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          ICICI Prudential
                        </h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/icici-prudential"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryM">
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
                        <h2 className="proj_name text-black">
                          ICICI Pension Fund
                        </h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/icici-pension-fund"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/dabur"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/dabur2.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Dabur <br />
                        </h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/dabur"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/one-gaming-arcade"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/flex.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          One Gaming Arcade
                        </h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/one-gaming-arcade"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/speak-health"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/freely.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Speak Health</h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/speak-health"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="sky-greens"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/skgreens.jpg"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Skygreens</h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/sky-greens"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryR">
                <a
                  href="/jindal-SAW"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/earth.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Jindal SAW</h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/jindal-SAW"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/indusind"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/education.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">IndusInd Bank</h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/indusind"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/speed-of-sound"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/ready.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Speed of Sounds
                        </h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/speed-of-sound"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/tiger"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/tigerlong.png"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Tiger</h2>
                        <p className="proj_type text-black">
                          Digital Marketing
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/tiger"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
          {isACtive === 4 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <a
                  href="/aym-syntex-brochure"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/ayms.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          AYM <br />
                          Syntex
                        </h2>
                        <p className="proj_type text-black">Creative Design</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/aym-syntex-brochure"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/ljmlogo"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/ljmd.png"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          LJM Logo <br />
                        </h2>
                        <p className="proj_type text-black">Creative Design</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/ljmlogo"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryM">
                <a
                  href="/aym-syntex-annual-report"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/scalling.png"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          AYM Syntex
                          <br />
                          Annual Report
                        </h2>
                        <p className="proj_type text-black">Creative Design</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/aym-syntex-annual-report"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/aymstall-design"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/chair.png"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          AYM Stall Design <br />
                        </h2>
                        <p className="proj_type text-black">Creative Design</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/aymstall-design"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/aymleaflets"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/aymbr.png"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">AYM Leaf Lets</h2>
                        <p className="proj_type text-black">Creative Design</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/aymleaflets"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryR">
                <a
                  href="/rsbl-calendar"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/calendar.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">RSBL Calendar</h2>
                        <p className="proj_type text-black">Crative Design</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/rsbl-calendar"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="/Memoria"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/memo.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Memoria</h2>
                        <p className="proj_type text-black">Creative Design</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/Memoria"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/tatacsr-report"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/empower.jpg"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Tata CSR Report
                        </h2>
                        <p className="proj_type text-black">Creative Design</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/tatacsr-report"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
          {isACtive === 5 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <a
                  href="/alkem-ar-filters"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/score.webp"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Alkem Ar <br />
                          Filters
                        </h2>
                        <p className="proj_type text-black">
                          Digital Activation
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/alkem-ar-filters"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryM">
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
                        <h2 className="proj_name text-black">McDowells No.1</h2>
                        <p className="proj_type text-black">
                          Digital Activation
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/mcdowell"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryR">
                <a
                  href="/loreal-matrix"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/loreal.jpg"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          lo'real Matrix{" "}
                        </h2>
                        <p className="proj_type text-black">
                          Digital Activation
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/loreal-matrix"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/amazon-sambhav"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/amazon.jpg"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">Amazon Sambhav</h2>
                        <p className="proj_type text-black">
                          Digital Activation
                        </p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/amazon-sambhav"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
          {isACtive === 6 ? (
            <div className="projectGalleryMain">
              <div className="projectsGalleryL">
                <a
                  href="/commercial"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                >
                  <div className="project_box wow animate__animated animate__fadeInUp">
                    <img
                      src="/images/thumbnails/all_projects/commercial.png"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          Commercial
                          <br />
                        </h2>
                        <p className="proj_type text-black">Photography</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/commercial"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">
                            View Our Projects
                          </span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="projectsGalleryM"></div>

              <div className="projectsGalleryR"></div>
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
