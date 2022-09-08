import React from "react";
import Carousel from "react-multi-carousel";
import "./Skills.css"
export default function Skills() {
  return (
    <div className="container c">
        <br/>
      <br/>
        <h1 align='center'>Skills</h1><br/>
   
      <div id="skills">
        <div className="row">
          <div className="col-sm-6 col-12 ">
            <h3>
                Web Developpment
            </h3>
       
       <ul>
       <div className="row">
        <div className="col-6">
        <li className="n">
          HTML5
        </li>
        <li className="n">
          CSS3
        </li>
        <li className="n">
          Javascript
        </li>
        <li className="n">
          AJAX
        </li>
        <li className="n">
          jQuery
        </li>
        <li className="n">
        Bootstrap
        </li>
        <li className="n">
        XML
        </li>
        </div>
        <div className="col-6">
        <li className="n">
          Reactjs
        </li>
        <li className="n">
          Angular
        </li>
        <li className="n">
          Spring Boot
        </li>
        <li className="n">
         ASP.net
        </li>
        <li className="n">
        ASP.net Core
        </li>
        <li className="n">
        PHP
        </li>
        <li className="n">
        Ruby on rails
        </li>
        
        </div>
        </div>
       </ul>
          </div>
          <div className="col-sm-6 col-12 d"></div>
        </div>
      </div>
    </div>
  );
}
