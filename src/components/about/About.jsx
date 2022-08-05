/* ============================================================================ */
/*                                    IMPORT                                    */  
/* ============================================================================ */

import React from "react";
import "./about.css";
import Image from "../../assets/about-me.jpg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About</h2>

      <div className="about__container grid">
        <div className="about__card">
          <img src={Image} alt="My portrait" className="about__img" />
        </div>

        <div className="about__content grid">
          <div className="about__info">
            <h1>Jane Doe</h1>
            <h5>aka J.D.</h5>
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              odit facere molestiae dolore atque a dignissimos, eaque, minus
              deserunt repellat voluptas veritatis maiores ipsum! Veniam.
            </p>
          </div>

          <div className="about__skills grid">
            <div className="skills__title">Skills</div>

            <ul className="skills__list">
              <li className="skills__item">Photoshop</li>
              <li className="skills__item">Illustrator</li>
              <li className="skills__item">ProCreate</li>
              <li className="skills__item">HTML</li>
              <li className="skills__item">CSS</li>
              <li className="skills__item">JavaScript</li>
              <li className="skills__item">ReactJS</li>
              <li className="skills__item">Figma</li>
              <li className="skills__item">InkScape</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================ */
/*                                  EXPORT                                      */
/* ============================================================================ */

export default About;
