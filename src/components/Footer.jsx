import React from "react";
import heroimg from "../assets/images/hero-logo.png";
function footer() {
  return (
    <footer className=" bg-black overflow-hidden">
      <div className="container position-relative pt_46">
        <div className="ellipes_162 footer_right_ellipes d-none d-lg-block"> 
        </div>
        <div className="ellipes_162 footer_left_ellipes d-none d-lg-block"> 
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <img src={heroimg} alt="logo" />
            <p className="footer_pera pt-3 mb-0">
              En Exclusive Games somos un equipo apasionado de personas
              dedicadas al desarrollo de multiplataformas para juegos de azar
            </p>
            <div className=" d-flex gap_12 align-items-center pt_24">
              <div className="footer_svg_box d-flex justify-content-center align-items-center">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.92538 0.653451C10.5821 0.650931 11.2389 0.657531 11.8954 0.67325L12.07 0.67955C12.2716 0.68675 12.4705 0.69575 12.7108 0.706549C13.6684 0.751548 14.3217 0.902743 14.895 1.12504C15.489 1.35363 15.9894 1.66322 16.4898 2.1636C16.9473 2.61323 17.3014 3.15712 17.5274 3.75745C17.7497 4.33073 17.9009 4.985 17.9459 5.94257C17.9567 6.18196 17.9657 6.38176 17.9729 6.58335L17.9783 6.75794C17.9943 7.41419 18.0012 8.07063 17.999 8.72708L17.9999 9.39845V10.5774C18.0021 11.2342 17.9952 11.8909 17.9792 12.5474L17.9738 12.722C17.9666 12.9236 17.9576 13.1225 17.9468 13.3628C17.9018 14.3204 17.7488 14.9738 17.5274 15.547C17.3021 16.148 16.9479 16.6923 16.4898 17.1418C16.0397 17.5993 15.4956 17.9533 14.895 18.1795C14.3217 18.4017 13.6684 18.5529 12.7108 18.5979C12.4705 18.6087 12.2716 18.6177 12.07 18.6249L11.8954 18.6303C11.2389 18.6463 10.5821 18.6532 9.92538 18.651L9.254 18.6519H8.07594C7.4192 18.6542 6.76246 18.6473 6.10591 18.6312L5.93132 18.6258C5.71767 18.6181 5.50408 18.6091 5.29054 18.5988C4.33297 18.5538 3.67959 18.4008 3.10541 18.1795C2.50485 17.9539 1.96087 17.5997 1.51157 17.1418C1.05352 16.6921 0.699097 16.1478 0.473003 15.547C0.250711 14.9738 0.0995159 14.3204 0.0545174 13.3628C0.0444944 13.1493 0.0354946 12.9357 0.0275183 12.722L0.0230186 12.5474C0.00642639 11.8909 -0.00107416 11.2342 0.000519283 10.5774V8.72708C-0.0019925 8.07064 0.00460798 7.4142 0.0203187 6.75794L0.0266184 6.58335C0.0338182 6.38176 0.0428179 6.18196 0.0536175 5.94257C0.098616 4.9841 0.249811 4.33163 0.472103 3.75745C0.698331 3.15682 1.05345 2.61308 1.51247 2.1645C1.96146 1.70619 2.5051 1.35144 3.10541 1.12504C3.67959 0.902743 4.33207 0.751548 5.29054 0.706549L5.93132 0.67955L6.10591 0.67505C6.76215 0.658467 7.41859 0.650966 8.07504 0.652551L9.92538 0.653451ZM9.00021 5.1533C8.40399 5.14487 7.81203 5.25502 7.25875 5.47735C6.70547 5.69968 6.20189 6.02976 5.77728 6.4484C5.35268 6.86705 5.01551 7.36591 4.78538 7.91599C4.55524 8.46607 4.43673 9.05641 4.43673 9.65269C4.43673 10.249 4.55524 10.8393 4.78538 11.3894C5.01551 11.9395 5.35268 12.4383 5.77728 12.857C6.20189 13.2756 6.70547 13.6057 7.25875 13.828C7.81203 14.0504 8.40399 14.1605 9.00021 14.1521C10.1936 14.1521 11.3382 13.678 12.1821 12.8341C13.026 11.9902 13.5001 10.8457 13.5001 9.65224C13.5001 8.45881 13.026 7.31426 12.1821 6.47037C11.3382 5.62649 10.1936 5.1533 9.00021 5.1533ZM9.00021 6.95324C9.35886 6.94663 9.71522 7.01155 10.0485 7.14422C10.3818 7.27688 10.6853 7.47463 10.9412 7.7259C11.1972 7.97717 11.4006 8.27694 11.5394 8.60769C11.6783 8.93843 11.7498 9.29353 11.7499 9.65224C11.7499 10.0109 11.6785 10.3661 11.5398 10.6969C11.401 11.0276 11.1978 11.3275 10.9419 11.5788C10.686 11.8302 10.3826 12.028 10.0493 12.1608C9.7161 12.2936 9.35976 12.3586 9.00111 12.3522C8.28505 12.3522 7.59832 12.0677 7.09199 11.5614C6.58566 11.055 6.30121 10.3683 6.30121 9.65224C6.30121 8.93618 6.58566 8.24945 7.09199 7.74312C7.59832 7.23679 8.28505 6.95234 9.00111 6.95234L9.00021 6.95324ZM13.7251 3.80334C13.4347 3.81496 13.1601 3.93847 12.9588 4.14801C12.7575 4.35754 12.6451 4.63684 12.6451 4.92741C12.6451 5.21797 12.7575 5.49727 12.9588 5.7068C13.1601 5.91634 13.4347 6.03985 13.7251 6.05147C14.0234 6.05147 14.3096 5.93294 14.5205 5.72197C14.7315 5.511 14.85 5.22486 14.85 4.92651C14.85 4.62815 14.7315 4.34201 14.5205 4.13104C14.3096 3.92007 14.0234 3.80154 13.7251 3.80154V3.80334Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </div>
              <div className="footer_svg_box d-flex justify-content-center align-items-center">
                <svg
                  width="11"
                  height="21"
                  viewBox="0 0 11 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 12.1523H9.5L10.5 8.15234H7V6.15234C7 5.12234 7 4.15234 9 4.15234H10.5V0.792344C10.174 0.749344 8.943 0.652344 7.643 0.652344C4.928 0.652344 3 2.30934 3 5.35234V8.15234H0V12.1523H3V20.6523H7V12.1523Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </div>
              <div className="footer_svg_box d-flex justify-content-center align-items-center">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.14352 0C1.60247 0 1.08359 0.214928 0.701018 0.597502C0.318444 0.980076 0.103516 1.49896 0.103516 2.04C0.103516 2.58104 0.318444 3.09992 0.701018 3.4825C1.08359 3.86507 1.60247 4.08 2.14352 4.08C2.68456 4.08 3.20344 3.86507 3.58601 3.4825C3.96859 3.09992 4.18352 2.58104 4.18352 2.04C4.18352 1.49896 3.96859 0.980076 3.58601 0.597502C3.20344 0.214928 2.68456 0 2.14352 0ZM0.223516 5.76C0.19169 5.76 0.161167 5.77264 0.138663 5.79515C0.116158 5.81765 0.103516 5.84817 0.103516 5.88V18.36C0.103516 18.4262 0.157276 18.48 0.223516 18.48H4.06352C4.09534 18.48 4.12586 18.4674 4.14837 18.4449C4.17087 18.4223 4.18352 18.3918 4.18352 18.36V5.88C4.18352 5.84817 4.17087 5.81765 4.14837 5.79515C4.12586 5.77264 4.09534 5.76 4.06352 5.76H0.223516ZM6.46352 5.76C6.43169 5.76 6.40117 5.77264 6.37866 5.79515C6.35616 5.81765 6.34352 5.84817 6.34352 5.88V18.36C6.34352 18.4262 6.39728 18.48 6.46352 18.48H10.3035C10.3353 18.48 10.3659 18.4674 10.3884 18.4449C10.4109 18.4223 10.4235 18.3918 10.4235 18.36V11.64C10.4235 11.1626 10.6132 10.7048 10.9507 10.3672C11.2883 10.0296 11.7461 9.84 12.2235 9.84C12.7009 9.84 13.1587 10.0296 13.4963 10.3672C13.8339 10.7048 14.0235 11.1626 14.0235 11.64V18.36C14.0235 18.4262 14.0773 18.48 14.1435 18.48H17.9835C18.0153 18.48 18.0459 18.4674 18.0684 18.4449C18.0909 18.4223 18.1035 18.3918 18.1035 18.36V10.0848C18.1035 7.75488 16.0779 5.9328 13.7595 6.14304C13.0422 6.20834 12.3395 6.38586 11.6773 6.66912L10.4235 7.20672V5.88C10.4235 5.84817 10.4109 5.81765 10.3884 5.79515C10.3659 5.77264 10.3353 5.76 10.3035 5.76H6.46352Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-6 d-flex pt__24 justify_center">
            <ul className=" pt-2 d-flex flex-column gap_12">
              <li className="footer_heading">Menú principal</li>
              <li>
                <a href="" className="footer_text pt-3">
                  Hogar
                </a>
              </li>
              <li>
                <a href="" className="footer_text mt_12">
                  Misión
                </a>
              </li>
              <li>
                <a href="" className="footer_text mt_12">
                  Tragamonedas
                </a>
              </li>
              <li>
                <a href="" className="footer_text mt_12">
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a href="" className="footer_text mt_12">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-6 d-flex pt__24 justify_center">
            <ul className=" pt-2 d-flex flex-column gap_12">
              <li className="footer_heading">Atención al cliente</li>
              <li>
                <a href="" className="footer_text pt-3">
                  ¿Necesitas ayuda?
                </a>
              </li>
              <li>
                <a href="" className="footer_text mt_12">
                  política de privacidad
                </a>
              </li>
              <li>
                <a href="" className="footer_text mt_12">
                  Términos de servicios
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-6 d-flex pt__24 justify_center">
            <ul className=" pt-2 d-flex flex-column gap_12">
              <li className="footer_heading">Ponerse en contacto</li>
              <li>
                <a
                  href=""
                  className="footer_text  d-flex gap-2 align-items-center"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.668 3.33301H3.33464C2.41797 3.33301 1.6763 4.08301 1.6763 4.99967L1.66797 14.9997C1.66797 15.9163 2.41797 16.6663 3.33464 16.6663H16.668C17.5846 16.6663 18.3346 15.9163 18.3346 14.9997V4.99967C18.3346 4.08301 17.5846 3.33301 16.668 3.33301ZM16.3346 6.87467L10.443 10.558C10.1763 10.7247 9.8263 10.7247 9.55964 10.558L3.66797 6.87467C3.58441 6.82777 3.51123 6.76439 3.45288 6.68839C3.39452 6.61238 3.35219 6.52532 3.32845 6.43248C3.30471 6.33964 3.30005 6.24295 3.31477 6.14826C3.32948 6.05357 3.36325 5.96285 3.41404 5.88159C3.46482 5.80033 3.53157 5.73022 3.61024 5.6755C3.68891 5.62079 3.77786 5.5826 3.87171 5.56326C3.96557 5.54391 4.06237 5.54381 4.15626 5.56296C4.25016 5.58212 4.33919 5.62012 4.41797 5.67467L10.0013 9.16634L15.5846 5.67467C15.6634 5.62012 15.7524 5.58212 15.8463 5.56296C15.9402 5.54381 16.037 5.54391 16.1309 5.56326C16.2247 5.5826 16.3137 5.62079 16.3924 5.6755C16.471 5.73022 16.5378 5.80033 16.5886 5.88159C16.6394 5.96285 16.6731 6.05357 16.6878 6.14826C16.7025 6.24295 16.6979 6.33964 16.6742 6.43248C16.6504 6.52532 16.6081 6.61238 16.5497 6.68839C16.4914 6.76439 16.4182 6.82777 16.3346 6.87467Z"
                      fill="white"
                    />
                  </svg>
                  juegosexclusivos@gmail.com
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="footer_text mt_12 d-flex gap-2 align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 11.6833V14.63C15.5001 14.841 15.4202 15.0441 15.2763 15.1985C15.1325 15.3528 14.9355 15.4469 14.725 15.4617C14.3608 15.4867 14.0633 15.5 13.8333 15.5C6.46917 15.5 0.5 9.53083 0.5 2.16667C0.5 1.93667 0.5125 1.63917 0.538333 1.275C0.553102 1.06454 0.647151 0.867509 0.801503 0.723674C0.955855 0.579839 1.15902 0.499905 1.37 0.5H4.31667C4.42003 0.499896 4.51975 0.538216 4.59644 0.607517C4.67313 0.676818 4.72133 0.772152 4.73167 0.875C4.75083 1.06667 4.76833 1.21917 4.785 1.335C4.95061 2.49077 5.29 3.61486 5.79167 4.66917C5.87083 4.83583 5.81917 5.035 5.66917 5.14167L3.87083 6.42667C4.97038 8.98871 7.01212 11.0305 9.57417 12.13L10.8575 10.335C10.91 10.2617 10.9865 10.2091 11.0737 10.1864C11.161 10.1637 11.2535 10.1723 11.335 10.2108C12.3892 10.7116 13.513 11.0501 14.6683 11.215C14.7842 11.2317 14.9367 11.2492 15.1267 11.2683C15.2294 11.2789 15.3245 11.3271 15.3936 11.4038C15.4628 11.4805 15.5001 11.5801 15.5 11.6833Z"
                      fill="white"
                    />
                  </svg>
                  (101)342-7873
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="footer_line mt_40"></div>
      <div className="container">
        <p className="copyright_text mb-0 py_20">© Juegos exclusivos - Todos los derechos reservados 2024</p></div>
    </footer>
  );
}

export default footer;
