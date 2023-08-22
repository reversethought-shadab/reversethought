import { Icon } from "@iconify/react";
import React from "react";
import { useEffect } from "react";
import WOW from "wowjs";

const Popup = (props) => {
  useEffect(() => {
    const wow = new WOW.WOW({});
    wow.init();
  }, []);
  return (
    <>
      <div className="watchOurVideo wow animate__animated animate__fadeIn">
        <div className="close_quote_form" onClick={props.close_reel}>
          <Icon icon="iconamoon:close-thin" />
        </div>
        <iframe
          className=" wow animate__animated animate__fadeIn"
          src="https://www.youtube.com/embed/pbkZDeQdtWM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};


export default Popup;
