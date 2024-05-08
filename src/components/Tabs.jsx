import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const tickets = [
        { name: 'Ряды 1–2 (центр)', quantity: 21, price: 6000 },
        { name: 'Ряды 3–4 (центр)', quantity: 34, price: 5500 },
        { name: 'Ряды 2–4 (слева)', quantity: 22, price: 4500 },
        { name: 'Ряды 5–13 (центр)', quantity: 30, price: 2450 },
        { name: 'Ряды 5–13 (с краю), ряды 14–23 (центр)', quantity: 213, price: 2150 },
        { name: 'Ряды 14–33 (с краю), ряд 24–33 (центр)', quantity: 146, price: 1950 },
    ];

    return (
        <div className='tabs__container'>
            <div>
                <button onClick={() => handleTabChange(0)} className={activeTab === 0 ? 'active scheme' : 'scheme'}>
                    Схема зала
                </button>
                <button onClick={() => handleTabChange(1)} className={activeTab === 1 ? 'active scheme' : 'scheme'}>
                    Доступные билеты
                </button>
            </div>
            <div>
                {activeTab === 0 && <img src='./img/scheme.jpg' alt="Схема зала" />}
                {activeTab === 1 && (
                    <div className='access__block _first'>
                        <p className='access_title'>Партер</p>
                        {tickets.map((ticket, index) => (
                            <a key={index} className='access__element' role="link" tabIndex="0" aria-label={`Выбрать место ${ticket.name}`}>
                                <div className='access__link'>
                                    <div>
                                        <p>{ticket.name}</p>
                                        <p>Свободных мест: {ticket.quantity}</p>
                                        <img className='access__arrow' src='./img/icons/arrow_right.svg'/>
                                    </div>
                                </div>
                                <p className='ticket__price'>{ticket.price}₽</p>
                                <button className='access__buy' aria-label={`Купить билет ${ticket.name}`}>Купить лучший билет</button>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;