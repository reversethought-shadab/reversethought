import React from "react";

const Sitemap = () => {
  return (
    <>
      <section
        className="sitemap py-5"
        style={{
          padding: "90px 0 41px;",
          marginLeft: "-15px",
          marginRight: "-15px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <ul>
                <li className="my-2" style={{ listStyle: "circle" }}>
                  <a
                    href="/servicesMain"
                    className="text-decoration-none text-dark"
                  >
                    Services
                  </a>
                  <ul>
                    <li className="my-2" style={{ listStyle: "disc" }}>
                      <a
                        href="/websiteDesign"
                        className="text-decoration-none text-dark"
                      >
                        Website/App
                      </a>
                    </li>
                    <li className="my-2" style={{ listStyle: "disc" }}>
                      <a
                        href="/Video-production-Services"
                        className="text-decoration-none text-dark"
                      >
                        Video Production
                      </a>
                    </li>
                    <li className="my-2" style={{ listStyle: "disc" }}>
                      <a
                        href="/Digital-Marketing-Services"
                        className="text-decoration-none text-dark"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li className="my-2" style={{ listStyle: "disc" }}>
                      <a
                        href="/Creative-Services"
                        className="text-decoration-none text-dark"
                      >
                        Creative Design
                      </a>
                    </li>
                    <li className="my-2" style={{ listStyle: "disc" }}>
                      <a
                        href="/Digital-activation-Services"
                        className="text-decoration-none text-dark"
                      >
                        Digital Activations
                      </a>
                    </li>
                    <li className="my-2" style={{ listStyle: "disc" }}>
                      <a
                        href="/Photography"
                        className="text-decoration-none text-dark"
                      >
                        Photography
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="my-2" style={{ listStyle: "circle" }}>
                  <a
                    href="/our-work"
                    className="text-decoration-none text-dark"
                  >
                    Our Work
                  </a>
                </li>
                <li className="my-2" style={{ listStyle: "circle" }}>
                  <a href="/clients" className="text-decoration-none text-dark">
                    Clients
                  </a>
                </li>
                <li className="my-2" style={{ listStyle: "circle" }}>
                  <a
                    href="/about-us"
                    className="text-decoration-none text-dark"
                  >
                    About Us
                  </a>
                </li>
                <li className="my-2" style={{ listStyle: "circle" }}>
                  <a
                    href="/contact-us"
                    className="text-decoration-none text-dark"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="my-2" style={{ listStyle: "circle" }}>
                  <a href="/careers" className="text-decoration-none text-dark">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;
