import React, { useRef } from 'react';
import Tabs from './Tabs';

const Page = () => {
  const tabsContainerRef = useRef(null);

  const handleButtonClick = () => {
    tabsContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='container page'>
      <div className='page__header'>
        <img src='../img/Polnalyubvi.jpg' alt="Концерт Polnalyubvi" />
        <div className='page__title'>
          <h1> Концерт Polnalyubvi </h1>
          <p> Зелёный театр ВДНХ </p>
          <div>
            <p>Open Air</p>
            <p>12+</p>
            <p className='title__access_icon'> <img src='./img/icons/access.svg' /> </p>
          </div>
          <button className='ticket__buy' onClick={handleButtonClick} aria-label='Купить билет на концерт Polnalyubvi'> Купить билет </button>
        </div>
      </div>
      <div className='page__main'>
        <h2> Расписание </h2>
        <button className='page__date'>
          <span>19 июля, пт</span>
          <span>20:00</span>
        </button>
        <div className='page__text'>
          <p>Polnalyubvi</p>
          <p>19 июля 2024 • пт • 20:00 , Зеленый театр ВДНХ</p>
        </div>
        <div className='tabs__container' ref={tabsContainerRef}>
          <Tabs />
        </div>
        <div className='page_description'>
          <h3> Описание </h3>
          <p> Известна своим уникальным подходом к музыке и перформансу. Каждый концерт — это сочетание живой музыки, художественных образов и глубоких текстов, обещающих зрителям не только слушать, но и видеть и чувствовать каждую ноту и слово </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-PWCXLoC5NA?si=_4DjQVsxExXyEJ7t" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </main>
  );
};

export default Page;