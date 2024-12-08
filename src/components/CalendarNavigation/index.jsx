import React from 'react';

const CalendarNavigation = ({ reset, prev, next, currentDate }) => {
  return (
    <div className='calendar-navigation'>
      <button onClick={prev}>{`<`}</button>
      <h2>
        {currentDate.toLocaleString('uk-UA', {
          month: 'long',
          year: 'numeric',
        })}
      </h2>
      <button onClick={next}>{`>`}</button>
    </div>
  );
};

export default CalendarNavigation;
