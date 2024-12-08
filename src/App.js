import React from 'react';
import './App.css';

import Calendar from './components/Calendar';
import OrderForm from './components/OrderForm';
import useAppState from './hooks/useAppState';
import CalendarNavigation from './components/CalendarNavigation';
import OrdersTabs from './components/Tabs';

function App() {
  const {
    orders,
    selectedDate,
    todayFilteredOrders,
    selectedDateFilteredOrders,
    selectedCalendarDate,
    resetMonth,
    handleNextMonth,
    handlePrevMonth,
    addOrder,
    handleDayClick,
    removeOrder,
    updateOrder,
  } = useAppState();

  return (
    <main className='app'>
      <div className='left-section'>
        <OrderForm onAddOrder={addOrder} />
        <div className='calendar-block'>
          <CalendarNavigation
            currentDate={selectedCalendarDate}
            next={handleNextMonth}
            prev={handlePrevMonth}
            reset={resetMonth}
          />
          <Calendar
            orders={orders}
            currentDate={selectedCalendarDate}
            onDayClick={handleDayClick}
            selectedDate={selectedDate}
          />
        </div>
      </div>
      <div className='right-section'>
        <OrdersTabs
          selectedDateOrders={selectedDateFilteredOrders}
          todayOrders={todayFilteredOrders}
          selectedDate={selectedDate}
          onRemove={removeOrder}
          onUpdate={updateOrder}
        />
      </div>
    </main>
  );
}

export default App;
