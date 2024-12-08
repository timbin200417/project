import React from 'react';
import './styles.css';

import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

const OrdersTable = ({ orders = [], onUpdate, onRemove }) => {
  function getStatus(status = '') {
    let statuses = {
      success: 'Доставлено',
      pending: 'В процессі',
    };
    return statuses[status] ?? 'В процесі';
  }
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Адреса</th>
            <th>Телефон</th>
            <th>Instagram</th>
            <th>Доставити</th>
            <th>Опис</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((row) => (
            <tr key={row.id}>
              <td>{row.customerName}</td>
              <td>{row.customerAddress ? row.customerAddress : '-'}</td>
              <td>{row.customerPhone ? row.customerPhone : '-'}</td>
              <td>{row.customerInstagram ? row.customerInstagram : '-'}</td>
              <td>
                {new Date(row.deliveryDate).toLocaleString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: false,
                })}
              </td>
              <td>{row.orderDetails}</td>
              <td>{getStatus(row.status)}</td>
              <td>
                <ButtonGroup>
                  <Button
                    disabled={row.status && row.status === 'success'}
                    onClick={() => onUpdate(row, { status: 'success' })}
                    variant='primary'
                  >
                    <svg
                      width='14px'
                      height='14px'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z'
                        fill='#0F1729'
                      />
                    </svg>
                  </Button>
                  <Button
                    disabled={row.status && row.status === 'pending'}
                    onClick={() => onUpdate(row, { status: 'pending' })}
                    variant='warning'
                  >
                    <svg
                      width='14px'
                      height='14px'
                      viewBox='0 0 1024 1024'
                      className='icon'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M511.9 183c-181.8 0-329.1 147.4-329.1 329.1s147.4 329.1 329.1 329.1c181.8 0 329.1-147.4 329.1-329.1S693.6 183 511.9 183z m0 585.2c-141.2 0-256-114.8-256-256s114.8-256 256-256 256 114.8 256 256-114.9 256-256 256z'
                        fill='#0F1F3C'
                      />
                      <path
                        d='M548.6 365.7h-73.2v161.4l120.5 120.5 51.7-51.7-99-99z'
                        fill='#0F1F3C'
                      />
                    </svg>
                  </Button>
                  <Button onClick={() => onRemove(row)} variant='danger'>
                    <svg
                      width='14px'
                      height='14px'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7 12L17 12'
                        stroke='#000000'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
