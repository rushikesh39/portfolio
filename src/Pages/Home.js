import React from "react";
import Resume from "../assests/docs/Resume.pdf"
import Typewriter from "typewriter-effect";
import "./Home.css";
const Home = () => {
  return (
    <>
    
      <div className="container-fluid">
        <div className="container home-container">
          <h2>Hi I'm a </h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Devloper!",
                  "MERN Stack Devloper! ",
                  "Full Stack Java Devloper!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
              <button className="btn btn-hire">Hire Me</button>
              <a className="btn btn-cv" href={Resume} download={"resume.pdf"}>My Resume</a>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
