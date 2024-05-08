import React from 'react';

const WeekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const ButtonGenerator = () => {
    const buttons = [];

    for (let i = 1; i <= 30; i++) {
        const dayIndex = (i - 1) % 7;
        const day = WeekDays[dayIndex];

        buttons.push(
            <button tabIndex='-1' className='calender_dates' key={i}>
                <p className='calender__date'>{i}</p>
                <p className='calender__day'>({day})</p>
            </button>
        );
    }

    return <div>{buttons}</div>;
};

export default ButtonGenerator;