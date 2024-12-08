import React, { useMemo } from 'react';
import './styles.css';
import DayRender from './day-render';

const Calendar = ({ selectedDate, currentDate, orders, onDayClick }) => {
  const days = useMemo(() => {
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    }
    return days;
  }, [currentDate]);

  const handleDayClick = (date) => {
    if (date) {
      onDayClick(date);
    }
  };

  return (
    <div className='calendar'>
      <div className='calendar-days'>
        {['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'].map((day, index) => (
          <div key={index} className='calendar-week'>
            {day}
          </div>
        ))}
        {days.map((date, index) => (
          <DayRender
            key={index}
            date={date}
            selectedDate={selectedDate}
            onClick={handleDayClick}
            orders={orders}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
