import React from "react";
import Typical from "react-typical";
import Navbar from "./navbar/Navbar";
import "./Profile.css";


export default function Profile() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
  
    <div className="profile">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icone">
              <a href="https://facebook.com/nouhaila2001z/">
                <i className="fa fa-facebook-square"></i>
              </a> &nbsp;
              <a href="mailto:nouhailaziyane2901@gmail.com">
                <i className="fa fa-google-plus-square"></i>
              </a>&nbsp;
              <a href="https://www.instagram.com/nouhaila_ziyane/">
                <i className="fa fa-instagram"></i>
              </a>&nbsp;
              <a href="https://www.linkedin.com/in/nouhaila-ziyane2001/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="text">
              {""}
              Hi, I'm <span className="text-s">Nouhaila Ziyane!</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="text-p">
              {" "}
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Developer🥰",
                    1000,
                    "Full Stack Dev💻",
                    1000,
                    "Web Developer🌐",
                    1000,
                  ]}
                />
              </h1>
              <span className="amb">I just ❤️ coding and fixing bugs 😎</span>
            </span>
          </div><br/> 
          <div className="profile-options">
            <a href="#talk">
            <button className="btn btn-primary" href="#home">
              {""}
              Let's Talk{""}
            </button></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="cv.pdf" download="cv.pdf">
              <button className="btn btn-info">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-pic">
          <div className="background"></div>
        </div>
      </div>
    </div>
  );
}
