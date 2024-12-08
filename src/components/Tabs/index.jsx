import React, { useState } from 'react';
import './styles.css';
import OrdersTable from '../OrdersTable';

const OrdersTabs = ({
  selectedDateOrders = [],
  todayOrders = [],
  selectedDate,
  onRemove,
  onUpdate,
}) => {
  const [activeTab, setActiveTab] = useState('selectedDay');

  return (
    <div>
      <div className='tabs'>
        <button
          className={activeTab === 'selectedDay' ? 'active' : ''}
          onClick={() => setActiveTab('selectedDay')}
        >
          Замовлення по даті ({selectedDateOrders.length}) [
          {selectedDate ? new Date(selectedDate).toLocaleDateString() : ''}]
        </button>
        <button
          className={activeTab === 'today' ? 'active' : ''}
          onClick={() => setActiveTab('today')}
        >
          Сьогоднішні замовлення ({todayOrders.length})
        </button>
      </div>
      <div className='tab-content'>
        {activeTab === 'selectedDay' && (
          <OrdersTable
            orders={selectedDateOrders}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        )}
        {activeTab === 'today' && <OrdersTable orders={todayOrders} />}
      </div>
    </div>
  );
};

export default OrdersTabs;
