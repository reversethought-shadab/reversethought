import React from "react";

const ClientLogo = (props) => {
  const clientArr = [
    "aditya_birla_capital",
    "alkem",
    "allcargo",
    "amazon",
    "aym_syntex",
    "bfl",
    "blistex",
    "born_on_instagram",
    "canadian_wood",
    "budweiser",
    "cloud_nine",
    "continuum",
    "cutbrand",
    "dabur",
    "dell",
    "dodhia",
    "e_audition",
    "edelweiss",
    "elleys",
    "elovena",
    "gati",
    "glam_plam",
    "goodricke",
    "gvk_bio",
    "hitachi",
    "hungama",
    "icici_bank",
    "icici_prudential",
    "idea",
    "idfc_bank",
    "indulsand_bank",
    "j&j",
    "jesons",
    "jindal_saw",
    "local_2030",
    "loreal",
    "malik",
    "marico",
    "mcdowells",
    "mittal_builders",
    "mpuh",
    "nagarkot",
    "nem_lab",
    "nissan",
    "notandas",
    "p&g",
    "pavers_england",
    "pedigree",
    "pernord_ricard",
    "pfizer",
    "puma",
    "setwet",
    "sky_greens",
    "solus",
    "speak_health",
    "sunpharma",
    "sutlej_textitle",
    "tata",
    "tci_freight",
    "undp",
    "unilever",
    "upgrad",
    "vardhman",
    "viviana_mall",
    "voltas",
    "welspun_group",
    "welspun_india",
  ];

  const commonclientArr = [
    "aditya_birla_capital",
    "alkem",
    "allcargo",
    "amazon",
    "blistex",
    "budweiser",
    "cloud_nine",
    "continuum",
    "dabur",
    "dell",
    "edelweiss",
    "elleys",
    "elovena",
    "gati",
    "glam_plam",
    "gvk_bio",
    "hitachi",
    "hungama",
  ];

  const websiteclientArr = [
    "welspun_group",
    "icici_bank",
    "malik",
    "elleys",
    "vardhman",
    "notandas",
    "aym_syntex",
    "goodricke",
    "local_2030",
    "nagarkot",
    "continuum",
    "dodhia",
  ];

  const videoclientArr = [
    "alkem",
    "bfl",
    "idea",
    "pernord_ricard",
    "welspun_group",
    "solus",
    "canadian_wood",
    "hitachi",
    "nem_lab",
    "sutlej_textitle",
    "vardhman",
    "speak_health",
  ];

  const digiMarkertlientArr = [
    "dabur",
    "e_audition",
    "solus",
    "canadian_wood",
    "icici_prudential",
    "speak_health",
    "cutbrand",
    "mpuh",
    "jindal_saw",
    "sky_greens",
    "indulsand_bank",
    "jesons",
  ];

  const creativeDeisgnArr = [
    "icici_bank",
    "tata",
    "aditya_birla_capital",
    "speak",
    "aym_syntex",
    "mpuh",
  ];

  const digitalActivationArr = [
    "marico",
    "amazon",
    "loreal",
    "alkem",
    "mcdowells",
  ];

  return (
    <>
      {props.client === "mainClient" ? (
        <div className="gridSystem">
          {clientArr.map((index) => {
            return (
              <img
                src={`/images/clients/` + index + `.png`}
                alt={index}
                className="img-fluid wow"
                data-aos="true"
                data-aos-offset="321.6666666666667"
              />
            );
          })}
        </div>
      ) : props.client === "commonClient" ? (
        <div className="gridSystem">
          {commonclientArr.map((index) => {
            return (
              <img
                src={`/images/clients/` + index + `.png`}
                alt={index}
                className="img-fluid wow"
                data-aos="true"
                data-aos-offset="321.6666666666667"
              />
            );
          })}
        </div>
      ) : props.client === "webClient" ? (
        <div className="gridSystem">
          {websiteclientArr.map((index) => {
            return (
              <img
                src={`/images/clients/` + index + `.png`}
                alt={index}
                className="img-fluid wow"
                data-aos="true"
                data-aos-offset="321.6666666666667"
              />
            );
          })}
        </div>
      ) : props.client === "videoClient" ? (
        <div className="gridSystem">
          {videoclientArr.map((index) => {
            return (
              <img
                src={`/images/clients/` + index + `.png`}
                alt={index}
                className="img-fluid wow"
                data-aos="true"
                data-aos-offset="321.6666666666667"
              />
            );
          })}
        </div>
      ) : props.client === "digiMarketClient" ? (
        <div className="gridSystem">
          {digiMarkertlientArr.map((index) => {
            return (
              <img
                src={`/images/clients/` + index + `.png`}
                alt={index}
                className="img-fluid wow"
                data-aos="true"
                data-aos-offset="321.6666666666667"
              />
            );
          })}
        </div>
      ) : props.client === "creativeDeisgnClient" ? (
        <div className="gridSystem">
          {creativeDeisgnArr.map((index) => {
            return (
              <img
                src={`/images/clients/` + index + `.png`}
                alt={index}
                className="img-fluid wow"
                data-aos="true"
                data-aos-offset="321.6666666666667"
              />
            );
          })}
        </div>
      ) : props.client === "digitalActivationClient" ? (
        <div className="gridSystem">
          {digitalActivationArr.map((index) => {
            return (
              <img
                src={`/images/clients/` + index + `.png`}
                alt={index}
                className="img-fluid wow"
                data-aos="true"
                data-aos-offset="321.6666666666667"
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ClientLogo;
