import React from "react";
import "./Project.css";
import udemy from "../assests/images/udemy.JPG";
import ecommerceWeb from "../assests/images/ecommerce-web.JPG"

const Project = () => {
  return (
    <>
      <div className="container project">
        <h2 className="col-12 text-center">Top Recent Projects</h2>
        <hr />
        <p className="text-center">
          here are my top recent project with live links and source code
        </p>
        <div className="row " id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={udemy} alt="Project img" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body m-auto ">
                    <div className="ad-title">
                        <h5 className="text-uppercase text-center">udemy clone website</h5>
                    </div>
                    <a className="ad-btn " href="https://calm-kangaroo-5aab54.netlify.app/">View</a>
                    <a className="ad-btn" href="https://github.com/rushikesh39/udemy-client"> Source code</a>
              </div>

            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={ecommerceWeb} alt="Project img" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body m-auto ">
                    <div className="ad-title">
                        <h5 className="text-uppercase text-center">E-commerce website</h5>
                    </div>
                    <a className="ad-btn " href="https://shopeswift.netlify.app/">View</a>
                    <a className="ad-btn" href="https://github.com/rushikesh39/E-commerce-client"> Source code</a>
              </div>

            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Mobile App</span>
                <img src={udemy} alt="Project img" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">React Native Expo</span>
                <span className="card-detail-badge">Android</span>
               
              </div>
              <div className="card-body m-auto ">
                    <div className="ad-title">
                        <h5 className="text-uppercase text-center">E- commerce app</h5>
                    </div>
                    <button className="ad-btn disable" disabled href="">View</button>
                    <a className="ad-btn" href="https://github.com/rushikesh39/e-commerce-app"> Source code</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
