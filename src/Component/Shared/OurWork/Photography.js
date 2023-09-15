import React, { useEffect, useState } from "react";
import $ from "jquery";
import WOW from "wowjs";
import News from "../../Shared/News";
// import News from "../Shared/News";
import { Icon } from "@iconify/react";

const Photography = (props) => {
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
              <li className="colorLightGrey fw-800">Video Production</li>
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
              <li className="colorLightGrey fw-800 active">Photography</li>
            </a>
          </ul>

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
                        <span className="commonViewAll">View Project</span>
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

export default Photography;
