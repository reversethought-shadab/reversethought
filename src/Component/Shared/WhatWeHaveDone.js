import React from "react";

const WhatWeHaveDone = (props) => {
  return (
    <>
      <section
        className="whatWeHaveDone"
        onMouseEnter={props.mouseEnterOnBlack}
        onMouseLeave={props.mouseLeaveOnBlack}
      >
        <div className="content_container">
          <h2 className="sectionHead colorWhite text-white fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            What we have done
          </h2>
          <div className="gridSystem">
            <div className="gridSystemInner">
              <h4 className="colorWhite fw-800 wow count_parent">
                <div className="wow count_child">150+ Clients </div>
              </h4>
              <div className="wow count_text_parent">
                <p className="colorWhite fw-800 wow count_text_child">
                  Featuring some of the biggest players in their domain
                </p>
              </div>
            </div>
            <div className="gridSystemInner">
              <h4 className="colorWhite fw-800 wow count_parent">
                <div className="wow count_child">
                  1000+ <br /> Films
                </div>
              </h4>
              <div className="wow count_text_parent">
                <p className="colorWhite fw-800 wow count_text_child">
                  Shot across the globe and counting. Includes 2d explainer
                  videos and videos for social media
                </p>
              </div>
            </div>
            <div className="gridSystemInner">
              <h4 className="colorWhite fw-800 wow count_parent">
                <div className="wow count_child">10000+ Creatives</div>
              </h4>
              <div className="wow count_text_parent">
                <p className="colorWhite fw-800 wow count_text_child">
                  Across website, social media, videos and digital creatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeHaveDone;
