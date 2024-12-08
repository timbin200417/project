import React, { useState } from 'react';
import './styles.css';

const OrderForm = ({ onAddOrder }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerInstagram, setCustomerInstagram] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [createdAtDate, setCreatedAtDate] = useState('');
  const [orderDetails, setOrderDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerName && deliveryDate && orderDetails) {
      onAddOrder({
        id: new Date().getTime().toString(),
        status: 'pending',
        customerName,
        customerAddress,
        customerPhone,
        customerInstagram,
        deliveryDate: new Date(deliveryDate).toString(),
        orderDetails,
        createdAt: createdAtDate ? createdAtDate : new Date().toString(),
      });
      setCustomerName('');
      setCustomerAddress('');
      setCustomerPhone('');
      setCustomerInstagram('');
      setCreatedAtDate('');
      setDeliveryDate('');
      setOrderDetails('');
    } else {
      alert('Заповніть всі поля!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder="Ім'я замовника"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Адреса замовлення'
        value={customerAddress}
        onChange={(e) => setCustomerAddress(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Телефон замовника'
        value={customerPhone}
        onChange={(e) => setCustomerPhone(e.target.value)}
      />
      <input
        type='text'
        placeholder='Інстаграм тег замовника'
        value={customerInstagram}
        onChange={(e) => setCustomerInstagram(e.target.value)}
      />
      <input
        type='datetime-local'
        value={deliveryDate}
        onChange={(e) => setDeliveryDate(e.target.value)}
        required
      />
      <textarea
        placeholder='Деталі замовлення'
        value={orderDetails}
        onChange={(e) => setOrderDetails(e.target.value)}
        required
      ></textarea>
      <button type='submit'>Додати замовлення</button>
    </form>
  );
};

export default OrderForm;
