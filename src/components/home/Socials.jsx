/* ============================================================================ */
/*                                    IMPORT                                    */  
/* ============================================================================ */

import React from "react";

import {
  FaLinkedinIn,
  FaGithubAlt,
  FaFigma,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Socials = () => {
  const linkedin = "https://www.linkedin.com/";
  const github = "https://github.com/";
  const figma = "https://www.figma.com/";
  const instagram = "https://www.instagram.com/";
  const tiktok = "https://www.tiktok.com/";

  return (
    <div className="socials">

      <a href={linkedin} className="social_icon">
        <FaLinkedinIn />
      </a>

      <a href={github} className="social_icon">
        <FaGithubAlt />
      </a>

      <a href={figma} className="social_icon">
        <FaFigma />
      </a>

      <a href={instagram} className="social_icon">
        <FaInstagram />
      </a>

      <a href={tiktok} className="social_icon">
        <FaTiktok />
      </a>
      
    </div>
  );
};

/* ============================================================================ */
/*                                  EXPORT                                      */
/* ============================================================================ */

export default Socials;
