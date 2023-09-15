import React, { useEffect, useState } from "react";
import $ from "jquery";
import WOW from "wowjs";
import News from "../../Shared/News";
// import News from "../Shared/News";
import { Icon } from "@iconify/react";

const AllProjects = (props) => {
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
            <a href="/our-work/all-projects" className="text-decoration-none">
              {" "}
              <li
                className="colorLightGrey fw-800 active"
               
              >
                All Project
              </li>
            </a>
            <a href="/our-work/website-app" className="text-decoration-none">
              {" "}
              <li
                className="colorLightGrey fw-800"
              
              >
                Websites/App
              </li>
            </a>
            <a
              href="/our-work/video-production"
              className="text-decoration-none"
            >
              <li
                className="colorLightGrey fw-800"
              
              >
                Video Production
              </li>
            </a>
            <a
              href="/our-work/digital-marketing"
              className="text-decoration-none"
            >
              <li
                className="colorLightGrey fw-800"
                
              >
                Digital Marketing
              </li>
            </a>
            <a
              href="/our-work/creative-design"
              className="text-decoration-none"
            >
              {" "}
              <li
                className="colorLightGrey fw-800"
              
              >
                Creative Design
              </li>
            </a>
            <a
              href="/our-work/digital-activation"
              className="text-decoration-none"
            >
              {" "}
              <li
                className="colorLightGrey fw-800"
               
              >
                Digital Activations
              </li>
            </a>
            <a href="/our-work/photography" className="text-decoration-none">
              {" "}
              <li
                className="colorLightGrey fw-800"
               
              >
                Photography
              </li>
            </a>
          </ul>
          
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
                          <span className="commonViewAll">View Project</span>
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
                      src="/images/thumbnails/all_projects/aymwebsite.jpg"
                      alt="Project"
                      className="img-fluid w-100"
                    />
                    <div className="project_overview">
                      <div className="top_overview">
                        <h2 className="proj_name text-black">
                          AYM Syntex
                          <br />
                        </h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/aym-syntex"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                        <h2 className="proj_name text-black">Vardhman</h2>
                        <p className="proj_type text-black">Web Development</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/vardhman"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                          <span className="commonViewAll">View Project</span>
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
                          DHC International Teaser
                          <br />
                        </h2>
                        <p className="proj_type text-black">Video Production</p>
                      </div>
                      <div className="bottom_overview">
                        <a
                          href="/DHCinternational-teaser"
                          className="unsetAll"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="commonViewAll">View Project</span>
                          <Icon icon="clarity:arrow-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
         
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

export default AllProjects;
