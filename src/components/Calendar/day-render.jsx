import React from 'react';

const DayRender = (props) => {
  const { selectedDate, date, onClick, orders } = props;
  if (!date) {
    return <div className={`calendar-day`}>{''}</div>;
  }
  const formattedDate = new Date(date).toLocaleDateString();
  let keyOrders = orders[formattedDate] ? orders[formattedDate] : [];

  const isToday = () => {
    return (
      new Date(date).toLocaleDateString() === new Date().toLocaleDateString()
    );
  };
  const ordersCount = keyOrders.length;
  let colorClassName =
    ordersCount > 0
      ? ordersCount >= 10
        ? 'large'
        : ordersCount < 10 && ordersCount >= 5
        ? 'medium'
        : ordersCount >= 1 && ordersCount < 5
        ? 'low'
        : ''
      : '';
  const isSelected = (date) => {
    if (selectedDate) {
      if (
        new Date(selectedDate).toLocaleDateString() ===
        new Date(date).toLocaleDateString()
      ) {
        return 'active';
      }
      return '';
    }
    return '';
  };

  return (
    <div
      className={`calendar-day ${
        date && isToday(date) ? 'today' : ''
      } ${colorClassName} ${date ? isSelected(date) : ''}`}
      onClick={() => onClick(date)}
    >
      {date ? date.getDate() : ''}
    </div>
  );
};

export default DayRender;
