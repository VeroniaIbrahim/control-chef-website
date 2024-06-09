import React, { useState, useRef, useEffect } from "react";
import { useWindowWidth } from "../../breakpoints";
import { useLocation } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { NavBar_2 } from "../../components/NavBar_2";
import { About } from "../../components/About/About";
import { HowItWorks } from "../../components/HowItWorks/HowItWorks";
import { Modeling } from "../../components/Modeling/Modeling";
import { Next } from "../../components/Next/Next";
import { BlockDiagram } from "../../components/BlockDiagram";
import { Amplify } from "aws-amplify";
import awsConfig from "../../aws-export";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./style.css";

Amplify.configure(awsConfig);

export const HoverDoccomponent = () => {
  const location = useLocation();
  const screenWidth = useWindowWidth();
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      // Scroll to the top of the page when the route changes to "/"
      window.scrollTo(0, 0);
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  }, [location.pathname]);
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <div className="hoverdoc"
            style={{
              width: { screenWidth }
            }}
          >
            {screenWidth >= 834 && screenWidth < 1300 && (
              <>
                <NavBar_2
                  onclick={signOut}
                  className="nav-bar-tab" />
                <About className="about1"
                  theDOFhover="textdof"
                  theDOFhoverwrapper="boxdof"
                  abouttheDOF="titleabout"
                  img="hoverimg" />
                <HowItWorks
                  className="howitwork1"
                  HowItWorksbox="howitworksbox1"
                  HowItWorkstext="howtext"
                  thedegreeof="thedof" />
                <Modeling
                  className="modeling1"
                  model="model1"
                  modelingwrapper="modelingwrapper1"
                  Modeling1="mod1"
                  paragraphgroup="paragraph1"
                  whenapositive="positive1"
                  img="imgmodel1"
                  equation="equation1" />
                <BlockDiagram
                  className="blockdiagram1"
                  imgblockdiagram="imgbd1" />
                <Next navigate="navi1"
                  next="next1"
                  back="back1"
                  linkTo1="/hover-simulation" />
                <Footer
                  className="footer1"
                  group="groupfooter1"
                  group2="group2footer1"
                  controlchefhigh="controlcheifhighfooter1"
                  maskgroup="maskgroupfooter1"
                  group7="group7footer1"
                  textwrapper="textwrapperfooter1"
                  textwrapper2="textwrapper2footer1"
                  textwrapper3="textwrapper3footer1"
                  textwrapper4="textwrapper4footer1"
                  textwrapper5="textwrapper5footer1"
                  group8="group8footer1"
                  group9="group9footer1"
                  group10="group10footer1"
                  copyright="copyrightfooter1"
                />
                <div style={{ height: 0 }}></div>
              </>
            )}

            {screenWidth >= 1300 && (
              <>
                <NavBar
                  onclick={signOut}
                  className="navbardoc"
                />
                <About className="about" />
                <HowItWorks className="howitwork" />
                <Modeling className="modeling" />
                <BlockDiagram className="blockdiagram" />
                <Next navigate="navigate"
                  linkTo1="/hover-simulation"
                  back="backop" 
                />
                <Footer className="footerdoc" />
                <div style={{ height: 0 }}></div>
              </>
            )}

            {screenWidth < 834 && (
              <>
                <NavBar_2
                  onclick={signOut}
                  className="nav-bar-tab-instance"
                  controltotal1="logo1"
                  navbarclassName="nav-bar1"
                  controlchef1="nav-bar2"
                  controlchef2="nav-bar3"
                  controlchef3="nav-bar4"
                  navbardrop="nav-bar5"
                  navbartext="nav-bar6"
                  dropdowncontentexperiments="nav72"
                  dropdowncontenttheories="nav82"
                />
                <About
                  className="about20"
                  theDOFhoverwrapper="about21"
                  theDOFhover="about22"
                  aboutwrapper="about23"
                  abouttheDOF="about24"
                  img="about25" />
                <HowItWorks
                  className="howitwork20"
                  thedegreeof="howitwork21"
                  HowItWorksbox="howitwork22"
                  HowItWorkstext="howitwork23"
                />
                <Modeling
                  className="modeling20"
                  model="modeling21"
                  modelingwrapper="modeling22"
                  modeling1="modeling23"
                  paragraphgroup="modeling24"
                  whenapositive="modeling25"
                  equation="modeling26"
                  img="modeling27" />
                <BlockDiagram
                  className="blockdiagram20"
                  imgblockdiagram="blockdiagram21" />
                <Next navigate="navigate2"
                  linkTo1="/hover-simulation"
                  back="backop2"
                  next="next2" />
                <Footer
                  className="footer5"
                  group="groupfooter"
                  group2="group2footer"
                  controlchefhigh="controlcheifhighfooter"
                  maskgroup="maskgroupfooter"
                  group7="group7footer"
                  buttonf="buttonfooter"
                  textwrapper="textwrapperfooter"
                  textwrapper2="textwrapper2footer"
                  textwrapper3="textwrapper3footer"
                  textwrapper4="textwrapper4footer"
                  textwrapper5="textwrapper5footer"
                  group8="group8footer"
                  group9="group9footer"
                  group10="group10footer"
                  copyright="copyrightfooter"
                />
                <div style={{ height: 0 }}></div>
              </>
            )}
          </div>
        </>
      )}
    </Authenticator>
  );
};

export const HoverDocumentation = withAuthenticator(HoverDoccomponent);
