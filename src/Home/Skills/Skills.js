import React from "react";
import Carousel from "react-multi-carousel";
import "./Skills.css"
export default function Skills() {
  return (
    <div className="container c">
        <br/>
      <br/>
        <h1 align='center' id="skills">Skills</h1><br/>
   
      <div id="skills">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="row">
          <div className="col-sm-5 col-12 de ">
            <h3>
                Web Developpment
            </h3>
       <br/>
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
          <div className="col-sm-1"></div>
          <div className="col-sm-5 col-12" id="ds">
          <h3>
                Programming languages
            </h3><br/>
            <ul>
       <div className="row">
        <div className="col-6">
        <li className="n">
          Python
        </li>
        <li className="n">
          C
        </li>
        <li className="n">
          C++
        </li>
        <li className="n">
          C#
        </li>
       
        </div>
        <div className="col-6">
        <li className="n">
          Java
        </li>
        <li className="n">
          R
        </li>
        <li className="n">
          Ruby
        </li>
        <li className="n">
         PL/SQL
        </li>
        
        </div>
        </div>
       </ul>
          </div>
        </div>
    </div>
    <div class="carousel-item">
    <div className="row">
          <div className="col-sm-5 col-12" id="ds">
            <h3>
                SGBD
            </h3>
       <br/>
       <ul>
       <div className="row">
        <div className="col-6">
        <li className="n">
          MySQL
        </li>
        <li className="n">
          PostgreSQL
        </li>
        
        </div>
        <div className="col-6">
        <li className="n">
          Oracle
        </li>
        <li className="n">
          MongoDB
        </li>
        
        </div>
        </div>
       </ul>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-5 col-12 de" >
          <h3>
                Modélisation
            </h3><br/>
            <ul>
       <div className="row">
        <div className="col-6">
        <li className="n">
          Python
        </li>
        <li className="n">
          C
        </li>
        <li className="n">
          C++
        </li>
        <li className="n">
          C#
        </li>
       
        </div>
        <div className="col-6">
        <li className="n">
          Java
        </li>
        <li className="n">
          R
        </li>
        <li className="n">
          Ruby
        </li>
        <li className="n">
         PL/SQL
        </li>
        
        </div>
        </div>
       </ul>
          </div>
        </div>
    </div>
    <div class="carousel-item">
      hoo
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>


      </div>
   
  );
}
