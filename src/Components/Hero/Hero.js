import React from "react";
import "./Hero.css";
import arrow_btn from '../../Assets/arrow_btn.png'
import pause_icon from '../../Assets/pause_icon.png'
import play_icon from '../../Assets/play_icon.png'

const Hero = ({ heroData, setheroCount, setPlaystatus, playStatus, heroCount }) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData[heroCount].text1}</p>
        <p>{heroData[heroCount].text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt=""/>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => setheroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setheroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setheroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={() => setPlaystatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt=""/>
          <p>Seen the Video</p>
        </div>
      </div>
    </div>
  )
};

export default Hero;
