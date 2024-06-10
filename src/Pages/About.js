import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src="https://ociacc.com/wp-content/uploads/2019/03/blank-profile-picture-973460_1280-1030x1030.png"
              alt="Profile img"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-me">
            <h1>About Me</h1>
            <p>
              I am a dedicated and enthusiastic MERN Stack Developer, freshly
              graduated with a Bachelor of Engineering degree in Computer
              Science from Savitribai Phule Pune University. My academic journey
              has provided me with a solid foundation in software development,
              particularly in web technologies. Throughout my coursework and
              projects, I have developed a strong proficiency in the MERN stack:
              MongoDB, Express.js, React, and Node.js.
              <br />
              {/* <b>Skills and Expertise</b>
              <ul>
                <li>
                  <b>MongoDB:</b> Skilled in designing and managing NoSQL
                  databases, performing CRUD operations, and ensuring data
                  consistency.
                </li>
                <li>
                  <b>Express.js:</b> Experienced in building RESTful APIs,
                  handling middleware, and developing backend services.
                </li>
                <li>
                  <b>React:</b>
                  Proficient in creating dynamic and interactive user
                  interfaces, managing state with hooks and Redux, and
                  implementing responsive design principles.
                </li>
                <li>
                  Adept at server-side scripting, understanding asynchronous
                  programming, and building scalable server-side applications.{" "}
                </li>
              </ul> */}
            </p>
            <p>
            During my academic projects, I have successfully applied these skills to build several web applications, including a udemy-clone & ecommerce, which enhanced my problem-solving abilities and technical expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
