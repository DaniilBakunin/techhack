import React from 'react'


export default function Footer() {
  return (
    <footer className='footer '>
      <div className='container'>
        <div className='team'>
          <h4 tabIndex='-1'>
            Команда «Rangers of Accessibility»
          </h4>
          <div className='team__container'>
          <div className='teammate'>
              <img src='./img/team/Safenreiter.jpg' />
              <p>
                Сафенрейтер  Дмитрий
              </p>
              <span>
                Bakend-End Developer
              </span>
            </div>
            <div className='teammate'>
              <img src='./img/team/Sopov.jpg' />
              <p>
                Сопов Даниил
              </p>
              <span>
                UI/UX
              </span>
            </div>
            <div className='teammate'>
              <img src='./img/team/Anisimova.jpg' />
              <p>
                Анисимова Ксения
              </p>
              <span>
                Project Manager
              </span>
            </div>
            <div className='teammate'>
              <img src='./img/team/Bakunin.jpg' />
              <p>
                Бакунин Даниил
              </p>
              <span>
                Front-End Developer
              </span>
            </div>
            <div className='teammate'>
              <img src='./img/team/Susolyatina.jpg' />
              <p>
                Сысолятина Валерия
              </p>
              <span>
                Дизайнер
              </span>
            </div>

          </div>
        </div>
        <div className='footer__alert' tabIndex='-1'>
          "ВНИМАНИЕ: Это копия сайта MTS LIVE, созданная исключительно в презентационных целях в рамках участия в хакатоне TRUE TECH HACK. Все права на контент, дизайн и другие элементы сайта принадлежат правообладателю - компании MTS. Данная копия не является официальным ресурсом компании. <a href='https://live.mts.ru'>Оригинальный сайт</a>
        </div>
      </div>
    </footer>
  )
}
