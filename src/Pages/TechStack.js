import React from "react";
import "./TechStack.css";
import { TechStackList } from "../utils/TechStackList";

const TechStack = () => {
  return (
    <>
      <div className="container tech-stack">
        <h2 className="col-12 text-center">Technologies Stack</h2>
        <hr />
        <p className="text-center">
          👉 including programming languages, frameworks, databases,front-end
          and back-end tools, and API's
        </p>
        <div className="row">
          {TechStackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                        <tech.icon className="tech-icon"/>
                        </div>
                       <div className="media-body ">
                        <h5>{tech.name}</h5>
                       </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
