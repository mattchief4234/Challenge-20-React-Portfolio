import React from "react";
import MRV from "../../assets/small/MRV.JPG";
import EccommerceBackend from "../../assets/small/EccomerceBackend.JPG";
import NoteTaker from "../../assets/small/NoteTaker.JPG";


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/mattchief4234/Challenge-14-MRV">
                {" "}
                <img
                  src={MRV}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="MRC-challenge-14"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>MVC to create a BLOG</h4>
              <p>
                This is an example of some code that I made using a Model-View-Controller to create a Tech
                Blog. I wrote a simple web app that allows me to create a blog post, and then publish it for others 
                to view and comment on.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/mattchief4234/Week-13-Ecomerce-BackEnd-YEA">
                {" "}
                <img
                  src={EccommerceBackend}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Ecommerce-Backend"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Ecommerce Backend</h4>
              <p>
                This is a simple server that you can communicate to using the terminal. It is an Ecomnmerce Backend
                so you can add new items and goods to be sold, restock them as needed, or delete them outrite.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/mattchief4234/Note-Taker-Challenge-11">
                {" "}
                <img
                  src={NoteTaker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note-Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taking Challenge</h4>
              <p>
                This is a simple website that can be used to take some notes and delete old notes. I really liked making this one.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;