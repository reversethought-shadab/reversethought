import { useEffect, useState } from "react";
import Home from "./Component/Pages/Home.1";
import Footer from "./Component/Shared/Footer";
import Header from "./Component/Shared/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Component/Pages/services/Services";
import Menu from "./Component/Shared/Menu";
import WebService from "./Component/Pages/services/WebService";
import FilmsService from "./Component/Pages/services/FilmsService";
import DigitalMarketingServices from "./Component/Pages/services/DigitalMarketingServices";
import CreativeServices from "./Component/Pages/services/CreativeServices";
import DigitalActivationServices from "./Component/Pages/services/DigitalActivationServices";
import Photography from "./Component/Pages/services/Photography";
import EnquiryForm from "./Component/Shared/EnquiryForm";
import AboutUs from "./Component/Pages/AboutUs";
import Clients from "./Component/Pages/Clients";
import Careers from "./Component/Pages/Careers";
import ElleysElectrics from "./Component/Pages/work/ElleysElectrics";
import Memoria from "./Component/Pages/work/Memoria";
import WelspunGroup from "./Component/Pages/work/WelspunGroup";
import WelspunCSR from "./Component/Pages/work/WelspunCSR";
import ICICIPrudential from "./Component/Pages/work/ICICIPrudential";
import McDowellNo1 from "./Component/Pages/work/McDowellNo1";
import OurWork from "./Component/Pages/OurWork";
import ContactUs from "./Component/Pages/ContactUs";
import WelspunGroupCorpFilm from "./Component/Pages/work/WelpsunGroupCorpFilm";
import WelspunBKG from "./Component/Pages/work/WelpsunBKG";
import Notandas from "./Component/Pages/work/Website/Notandas";
import Vardhman from "./Component/Pages/work/Website/Vardhman";
import Dabur from "./Component/Pages/work/digital_marketing/Dabur";
import IndusInd from "./Component/Pages/work/digital_marketing/IndusInd";
import AdvanceSolution from "./Component/Pages/work/digital_marketing/AdvanceSolution";
import IciciPensionFund from "./Component/Pages/work/digital_marketing/IciciPensionFund";
import IciciPrudential from "./Component/Pages/work/digital_marketing/IciciPrudential";
import JindalSAW from "./Component/Pages/work/digital_marketing/JindalSAW";
import OneGamingArcade from "./Component/Pages/work/digital_marketing/OneGamingArcade";
import PatelUrologyHospital from "./Component/Pages/work/digital_marketing/PatelUrologyHospital";
import SkyGreens from "./Component/Pages/work/digital_marketing/SkyGreens";
import SpeedOfSound from "./Component/Pages/work/digital_marketing/SpeedOfSound";
import Tiger from "./Component/Pages/work/digital_marketing/Tiger";
import Sunpharma from "./Component/Pages/work/digital_marketing/Sunpharma";
import AlkemLaboratories from "./Component/Pages/work/video_production/AlkemLaboratories";
import CanadianWoods from "./Component/Pages/work/video_production/CanadianWoods";
import DHCInternational from "./Component/Pages/work/video_production/DHCInternational";
import DHCInternationalTeaser from "./Component/Pages/work/video_production/DHCInternationalTeaser";
import DodhiaChemicals from "./Component/Pages/work/video_production/DodhiaChemicals";
import DodhiaCorporateFilm from "./Component/Pages/work/video_production/DodhiaCorporateFilm";
import DodhiaTextiles from "./Component/Pages/work/video_production/DodhiaTextiles";
import DoradoIvory from "./Component/Pages/work/video_production/DoradoIvory";
import IciciPrundentialLifeInsurance from "./Component/Pages/work/video_production/IciciPrudentialLifeInsurance";
import ISolus from "./Component/Pages/work/video_production/ISolus";
import Vardhmaan from "./Component/Pages/work/video_production/Vardhman";
import JesonsTechCentre from "./Component/Pages/work/video_production/JesonsTechCentre";
import KukuFm from "./Component/Pages/work/video_production/KukuFm";
import NeoNiche from "./Component/Pages/work/video_production/NeoNiche";
import QR678 from "./Component/Pages/work/video_production/QR678";
import Recipe from "./Component/Pages/work/video_production/Recipe";
import Recipe2 from "./Component/Pages/work/video_production/Recipe2";
import RockmanAdvancedComp from "./Component/Pages/work/video_production/RockmanAdvancedComp";
import RockmanIndustries from "./Component/Pages/work/video_production/RockmanIndustries";
import RockmanValuesFilm from "./Component/Pages/work/video_production/RockmanValuesFilm";
import SpeakEvent from "./Component/Pages/work/video_production/SpeakEvent";
import SpeakHealth from "./Component/Pages/work/video_production/SpeakHealth";
import SpeakHealthDigital from "./Component/Pages/work/digital_marketing/SpeakHealth";
import VijaySales from "./Component/Pages/work/video_production/VijaySales";
import VijaySales2 from "./Component/Pages/work/video_production/VijaySales2";
import RsblCalendar from "./Component/Pages/work/creative_design/RsblCalendar";
import AymSyntexAnnualReport from "./Component/Pages/work/creative_design/AymSyntexAnnualReport";
import AymSyntexBrochure from "./Component/Pages/work/creative_design/AymSyntaxBrochure";
import CreativeMemoria from "./Component/Pages/work/creative_design/Memoria";
import Welpsun from "./Component/Pages/work/Website/Welpsun";
import AymSyntex from "./Component/Pages/work/Website/AymSyntex";
import ContinuumIndia from "./Component/Pages/work/Website/ContinuumIndia";
import Goodricke from "./Component/Pages/work/Website/Goodricke";
import Grays256 from "./Component/Pages/work/Website/Grays256";
import I2M from "./Component/Pages/work/Website/I2M";
import Local2030 from "./Component/Pages/work/Website/Local2030";
import MalikArchitecture from "./Component/Pages/work/Website/MalikArchitecture";
import NagarkotLogistics from "./Component/Pages/work/Website/NagarkotLogistics";
import Texprocile from "./Component/Pages/work/Website/Texprocile";
import AlkemArFilters from "./Component/Pages/work/digital_activation/AlkemArFilters";
import AmazonSambav from "./Component/Pages/work/digital_activation/AmazonSambhav";
import LorealMatrix from "./Component/Pages/work/digital_activation/LorealMatrix";
import Commercial from "./Component/Pages/work/photography/Commercial";
import Sitemap from "./Component/Pages/Sitemap";
import PrivacyPolicy from "./Component/Pages/PrivacyPolicy";
import Faq from "./Component/Pages/Faq";
import TermsOfUse from "./Component/Pages/TermsOfUse";
import AymLeafLets from "./Component/Pages/work/creative_design/AymLeafLets";
import LjmLogo from "./Component/Pages/work/creative_design/LjmLogo";
import AymStallDesign from "./Component/Pages/work/creative_design/AymStallDesign";
import TataCsrReport from "./Component/Pages/work/creative_design/TataCsrReport";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isCursorOver, setIsCursorOver] = useState(false);
  const [isCursorOverBlack, setIsCursorOverBlack] = useState(false);
  const [isCursorOverRed, setIsCursorOverRed] = useState(false);
  const [isCursorOverFooter, setIsCursorOverFooter] = useState(false);
  const [isCursorOverRedSmall, setIsCursorOverRedSmall] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  const handleMouseEnterRed = () => {
    setIsCursorOverRed(true);
  };

  const handleMouseLeaveRed = () => {
    setIsCursorOverRed(false);
  };

  const handleMouseEnterRedSmall = () => {
    setIsCursorOverRedSmall(true);
  };

  const handleMouseLeaveRedSmall = () => {
    setIsCursorOverRedSmall(false);
  };

  const handleMouseEnter = () => {
    setIsCursorOver(true);
  };

  const handleMouseLeave = () => {
    setIsCursorOver(false);
  };

  const handleMouseEnterBlack = () => {
    setIsCursorOverBlack(true);
  };

  const handleMouseLeaveBlack = () => {
    setIsCursorOverBlack(false);
  };

  const handleMouseEnterFooter = () => {
    setIsCursorOverFooter(true);
  };

  const handleMouseLeaveFooter = () => {
    setIsCursorOverFooter(false);
  };

  // Usestate for navbar menu
  //const [modalActive, setModalActive] = useState(false);

  // Function to open navbar menu
  // const openModal = () => {
  //   setModalActive(true);
  // };

  // // Function to close navbar menu
  // const closeModal = () => {
  //   setModalActive(false);
  // };

  return (
    <main>
      <div
        className={`custom-cursor ${
          isCursorOver
            ? "active"
            : isCursorOverFooter
            ? "active white"
            : isCursorOverRed
            ? "white-Cursor"
            : isCursorOverRedSmall
            ? "active_small"
            : // : isCursorOverFooter
              // ? "active white"
              "normal_cursor"
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>

      <BrowserRouter>
        <Header
        // onMouseEnter={handleMouseEnterBlack}
        // onMouseLeave={handleMouseLeaveBlack}
        //openModal={openModal}
        />
        <EnquiryForm
          mouseEnterOnRed={handleMouseEnterRed}
          mouseLeaveOnRed={handleMouseLeaveRed}
        />
        {/* <EnquiryForm
          mouseEnterOnRed={handleMouseEnterBlack}
          mouseLeaveOnRed={handleMouseLeaveBlack}
        /> */}

        <Menu
          //closeModal={closeModal}
          mouseEnterOnRed={handleMouseEnterRed}
          mouseLeaveOnRed={handleMouseLeaveRed}
          mouseEnterOnBlack={handleMouseEnterBlack}
          mouseLeaveOnBlack={handleMouseLeaveBlack}
          mouseEnterOnFooter={handleMouseEnterFooter}
          mouseLeaveOnFooter={handleMouseLeaveFooter}
        />
        {/* {modalActive === true ? (
          <Menu
            closeModal={closeModal}
            mouseEnterOnRed={handleMouseEnterRed}
            mouseLeaveOnRed={handleMouseLeaveRed}
            mouseEnterOnBlack={handleMouseEnterBlack}
            mouseLeaveOnBlack={handleMouseLeaveBlack}
          />
        ) : (
          ""
        )} */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                //modalActive={modalActive}
                //closeModal={closeModal}
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                // mouseEnterOnBlack={handleMouseEnterBlack}
                // mouseLeaveOnBlack={handleMouseLeaveBlack}
              />
            }
          />
          <Route
            path="/servicesMain"
            element={
              <Services
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // mouseEnterOnRed={handleMouseEnterRed}
              // mouseLeaveOnRed={handleMouseLeaveRed}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/faq"
            element={
              <Faq
                mouseEnterOnBlack={handleMouseEnterBlack}
                mouseLeaveOnBlack={handleMouseLeaveBlack}
              />
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PrivacyPolicy
                mouseEnterOnBlack={handleMouseEnterBlack}
                mouseLeaveOnBlack={handleMouseLeaveBlack}
              />
            }
          />
          <Route
            path="/sitemap"
            element={
              <Sitemap
                mouseEnterOnBlack={handleMouseEnterBlack}
                mouseLeaveOnBlack={handleMouseLeaveBlack}
              />
            }
          />

          <Route
            path="/terms-of-use"
            element={
              <TermsOfUse
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/websiteDesign"
            element={
              <WebService
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // mouseEnterOnBlack={handleMouseEnterBlack}
              // mouseEnterOnRed={handleMouseEnterRed}
              // mouseLeaveOnRed={handleMouseLeaveRed}
              // mouseLeaveOnBlack={handleMouseLeaveBlack}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/Video-production-Services"
            element={
              <FilmsService
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              // mouseEnterOnRed={handleMouseEnterRed}
              // mouseLeaveOnRed={handleMouseLeaveRed}
              // mouseEnterOnBlack={handleMouseEnterBlack}
              // mouseLeaveOnBlack={handleMouseLeaveBlack}
              />
            }
          />
          <Route
            path="/Digital-Marketing-Services"
            element={
              <DigitalMarketingServices
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // mouseEnterOnBlack={handleMouseEnterBlack}
              // mouseEnterOnRed={handleMouseEnterRed}
              // mouseLeaveOnRed={handleMouseLeaveRed}
              // mouseLeaveOnBlack={handleMouseLeaveBlack}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/Creative-Services"
            element={
              <CreativeServices
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // mouseEnterOnBlack={handleMouseEnterBlack}
              // mouseEnterOnRed={handleMouseEnterRed}
              // mouseLeaveOnRed={handleMouseLeaveRed}
              // mouseLeaveOnBlack={handleMouseLeaveBlack}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/Digital-Activation-Services"
            element={
              <DigitalActivationServices
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // mouseEnterOnBlack={handleMouseEnterBlack}
              // mouseEnterOnRed={handleMouseEnterRed}
              // mouseLeaveOnRed={handleMouseLeaveRed}
              // mouseLeaveOnBlack={handleMouseLeaveBlack}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/Photography"
            element={
              <Photography
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              // mouseEnterOnRed={handleMouseEnterRed}
              // mouseLeaveOnRed={handleMouseLeaveRed}
              // mouseEnterOnBlack={handleMouseEnterBlack}
              // mouseLeaveOnBlack={handleMouseLeaveBlack}
              />
            }
          />
          <Route
            path="/notandas"
            element={
              <Notandas
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/vardhman"
            element={
              <Vardhman
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/welspun"
            element={
              <Welpsun
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/alkemlaboratories"
            element={
              <AlkemLaboratories
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/canadian-woods"
            element={
              <CanadianWoods
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/DHCinternational"
            element={
              <DHCInternational
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/DHCinternational-teaser"
            element={
              <DHCInternationalTeaser
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/dodhiachemicals"
            element={
              <DodhiaChemicals
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/dodhia-corporate-film"
            element={
              <DodhiaCorporateFilm
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/dodhia-textiles"
            element={
              <DodhiaTextiles
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/tatacsr-report"
            element={
              <TataCsrReport
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/aymstall-design"
            element={
              <AymStallDesign
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/ljmlogo"
            element={
              <LjmLogo
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/aymleaflets"
            element={
              <AymLeafLets
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/dorado-ivory"
            element={
              <DoradoIvory
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/icici-prundential-life-insurance"
            element={
              <IciciPrundentialLifeInsurance
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/isolus"
            element={
              <ISolus
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/jesons-tech-centre"
            element={
              <JesonsTechCentre
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/kukufm"
            element={
              <KukuFm
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/neo-niche"
            element={
              <NeoNiche
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/qr678"
            element={
              <QR678
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/recipe2"
            element={
              <Recipe2
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/recipe"
            element={
              <Recipe
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/rockman-advance-comp"
            element={
              <RockmanAdvancedComp
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/rockman-industries"
            element={
              <RockmanIndustries
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/rockman-values-film"
            element={
              <RockmanValuesFilm
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/speak-health"
            element={
              <SpeakHealth
                onMouseEnterSmall={handleMouseEnterRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/speak-health2"
            element={
              <SpeakHealthDigital
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/speak-event"
            element={
              <SpeakEvent
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/vijay-sales2"
            element={
              <VijaySales2
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/vijay-sales"
            element={
              <VijaySales
                onMouseEnterSmall={handleMouseEnterRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/aym-syntex-brochure"
            element={
              <AymSyntexBrochure
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/rsbl-calendar"
            element={
              <RsblCalendar
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/aym-syntex-annual-report"
            element={
              <AymSyntexAnnualReport
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/vardhman"
            element={
              <Vardhman
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/vardhman2"
            element={
              <Vardhmaan
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/aym-syntex"
            element={
              <AymSyntex
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/continuum-india"
            element={
              <ContinuumIndia
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/goodricke"
            element={
              <Goodricke
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/256grays"
            element={
              <Grays256
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/I2M"
            element={
              <I2M
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/local2030"
            element={
              <Local2030
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/malik-architecture"
            element={
              <MalikArchitecture
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/nagarkot-logistics"
            element={
              <NagarkotLogistics
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/texprocil"
            element={
              <Texprocile
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />

          <Route
            path="/creative-memoria"
            element={
              <CreativeMemoria
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/dabur"
            element={
              <Dabur
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/speed-of-sound"
            element={
              <SpeedOfSound
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/sunpharma"
            element={
              <Sunpharma
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/advance-solution"
            element={
              <AdvanceSolution
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/icici-pension-fund"
            element={
              <IciciPensionFund
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/icici-prudential"
            element={
              <IciciPrudential
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/jindal-SAW"
            element={
              <JindalSAW
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/one-gaming-arcade"
            element={
              <OneGamingArcade
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/mpuh"
            element={
              <PatelUrologyHospital
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/sky-greens"
            element={
              <SkyGreens
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/tiger"
            element={
              <Tiger
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/indusind"
            element={
              <IndusInd
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/about-us"
            element={
              <AboutUs
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/clients"
            element={
              <Clients
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route path="/careers" element={<Careers />} />
          <Route
            path="/elleyselectrics"
            element={
              <ElleysElectrics
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/Memoria"
            element={
              <Memoria
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/welspunGroup"
            element={
              <WelspunGroup
                onMouseEnterSmall={handleMouseEnterRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/welspunCSR"
            element={
              <WelspunCSR
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/welpsunGroupCorpFilm"
            element={
              <WelspunGroupCorpFilm
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
          <Route
            path="/welspunBKG"
            element={
              <WelspunBKG
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                // onMouseEnterSmall={handleMouseEnterRedSmall}
                // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/iciciprudential"
            element={
              <ICICIPrudential
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/mcdowell"
            element={
              <McDowellNo1
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/alkem-ar-filters"
            element={
              <AlkemArFilters
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/amazon-sambhav"
            element={
              <AmazonSambav
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/commercial"
            element={
              <Commercial
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/loreal-matrix"
            element={
              <LorealMatrix
              // onMouseEnterSmall={handleMouseEnterRedSmall}
              // onMouseLeaveSmall={handleMouseLeaveRedSmall}
              />
            }
          />
          <Route
            path="/our-work"
            element={
              <OurWork
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                mouseEnterOnBlack={handleMouseEnterBlack}
                mouseLeaveOnBlack={handleMouseLeaveBlack}
              />
            }
          />
          <Route
            path="/contact-us"
            element={
              <ContactUs
                mouseEnterOnRed={handleMouseEnterRed}
                mouseLeaveOnRed={handleMouseLeaveRed}
              />
            }
          />
        </Routes>
        <Footer
          mouseEnterOnRed={handleMouseEnterRed}
          mouseLeaveOnRed={handleMouseLeaveRed}
          mouseEnterOnBlack={handleMouseEnterBlack}
          mouseLeaveOnBlack={handleMouseLeaveBlack}
          mouseEnterOnFooter={handleMouseEnterFooter}
          mouseLeaveOnFooter={handleMouseLeaveFooter}
        />
      </BrowserRouter>
    </main>
  );
}

export default App;
