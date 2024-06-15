import React from "react";
import "./style.css";
import { useWindowWidth } from "../../breakpoints";

export const Modeling = ({
  className,
  model,
  modelingwrapper,
  modeling1,
  paragraphgroup,
  whenapositive,
  img,
  equation
}) => {
  const screenWidth = useWindowWidth();
  return (
    <>
    { screenWidth > 700 && (
      <div className={`modeling ${className}`}>
        <img src="https://c.animaapp.com/Q3ROovgs/img/hover-model-1-1.png" className={`img ${img}`} alt="loading..." />
        <div className="text-content">
          <div className={`MODELING ${modeling1}`}>-modeling-</div>
          <p className={`when-a-positive ${whenapositive}`}>
            When A Positive Voltage Is Applied To Any Motor A Positive Thrust Force Is Generated And This Causes The
            Corresponding propeller Assembly To Rise. The Thrust Force Generated By The Front, Back, Right, And Left
            Motors Are Denoted By Ff , Fb, fr, And Fl, Respectively. The Thrust Forces Generated By The Front And Back
            Motors Primarily Control The Motions About the Roll Axis While The Right And Left Motors Primarily Move The
            Hover About Its Pitch Axis.
          </p>
          <p className={`the-model-equation ${equation}`}>
            <u>The Model Equation for each Joint:</u> <br />J &#952;’’ = (F1-F2)*L - b &#952;’ + mgr * sin &#952;
          </p>
        </div>
      </div>
    )}
{
  screenWidth < 700 && (
    <div className={`modeling7 ${className}`}>
      <div className={`MODELING7 ${modeling1}`}>-modeling-</div>
      <img src="https://c.animaapp.com/Q3ROovgs/img/hover-model-1-1.png" className={`img7 ${img}`} alt="loading..." />
      <p className={`when-a-positive7 ${whenapositive}`}>
        When A Positive Voltage Is Applied To Any Motor A Positive Thrust Force Is Generated And This Causes The
        Corresponding propeller Assembly To Rise. The Thrust Force Generated By The Front, Back, Right, And Left
        Motors Are Denoted By Ff , Fb, fr, And Fl, Respectively. The Thrust Forces Generated By The Front And Back
        Motors Primarily Control The Motions About the Roll Axis While The Right And Left Motors Primarily Move The
        Hover About Its Pitch Axis.
      </p>
      <p className={`the-model-equation7 ${equation}`}>
        <u>The Model Equation for each Joint:</u> <br />J &#952;’’ = (F1-F2)*L - b &#952;’ + mgr * sin &#952;
      </p>
    </div>
  )
}
</>      
  );
};
