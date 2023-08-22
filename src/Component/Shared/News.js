import React, { useEffect} from "react";
import WOW from "wowjs";

function News() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <>
      <h2 className="sectionHead colorBlack fw-800 wow">
        <img src="/images/icons/line.svg" alt="line" />
        We are in the News
      </h2>
      <div className="gridSystem">
        <img
          src="/images/news/news-8.svg"
          alt="news"
          className="img-fluid wow"
          data-aos="true"
          data-aos-offset="321.6666666666667"
        />
        <img
          src="/images/news/news-2.svg"
          alt="news"
          className="img-fluid wow"
          data-aos="true"
          data-aos-offset="321.6666666666667"
        />
        <img
          src="/images/news/news-5.svg"
          alt="news"
          className="img-fluid wow"
          data-aos="true"
          data-aos-offset="321.6666666666667"
        />
        <img
          src="/images/news/news-1.svg"
          alt="news"
          className="img-fluid wow"
          data-aos="true"
          data-aos-offset="321.6666666666667"
        />
        <img
          src="/images/news/news-3.svg"
          alt="news"
          className="img-fluid wow"
          data-aos="true"
          data-aos-offset="321.6666666666667"
        />
        <img
          src="/images/news/news-4.svg"
          alt="news"
          className="img-fluid wow"
          data-aos="true"
          data-aos-offset="321.6666666666667"
        />
        <img
          src="/images/news/news-7.svg"
          alt="news"
          className="img-fluid wow"
          data-aos="true"
          data-aos-offset="321.6666666666667"
        />
        <img
          src="/images/news/news-6.svg"
          alt="news"
          className="img-fluid wow"
          data-aos="true"
          data-aos-offset="321.6666666666667"
        />
        <img
          src="/images/news/news-9.svg"
          alt="news"
          className="img-fluid wow"
          data-aos="true"
          data-aos-offset="321.6666666666667"
        />
      </div>
    </>
  );
}

export default News;
