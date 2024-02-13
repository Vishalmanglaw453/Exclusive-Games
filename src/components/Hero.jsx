import React from "react";
import heroimg from "../assets/images/hero-logo.png";
function Hero() {
  return (
    <div className="hero-bg-img vh_100">
      <div className=" py-24 navbox">
        <nav>
          <div className="container">
            <div className=" d-flex align-items-center justify-content-between">
              <div>
                <img className="cursel_pointer" src={heroimg} alt="heroimg" />
              </div>

              <label for="icon" class="icon">
                <span></span>
                <span></span>
                <span></span>
              </label>
              <input type="checkbox" id="icon" hidden />
              <ul className=" d-flex gap-28 align-items-center mobile-view">
                <li>
                  <a href="" className="nav_text">
                    Hogar
                  </a>
                </li>
                <li>
                  <a href="" className="nav_text">
                    Misión
                  </a>
                </li>
                <li>
                  <a href="" className="nav_text">
                    Tragamonedas
                  </a>
                </li>
                <li>
                  <a href="" className="nav_text">
                    Por qué elegirnos
                  </a>
                </li>
                <li>
                  <a href="" className="nav_text">
                    Ofertas
                  </a>
                </li>

                <div className="position-relative d-lg-none">
                  <button className="nav_btn   ">Acceso</button>
                  <div className="btn_svg">
                    <svg
                      width="106"
                      height="28"
                      viewBox="0 0 106 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1C1 15.3594 12.6406 27 27 27H105"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </ul>
              <div className="position-relative d_none">
                <button className="nav_btn position-relative z-1 d_none">Acceso</button>
                <div className="btn_svg">
                  <svg
                    width="106"
                    height="28"
                    viewBox="0 0 106 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1C1 15.3594 12.6406 27 27 27H105"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="pt_140">
        <div className=" d-flex flex-column align-items-center">
          <h2 className="hero_heading text-center mb-0 pb-3">
            Exclusive Games. Pasión por ganar
          </h2>
          <p className="heropera pb-5">
            En Exclusive Games somos un equipo apasionado de personas dedicados
            al desarrollo de multiplataformas para juegos de azar. A lo largo de
            nuestra vida consumimos todo tipo de juegos hasta que un día
            decidimos crear los propios.
          </p>
          <div className=" position-relative">
            <button className="empezar_btn position-relative z-1">Empezar</button>
            <div className="btn_svg">
              <svg
                width="107"
                height="28"
                viewBox="0 0 107 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1C1.5 15.3594 13.1406 27 27.5 27H105.5"
                  stroke="url(#paint0_linear_2685_11)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2685_11"
                    x1="134.466"
                    y1="25.6913"
                    x2="113.531"
                    y2="-37.3975"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#51C8EF" />
                    <stop offset="1" stop-color="#7AF57A" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
