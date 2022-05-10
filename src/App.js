import React, { Fragment } from "react";
import "./App.css";
import Head from "./components/head/Head.js";
import Img from "./components/imgHead/Img";
import NewSletter from "./components/Newsletter/NewSletter";
import SkillS from "./components/Skills/SkillS";
import ServiceIn from "./components/Service/ServiceIn";
import BoxSkills from "./components/boxsSkills/BoxSkills";
import Company from "./components/Company/Company";
import Home from "./components/Home/Home";
import Social from "./components/social/Social";
import PF from "./components/portfolio/PF";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Fragment>
      <Head />
      <Img />
      <NewSletter />
      <SkillS />
      <ServiceIn />
      <BoxSkills />
      <Company />
      <Home />
      <Social />
      <PF />
      <Footer />
    </Fragment>
  );
}

export default App;
