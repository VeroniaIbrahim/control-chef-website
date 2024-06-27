import React, { useState, useEffect } from "react";
import { useWindowWidth } from "../../breakpoints";
import { useLocation } from "react-router-dom";
import { ButtonsSim } from "../../components/ButtonsSim";
import { Footer } from "../../components/Footer";
import { Graphsim } from "../../components/Graphsim";
import { Results } from "../../components/Results/Results";
import { NavBar } from "../../components/NavBar";
import { NavBar_2 } from "../../components/NavBar_2";
import { Next } from "../../components/Next/Next";
import { Parametersim } from "../../components/Parametersim";
import { Parametersnewand } from "../../components/Parametersnewand";
import { SimulationStreaming } from "../../components/SimulationStreaming";
import { Amplify } from "aws-amplify";
import awsConfig from "../../aws-export";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./style.css";
import { simulate } from "../../components/2DOF_Model";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsConfig);

export const HoverSimcomponent = () => {
  const location = useLocation();
  const screenWidth = useWindowWidth();
  const [scrollToTop, setScrollToTop] = useState(false);
  const [isCriteriaMet, setIsCriteriaMet] = useState(false); // State to track if criteria are met
<<<<<<< HEAD
=======

  const [Xovershoot, setXovershoot] = useState(0);
  const [Yovershoot, setYovershoot] = useState(0);
  const [XError, setXError] = useState(0);
  const [YError, setYError] = useState(0);
  const [xtime, setXtime] = useState(0);
  const [ytime, setYtime] = useState(0);
>>>>>>> main

  useEffect(() => {
    if (location.pathname === "/") {
      // Scroll to the top of the page when the route changes to "/"
      window.scrollTo(0, 0);
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  }, [location.pathname]);
<<<<<<< HEAD
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
    setIsCriteriaMet(false);
  }, []); // Empty dependency array ensures this effect runs only once
=======
>>>>>>> main


  const [SimulationPoints, setSimulationPoints] = useState(null);
  const [Simulation, setSimulation] = useState(null);
  const [ParameterData, setParameterData] = useState(null);

  const GraphAndSimulate = () => {
<<<<<<< HEAD
    const Sim = simulate(ParameterData);
    console.log("Points:", SimulationPoints);
    setSimulationPoints(Sim);
    // Calculate overshoot
    const Xovershoot = calculateOvershoot(Sim.XPos,ParameterData.xposSet);
    const Yovershoot = calculateOvershoot(Sim.YPos,ParameterData.yposSet);
    const XError = Math.abs(ParameterData.xposSet-(Sim.XPos[1999]));
    const YError = Math.abs(ParameterData.yposSet-(Sim.YPos[1999]));
    console.log(Xovershoot);
    console.log(Yovershoot);
    // Check if overshoot is less than 0.1
    if(XError < 0.01 && YError<0.01){
    if (Math.abs(Xovershoot) < 0.03 && Math.abs(Yovershoot) < 0.03) {
      // Calculate variance
      const Xvariance = calculateVariance(Sim.XPos,ParameterData.xposSet);
      const Yvariance = calculateVariance(Sim.YPos,ParameterData.yposSet);
      console.log(Xvariance);
      console.log(Yvariance);
      // Check if variance is less than 0.1
      if (Xvariance < 0.1 && Yvariance < 0.1) {
        setIsCriteriaMet(true); // Set criteria met
        
      } else {
        setIsCriteriaMet(false); // Reset criteria met
        alert("Variance criterion not met. Adjust PID parameters.");
      }
    } else {
      setIsCriteriaMet(false); // Reset criteria met
      alert("Overshoot criterion not met. Adjust PID parameters.");
    }
  }else{
      setIsCriteriaMet(false); // Reset criteria met
      alert("Steady State Error Too Big criterion not met. Adjust PID parameters.");
  }

=======
    try {
      const Sim = simulate(ParameterData);
      console.log("Points:", Sim);
      setSimulationPoints(Sim);
      console.log("Sim:", Sim);
  
    // Calculate overshoot
    const XovershootResult = calculateOvershoot(Sim.XPos, ParameterData.xposSet);
    const YovershootResult = calculateOvershoot(Sim.YPos, ParameterData.yposSet);
  
    // Calculate errors
    const newXError = Math.abs(ParameterData.xposSet - Sim.XPos[1999]);
    const newYError = Math.abs(ParameterData.yposSet - Sim.YPos[1999]);
  
    // Calculate times
    const newXtime = XovershootResult.indexOfFirstZeroCrossing * 0.005;
    const newYtime = YovershootResult.indexOfFirstZeroCrossing * 0.005;
  
    // Set state with calculated values
    setXovershoot(XovershootResult.overshoot);
    setYovershoot(YovershootResult.overshoot);
    setXError(newXError);
    setYError(newYError);
    setXtime(newXtime);
    setYtime(newYtime);
  
    console.log("XovershootResult:", XovershootResult);
    console.log("YovershootResult:", YovershootResult);
    console.log("XError:", newXError);
    console.log("YError:", newYError);
    console.log("xtime:", newXtime);
    console.log("ytime:", newYtime);
  
    // Check if overshoot is less than 0.1
    if (newXError < 0.01 && newYError < 0.01) {
      if (Math.abs(XovershootResult.overshoot) < 0.03 && Math.abs(YovershootResult.overshoot) < 0.03) {
        // Calculate variance
        const Xvariance = calculateVariance(Sim.XPos, ParameterData.xposSet);
        const Yvariance = calculateVariance(Sim.YPos, ParameterData.yposSet);
  
        // Check if variance is less than 0.1
        if (Xvariance < 0.1 && Yvariance < 0.1) {
          setIsCriteriaMet(true); // Set criteria met
        } else {
          setIsCriteriaMet(false); // Reset criteria met
          alert("Variance criterion not met. Adjust PID parameters.");
          console.log(Xvariance);
          console.log(Yvariance);
        }
      } else {
        setIsCriteriaMet(false); // Reset criteria met
        alert("Overshoot criterion not met. Adjust PID parameters.");
        console.log(XovershootResult.overshoot);
        console.log(YovershootResult.overshoot);
      }
    } else {
      setIsCriteriaMet(false); // Reset criteria met
      alert("Steady State Error Too Big criterion not met. Adjust PID parameters.");
      console.log(newXError);
      console.log(newYError);
    }
    } catch (e) {
      const Sim = simulate(ParameterData);
      console.log("Points:", Sim);
      setSimulationPoints(Sim);
      console.log("Sim:", Sim);
  
    // Calculate overshoot
    const XovershootResult = calculateOvershoot(Sim.XPos, ParameterData.xposSet);
    const YovershootResult = calculateOvershoot(Sim.YPos, ParameterData.yposSet);
  
    // Calculate errors
    const newXError = Math.abs(ParameterData.xposSet - Sim.XPos[1999]);
    const newYError = Math.abs(ParameterData.yposSet - Sim.YPos[1999]);
  
    // Calculate times
    const newXtime = XovershootResult.indexOfFirstZeroCrossing * 0.005;
    const newYtime = YovershootResult.indexOfFirstZeroCrossing * 0.005;
  
    // Set state with calculated values
    setXovershoot(XovershootResult.overshoot);
    setYovershoot(YovershootResult.overshoot);
    setXError(newXError);
    setYError(newYError);
    setXtime(newXtime);
    setYtime(newYtime);
  
    console.log("XovershootResult:", XovershootResult);
    console.log("YovershootResult:", YovershootResult);
    console.log("XError:", newXError);
    console.log("YError:", newYError);
    console.log("xtime:", newXtime);
    console.log("ytime:", newYtime);
  
    // Check if overshoot is less than 0.1
    if (newXError < 0.01 && newYError < 0.01) {
      if (Math.abs(XovershootResult.overshoot) < 0.03 && Math.abs(YovershootResult.overshoot) < 0.03) {
        // Calculate variance
        const Xvariance = calculateVariance(Sim.XPos, ParameterData.xposSet);
        const Yvariance = calculateVariance(Sim.YPos, ParameterData.yposSet);
  
        // Check if variance is less than 0.1
        if (Xvariance < 0.1 && Yvariance < 0.1) {
          setIsCriteriaMet(true); // Set criteria met
        } else {
          setIsCriteriaMet(false); // Reset criteria met
          alert("Variance criterion not met. Adjust PID parameters.");
          console.log(Xvariance);
          console.log(Yvariance);
        }
      } else {
        setIsCriteriaMet(false); // Reset criteria met
        alert("Overshoot criterion not met. Adjust PID parameters.");
        console.log(XovershootResult.overshoot);
        console.log(YovershootResult.overshoot);
      }
    } else {
      setIsCriteriaMet(false); // Reset criteria met
      alert("Steady State Error Too Big criterion not met. Adjust PID parameters.");
      console.log(newXError);
      console.log(newYError);
    }
    }
  
    
>>>>>>> main
  };

  const destroygraph = () => {
    console.log(1);
    const destroy = 5;
    setSimulation(destroy);
  };

  // Function to calculate overshoot
<<<<<<< HEAD
  const calculateOvershoot = (simData,setp) => {
    // Find the direction of movement based on the sign of the first point
    const initialSign = Math.sign(simData[0]-setp);
  
    // Initialize variables to track the index of the first zero crossing and the extreme value after crossing
    let indexOfFirstZeroCrossing = -1;
    let extremeValueAfterCrossing = null;
  
    // Iterate through the data to find the first zero crossing
    for (let i = 1; i < simData.length; i++) {
      // Check if the current point crosses zero from the initial sign
      if (Math.sign(simData[i]-setp) !== initialSign) {
=======
  const calculateOvershoot = (simData, setp) => {
    // Find the direction of movement based on the sign of the first point
    const initialSign = Math.sign(simData[0] - setp);

    // Initialize variables to track the index of the first zero crossing and the extreme value after crossing
    let indexOfFirstZeroCrossing = -1;
    let extremeValueAfterCrossing = null;

    // Iterate through the data to find the first zero crossing
    for (let i = 1; i < simData.length; i++) {
      // Check if the current point crosses zero from the initial sign
      if (Math.sign(simData[i] - setp) !== initialSign) {
>>>>>>> main
        indexOfFirstZeroCrossing = i;
        break;
      }
    }
<<<<<<< HEAD
  
    // If no zero crossing is found, there's no overshoot
    if (indexOfFirstZeroCrossing === -1) return 0;
  
    // Determine whether to look for the maximum or minimum value after the zero crossing
    const lookForMaxValue = initialSign === 1; // If initial sign is positive, look for maximum value
  
=======

    // If no zero crossing is found, there's no overshoot
    if (indexOfFirstZeroCrossing === -1) {
      return { overshoot: 0, indexOfFirstZeroCrossing };
    }

    // Determine whether to look for the maximum or minimum value after the zero crossing
    const lookForMaxValue = initialSign === 1; // If initial sign is positive, look for maximum value

>>>>>>> main
    // Find the extreme value after the zero crossing
    for (let i = indexOfFirstZeroCrossing; i < simData.length; i++) {
      // If looking for maximum value, update extremeValueAfterCrossing if current value is greater
      if (lookForMaxValue && (extremeValueAfterCrossing === null || simData[i] > extremeValueAfterCrossing)) {
<<<<<<< HEAD
        extremeValueAfterCrossing = simData[i]-setp;
      }
      // If looking for minimum value, update extremeValueAfterCrossing if current value is lesser
      else if (!lookForMaxValue && (extremeValueAfterCrossing === null || simData[i] < extremeValueAfterCrossing)) {
        extremeValueAfterCrossing = simData[i]-setp;
      }
    }
  
    // Calculate the overshoot as the difference between the extreme value and the initial set point
    return Math.abs(extremeValueAfterCrossing);
  };
  
  

  // Function to calculate variance
  const calculateVariance = (simData,setp) => {
    // Find the direction of movement based on the sign of the first point
    const initialSign = Math.sign(simData[0]-setp);
  
    // Initialize variables to track the index of the first sign flip and the data after the flip
    let indexOfFirstSignFlip = -1;
    let dataAfterSignFlip = [];
  
    // Iterate through the data to find the first sign flip
    for (let i = 1; i < simData.length; i++) {
      // Check if the current point changes sign from the initial sign
      if (Math.sign(simData[i]-setp) !== initialSign) {
=======
        extremeValueAfterCrossing = simData[i] - setp;
      }
      // If looking for minimum value, update extremeValueAfterCrossing if current value is lesser
      else if (!lookForMaxValue && (extremeValueAfterCrossing === null || simData[i] < extremeValueAfterCrossing)) {
        extremeValueAfterCrossing = simData[i] - setp;
      }
    }

    // Calculate the overshoot as the difference between the extreme value and the initial set point
    return { overshoot: Math.abs(extremeValueAfterCrossing), indexOfFirstZeroCrossing };
  };

  // Function to calculate variance
  const calculateVariance = (simData, setp) => {
    // Find the direction of movement based on the sign of the first point
    const initialSign = Math.sign(simData[0] - setp);

    // Initialize variables to track the index of the first sign flip and the data after the flip
    let indexOfFirstSignFlip = -1;
    let dataAfterSignFlip = [];

    // Iterate through the data to find the first sign flip
    for (let i = 1; i < simData.length; i++) {
      // Check if the current point changes sign from the initial sign
      if (Math.sign(simData[i] - setp) !== initialSign) {
>>>>>>> main
        indexOfFirstSignFlip = i;
        dataAfterSignFlip = simData.slice(indexOfFirstSignFlip + 1);
        break;
      }
    }
<<<<<<< HEAD
  
    // If no sign flip is found, return 0 variance
    if (indexOfFirstSignFlip === -1) return 0;
  
    // Calculate the mean of the data after the sign flip
    const mean = dataAfterSignFlip.reduce((acc, val) => acc + val, 0) / dataAfterSignFlip.length;
  
    // Calculate the squared differences from the mean
    const squaredDifferences = dataAfterSignFlip.map((val) => (val - mean) ** 2);
  
    // Calculate the variance
    const variance = squaredDifferences.reduce((acc, val) => acc + val, 0) / dataAfterSignFlip.length;
  
    return variance;
  };
  
  
=======

    // If no sign flip is found, return 0 variance
    if (indexOfFirstSignFlip === -1) return 0;

    // Calculate the mean of the data after the sign flip
    const mean = dataAfterSignFlip.reduce((acc, val) => acc + val, 0) / dataAfterSignFlip.length;

    // Calculate the squared differences from the mean
    const squaredDifferences = dataAfterSignFlip.map((val) => (val - mean) ** 2);

    // Calculate the variance
    const variance = squaredDifferences.reduce((acc, val) => acc + val, 0) / dataAfterSignFlip.length;

    return variance;
  };


>>>>>>> main
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
<<<<<<< HEAD
    <div className="hoversim"
      style={{
        background: "linear-gradient(180deg, rgb(5, 5, 24) 0%, rgb(28.9, 26.25, 126) 100%)",
        height: screenWidth < 834
        ? "870px"
        : screenWidth >= 834 && screenWidth < 1300
          ? "1690px"
          : screenWidth >= 1300
            ? "2050px"
            : undefined,
        width: {screenWidth}
      }}
    >
      {screenWidth >= 834 && screenWidth < 1300 && (
        <>
          <Parametersim
            setParameterData={setParameterData}
            className="parameters-instance"
            rollgroup="rollgroup1"
            pitchgroup="pitchgroup1"
            plantgroup="plantimg1"
            arrow3="arrow1"
            arrow4="arrow1" />
          <SimulationStreaming
            title="Simulation of Hover"
            className="simulation-streaming-instance" />
          <ButtonsSim
            GraphAndSimulate={GraphAndSimulate}
            destroygraph={destroygraph}
            className="buttons-instance"
            startClassName="start1"
            stopClassName="stop1"
            setClassName="set1"
            resetClassName="reset1" />
          <Graphsim
            SimulationPoints={SimulationPoints}
            Simulation={Simulation}
            className="graphs-instance"
            divClassName1="graphs-16"
            groupClassName="instance-node"
            divClassName="graphs-5"
            groupClassName2="graphs-9"
            groupClassName4="graphs-12"
            rectangleClassName="graphs-2"
            divClassNameOverride="graphs-2"
            rectangleClassName1="graphs-2"
            rectangleClassNameOverride="graphs-2"
            xPosClassName="graphs-3"
            xVelClassName="graphs-3"
            yPosClassName="graphs-3"
            yVelClassName="graphs-3"
          />
          <NavBar_2
            onclick={signOut} 
            className="nav-bar-tab" />
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
          <Next
            navigate="nav1"
            next="next1"
            back="back1"
            linkTo1="/hover-realtime"
            linkTo2="/Hover-Documentation/"
            disable={!isCriteriaMet} // Disable Next button until criteria are met
          />
        </>
      )}

      {screenWidth >= 1300 && (
        <>
          <Footer className="footer-instance" />
          <Graphsim
            SimulationPoints={SimulationPoints}
            Simulation={Simulation}
            className="graphs-17" />
          <Parametersim
            setParameterData={setParameterData}
            className="parameters-2" />
          <SimulationStreaming
            title="Simulation of Hover"
            className="simulation-streaming-2" />
          <ButtonsSim
            className="SimulationPoints-2"
            GraphAndSimulate={GraphAndSimulate}
            destroygraph={destroygraph} />
          <NavBar
            onclick={signOut}
            className="nav-bar-instance2"
          />
          <Next
            navigate="nav"
            linkTo1="/hover-realtime"
            linkTo2="/Hover-Documentation/"
            disable={!isCriteriaMet} // Disable Next button until criteria are met
          />
        </>
      )}

      {screenWidth < 834 && (
        <>
          <Parametersnewand
            setParameterData={setParameterData}
            className="BlockDiagrams5"
          />
          <SimulationStreaming
            title="Simulation of Hover"
            className="simulation-streaming-3"
            simulationStreamingClassName="simulation-streaming-4"
          />
          <ButtonsSim
            GraphAndSimulate={GraphAndSimulate}
            destroygraph={destroygraph}
            className="buttons-3"
            resetClassName="buttons-9"
            setClassName="buttons-11"
            startClassName="buttons-90"
            stopClassName="buttons-6"
          />
          <Graphsim
            SimulationPoints={SimulationPoints}
            Simulation={Simulation}
            className="graphs-18"
            divClassName1="graphs-35"
            groupClassName="graphs-19"
            divClassName="graphs-24"
            groupClassName2="graphs-28"
            groupClassName4="graphs-31"
            rectangleClassName="graphs-20"
            divClassNameOverride="graphs-20"
            rectangleClassName1="graphs-20"
            rectangleClassNameOverride="graphs-20"
            xPosClassName="graphs-21"
            xVelClassName="graphs-21"
            yPosClassName="graphs-21"
            yVelClassName="graphs-21"
          />
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
            dropdowncontentexperiments="nav-bar7"
            dropdowncontenttheories="nav-bar8"
          />
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
          <Next
            navigate="nav2"
            next="next2"
            back="back2"
            linkTo1="/hover-realtime"
            linkTo2="/Hover-Documentation/"
            disable={!isCriteriaMet} // Disable Next button until criteria are met
          />
=======
          <div className="hoversim"
            style={{
              width: { screenWidth }
            }}
          >
            {screenWidth >= 834 && screenWidth < 1300 && (
              <>
                <NavBar_2
                  onclick={signOut}
                  className="nav-bar-tab" />
                <SimulationStreaming
                  title="Simulation of Hover"
                  className="simulation-streaming-instance" />
                <div className="input1300">
                <Parametersim
                  setParameterData={setParameterData}
                  className="parameters-instance"
                  rollgroup="rollgroup1"
                  pitchgroup="pitchgroup1"
                  plantgroup="plantimg1"
                  arrow3="arrow1"
                  arrow4="arrow1" 
                />
                <ButtonsSim
                  GraphAndSimulate={GraphAndSimulate}
                  destroygraph={destroygraph}
                  className="buttons-instance"
                  startClassName="button-wrap"
                 />
                </div>
                <Graphsim
                  SimulationPoints={SimulationPoints}
                  Simulation={Simulation}
                  className="graphs-instance"
                />
                <Results
                  className="Resultsmid"
                  steadyStateErrorPitch={XError}
                  overshootPitch={Xovershoot}
                  settlingTimePitch={xtime}
                  steadyStateErrorRoll={YError}
                  overshootRoll={Yovershoot}
                  settlingTimeRoll={ytime}
                  />
                <Next
                  navigate="nav1"
                  linkTo1="/hover-realtime"
                  linkTo2="/Hover-Documentation/"
                  disable={!isCriteriaMet} // Disable Next button until criteria are met
                />
                <Footer
                  className="footer1"
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
                <SimulationStreaming
                  title="Simulation of Hover"
                  className="simulation-streaming-2" />
                <div className="inputpb">
                <Parametersim
                  setParameterData={setParameterData}
                  className="parameters-2" />
                <ButtonsSim
                  className="SimulationPoints-2"
                  GraphAndSimulate={GraphAndSimulate}
                  destroygraph={destroygraph} />
                </div>  
                <Graphsim
                  SimulationPoints={SimulationPoints}
                  Simulation={Simulation}
                  className="graphs-17" />
                <Results
                  className="Results1300"
                  steadyStateErrorPitch={XError}
                  overshootPitch={Xovershoot}
                  settlingTimePitch={xtime}
                  steadyStateErrorRoll={YError}
                  overshootRoll={Yovershoot}
                  settlingTimeRoll={ytime}
                  />
                <Next
                  navigate="nav"
                  linkTo1="/hover-realtime"
                  linkTo2="/Hover-Documentation/"
                  disable={!isCriteriaMet} // Disable Next button until criteria are met
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
                  controlchef1="logo1-control"
                  navbardrop="nav-bar-drop"
                  dropdowncontentexperiments="drop-down-exp"
                  dropdowncontenttheories="drop-down-theory"
                  navbartext="nav-bar-text"
                />
                <SimulationStreaming
                  title="Simulation of Hover"
                  className="simulation-streaming-3"
                  simulationStreamingClassName="titlesize"
                />
                <Parametersnewand
                  setParameterData={setParameterData}
                  className="BlockDiagrams5"
                />
                <ButtonsSim
                  GraphAndSimulate={GraphAndSimulate}
                  destroygraph={destroygraph}
                  className="buttons-3"
                  startClassName="button-wrap3"
                />
                <Graphsim
                  SimulationPoints={SimulationPoints}
                  Simulation={Simulation}
                  className="graphs-18"
                  divClassName1="titlegraph"
                  xPosClassName="singlegraphtitle"
                  yPosClassName="singlegraphtitle"
                  xVelClassName="singlegraphtitle"
                  yVelClassName="singlegraphtitle"
                  rectangleClassName="graphsize"
                  groupClassName="graphsize-warp"
                />
                <Results
                  className="Results834"
                  steadyStateErrorPitch={XError}
                  overshootPitch={Xovershoot}
                  settlingTimePitch={xtime}
                  steadyStateErrorRoll={YError}
                  overshootRoll={Yovershoot}
                  settlingTimeRoll={ytime}
                  />
                <Next
                  navigate="nav2"
                  next="next2"
                  back="back2"
                  linkTo1="/hover-realtime"
                  linkTo2="/Hover-Documentation/"
                  disable={!isCriteriaMet} // Disable Next button until criteria are met
                />
                <Footer
                  className="footer5"
                  group="groupwrap"
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
>>>>>>> main
        </>
      )}
    </Authenticator>
  );
};

export const HoverSim = withAuthenticator(HoverSimcomponent);
