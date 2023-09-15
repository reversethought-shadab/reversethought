import React, { useEffect, useState } from "react";
import $ from "jquery";
import WOW from "wowjs";
import News from "../../Shared/News";
// import News from "../Shared/News";
import { Icon } from "@iconify/react";

const VideoProduction = (props) => {
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
              <li className="colorLightGrey fw-800 ">All Project</li>
            </a>
            <a href="/our-work/website-app" className="text-decoration-none">
              {" "}
              <li className="colorLightGrey fw-800">Websites/App</li>
            </a>
            <a
              href="/our-work/video-production"
              className="text-decoration-none"
            >
              <li className="colorLightGrey fw-800 active">Video Production</li>
            </a>
            <a
              href="/our-work/digital-marketing"
              className="text-decoration-none"
            >
              <li className="colorLightGrey fw-800">Digital Marketing</li>
            </a>
            <a
              href="/our-work/creative-design"
              className="text-decoration-none"
            >
              {" "}
              <li className="colorLightGrey fw-800">Creative Design</li>
            </a>
            <a
              href="/our-work/digital-activation"
              className="text-decoration-none"
            >
              {" "}
              <li className="colorLightGrey fw-800">Digital Activations</li>
            </a>
            <a href="/our-work/photography" className="text-decoration-none">
              {" "}
              <li className="colorLightGrey fw-800">Photography</li>
            </a>
          </ul>

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
                        <span className="commonViewAll">View Project</span>
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
                        href="/welspunBKG"
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
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
                href="/vardhman2"
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
                        href="/vardhman2"
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
                href="/vijay-sales2"
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
                        href="/vijay-sales2"
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
                        <Icon icon="clarity:arrow-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/icici-prundential-life-insurance"
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
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
                        <span className="commonViewAll">View Project</span>
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

export default VideoProduction;
