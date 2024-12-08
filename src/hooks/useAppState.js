import React, { useState, useEffect, useMemo } from 'react';
import OrderService from '../services/order-service';

function useAppState() {
  const [orders, setOrders] = useState(OrderService.getOrdersFromStore());
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [today, setToday] = useState(new Date());

  const selectedDateFilteredOrders = useMemo(() => {
    if (!selectedDate) {
      return [];
    }
    let dateKey = new Date(selectedDate).toLocaleDateString();
    let keyOrders = orders[dateKey] ? orders[dateKey] : [];
    return keyOrders;
  }, [selectedDate, orders]);

  const todayFilteredOrders = useMemo(() => {
    let dateKey = new Date(today).toLocaleDateString();
    let keyOrders = orders[dateKey] ? orders[dateKey] : [];
    return keyOrders;
  }, [orders, today]);
  const addOrder = (orderData) => {
    let dateKey = new Date(orderData.deliveryDate).toLocaleDateString();

    let newOrdersState = { ...orders };
    if (!newOrdersState.hasOwnProperty(dateKey)) {
      newOrdersState[dateKey] = [];
    }
    newOrdersState[dateKey].push(orderData);
    setOrders(newOrdersState);
    OrderService.updateOrdersStore(newOrdersState);
  };
  const updateOrder = (order, updatedValues) => {
    let dateKey = new Date(order.deliveryDate).toLocaleDateString();
    let newOrdersState = { ...orders };
    if (newOrdersState.hasOwnProperty(dateKey)) {
      let index = newOrdersState[dateKey].findIndex(
        (item) => item.id === order.id
      );
      if (index >= 0) {
        newOrdersState[dateKey][index] = {
          ...newOrdersState[dateKey][index],
          ...updatedValues,
        };
        setOrders(newOrdersState);
        OrderService.updateOrdersStore(newOrdersState);
      }
    }
  };
  const removeOrder = (order) => {
    let dateKey = new Date(order.deliveryDate).toLocaleDateString();
    let newOrdersState = { ...orders };
    if (newOrdersState.hasOwnProperty(dateKey)) {
      let index = newOrdersState[dateKey].findIndex(
        (item) => item.id === order.id
      );
      if (index >= 0) {
        newOrdersState[dateKey].splice(index, 1);
        setOrders(newOrdersState);
        OrderService.updateOrdersStore(newOrdersState);
      }
    }
  };
  const handleDayClick = (date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const resetMonth = () => {
    setSelectedCalendarDate(new Date());
  };
  const handlePrevMonth = () => {
    let nextDate = new Date(selectedCalendarDate);
    nextDate.setMonth(nextDate.getMonth() - 1);
    setSelectedCalendarDate(nextDate);
  };
  const handleNextMonth = () => {
    let nextDate = new Date(selectedCalendarDate);
    nextDate.setMonth(nextDate.getMonth() + 1);
    setSelectedCalendarDate(nextDate);
  };

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(() => {}, []);
  return {
    orders,
    selectedDate,
    today,
    todayFilteredOrders,
    selectedDateFilteredOrders,
    selectedCalendarDate,
    resetMonth,
    handlePrevMonth,
    handleNextMonth,
    addOrder,
    handleDayClick,
    removeOrder,
    updateOrder,
  };
}

export default useAppState;
