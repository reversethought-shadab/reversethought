import React, { useState } from "react";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap-accordion";
import WOW from "wowjs";
import { Icon } from "@iconify/react";
const Faq = (props) => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <>
      <section
        className="ourExpertiseSection wow"
        style={{
          padding: "padding: 6.8vw 0 1vw !important;",
        }}
        onMouseEnter={props.mouseEnterOnBlack}
        onMouseLeave={props.mouseLeaveOnBlack}
      >
        <div className="content_container">
          <h2 className="sectionHead colorWhite fw-800 wow">
            <img src="/images/icons/line-white.svg" alt="line" />
            FAQs
          </h2>
          <div className="accordianParent wow animate__animated animate__fadeIn animation_delay_300ms">
            <Accordion title="How long will it take to build my website?">
              <p>
                The time needed for building your website depends upon each
                client's complexities and unique requirements. However, building
                a website from scratch can take from a few weeks to a couple of
                months. You can contact us to know the estimated time to develop
                your website.
              </p>
            </Accordion>
            <Accordion title="Can I expect ongoing maintenance from your website development agency in India?">
              <p>
                We provide website maintenance services to ensure that your
                website performance is optimum. It includes monitoring your
                website traffic, securing sites and updating content. You can
                expect your website to stay on top by relying on our in-house
                experts.
              </p>
            </Accordion>
            <Accordion title="What is your cost structure for website development services?">
              <p>
                Our website development services have no set cost; they may vary
                from client to client. You can contact us, inform us about the
                size, complexity and functionality you want in your website.
                Basis the details you share, we can provide you with an
                estimated project cost for our web development services.
              </p>
            </Accordion>
            <Accordion title="Can I make changes after I build my website?">
              <p>
                You might face instances when you may not like or need to alter
                certain things on your website. In that case, we can make the
                necessary alterations so that you get the desired results on
                your website. Feel free to share your concerns with us and get
                an expert solution.
              </p>
            </Accordion>
            <Accordion title="Will my website be mobile-friendly?">
              <p>
                We build a mobile-friendly website so your users can easily
                access your website via smartphones. Moreover, we run a
                mobile-friendly test to uncover and resolve any issues before
                delivering to you.
              </p>
            </Accordion>
            <Accordion title="Does your website agency optimize websites for search engines?">
              <p>
                Our website development service based in Mumbai, India also
                helps clients optimize their website for search engines. We work
                on improving the website’s visibility on search engine result
                pages (SERPs) to drive more traffic to the website and increase
                sales.
              </p>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
