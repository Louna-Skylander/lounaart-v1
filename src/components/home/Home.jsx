/* ============================================================================ */
/*                                    IMPORT                                    */  
/* ============================================================================ */

import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "./home.css";
import Socials from "./Socials";
import Me from "../../assets/me.jpg";

const Home = () => {
  return (
    <section className="home container" id="home">
        <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Jane Doe</h1>

            <div className="home__typewriter">
                <TypeWriterEffect className="typewriter" textStyle={{
                        fontFamily: "Poppins",
                        color: "var(--light-color)",
                        fontWeight: "300",
                        fontSize: "1.5rem",
                        display: "flex",
                        justifyContent: "center",
                        letterSpacing: "0.05rem",
                    }}
                startDelay={2000}
                cursorColor="var(--main-color)"
                multiText={[
                    `- Artist -`,
                    `- Designer -`,
                    `- Programmer -`,
                ]}
                multiTextDelay={2000}
                typeSpeed={30}
                multiTextLoop />
            </div>

            <Socials />
        </div>
    </section>
  );
};

/* ============================================================================ */
/*                                  EXPORT                                      */
/* ============================================================================ */

export default Home;
