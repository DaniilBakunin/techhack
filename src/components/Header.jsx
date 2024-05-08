import React from "react";
import Logo from "../img/Logo.svg";
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className="header">
      <div className="container container_header">
        <div className="container__header_flex">
          <Link to="/" title="MTS LIVE - вернутся на главную страницу" className="header__logo">
            <img src={Logo} />
          </Link>
          <div className="search">
            <input type="search" name="search" className="search__input" title="поисковая строка. Для поиска нажмите Enter" />
            <label for="search">Хакатон, доступность, МТС</label>
          </div>
          <div className="header__elements">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3.124 3.124c-.875.875-.94 1.747-1.07 3.491C2.02 7.067 2 7.534 2 8c0 .466.02.933.054 1.385.13 1.744.195 2.616 1.07 3.491s1.747.94 3.491 1.07C7.067 13.98 7.534 14 8 14c.466 0 .933-.02 1.385-.054 1.744-.13 2.616-.195 3.491-1.07s.94-1.747 1.07-3.491C13.98 8.933 14 8.466 14 8c0-.466-.02-.933-.054-1.385-.13-1.744-.195-2.616-1.07-3.491s-1.747-.94-3.491-1.07A18.735 18.735 0 0 0 8 2c-.466 0-.933.02-1.385.054-1.744.13-2.616.195-3.491 1.07Zm3.14 1.558A17.35 17.35 0 0 1 8 4.583c.548 0 1.095.038 1.641.089.276.025.676.06 1.028.376.285.255.404.581.48.945.04.197.072.427.072.674 0 .227-.027.443-.062.632-.073.397-.188.763-.502 1.04-.375.328-.82.35-1.125.364l-.158.008-.067.004h-.645c-.02.152-.124.619-.682.619-.468 0-.756-.386-.701-.82.032-.256.113-.564.36-.825.251-.264.562-.358.815-.403.23-.041.513-.056.802-.07l.086-.005c.103-.005.207-.01.31-.021a2.5 2.5 0 0 0 .069-.523c0-.164-.03-.325-.066-.484-.067-.01-.134-.016-.2-.022l-.018-.002A15.46 15.46 0 0 0 8 6.084c-.582 0-1.172.047-1.581.09a.171.171 0 0 0-.036.008.185.185 0 0 1-.042.008.75.75 0 1 1-1.439-.408 1.41 1.41 0 0 1 .21-.476c.079-.115.178-.21.251-.273.073-.063.183-.147.309-.207.188-.09.386-.123.591-.144Zm2.636 6.25a.9.9 0 1 0-1.8 0 .9.9 0 0 0 1.8 0Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Поддержка</span>
            </a>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 8"
                class="CoreLayoutLocationButton_icon__XrVWK CoreLayoutLocationButton_geoIcon__8_vId"
              >
                <path
                  fill="currentColor"
                  d="M6.731.145a.889.889 0 0 1 1.125 1.124L5.847 7.295a.889.889 0 0 1-1.605.176L2.965 5.343a.89.89 0 0 0-.305-.305L.53 3.758a.889.889 0 0 1 .176-1.605L6.731.145z"
                ></path>
              </svg>
              <span className="header__city">Санк-Петербург</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="CoreLayoutLocationButton_icon__XrVWK CoreLayoutLocationButton_triangleIcon__Agacp"
              >
                <path
                  fill="currentColor"
                  d="M8.78 10.024a1 1 0 0 1-1.56 0l-1.92-2.4A1 1 0 0 1 6.08 6h3.84a1 1 0 0 1 .78 1.625l-1.92 2.399Z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="header__button">
            <button>Войти</button>
          </div>{" "}
        </div>
        <div className="container__header_flex">
          <nav>
            <ul className="header__nav">
              <li className="header__link">
                <a href="#"><h2>Все события</h2></a>
              </li>
              <li className="header__link">
                <a href="#"><h2>МТС Live Холл</h2></a>
              </li>
              <li className="header__link header__link_main">
                <Link to='/'><h2>Концерты</h2></Link>
              </li>
              <li className="header__link">
                <a href="#"><h2>Театры</h2></a>
              </li>
              <li className="header__link">
                <a href="index.html"><h2>Доступные мероприятия</h2></a>
              </li>
              <li className="header__link">
                <a href="#"><h2>Стендап</h2></a>
              </li>
              <li className="header__link">
                <a href="#"><h2>Детям</h2></a>
              </li>
              <li className="header__link">
                <a href="#"><h2>Ещё</h2></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export {Header}