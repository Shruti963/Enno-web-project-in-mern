// import React from 'react';
import "./About.css"
import about from "./images/about.png"
// import { IoCheckmarkDoneOutline } from "react-icons/io5";
import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    new PureCounter(); // Initializes PureCounter on component mount
  }, []);


  return (
    <section id="about">
      <div className="Head-title ">
        <span>About us</span>
        <h1>About</h1>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="videoText container">
        <div className="row gy-4">
          <div className="col-lg-6 about-img">
            <img src={about} className="img-fluid" alt="" />
            {/* <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a> */}
            <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="glightbox pulsating-play-btn"
            >
              <span className="sr-only">Play video</span>
            </a>

          </div>
          <div className="col-lg-6 about-text content aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul className="aboutText-list">
              {/* <li><i className="bi bi-check2-all"><IoCheckmarkDoneOutline /> </i><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li> */}

              <li><i className="bi bi-check2-all"> </i><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="bi bi-check2-all"> </i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="bi bi-check2-all"> </i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
        </div>
      </div>
      <div className="aboutCount container">
        <div className="row  py-5">
          <div className="col-lg-3 Clients">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">232</span>
            <p>Clients</p>
          </div>
          <div className="col-lg-3 Projects">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">521</span>
            <p>Projects</p>
          </div>
          <div className="col-lg-3 Hours-Of-Support">
            <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter">1453</span>
            <p>Hours Of Support</p>
          </div>
          <div className="col-lg-3 Workers">
            <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter">32</span>
            <p>Workers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
