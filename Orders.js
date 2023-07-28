import React from 'react';

const Orders = ({ orders, onDeleteOrder }) => {
  const handleDelete = (id) => {
    // Call the onDeleteOrder function with the order ID to delete the order
    onDeleteOrder(id);
  };

  return (
    <>
      <h1>Orders:</h1>
      <div>
        <h2>Table 1</h2>
        <ul>
          {orders
            .filter((order) => order.table === 'Table 1')
            .map((order) => (
              <li key={order.id}>
                Order ID: {order.id}, Price: {order.price}, Dish: {order.dish}
                <button onClick={() => handleDelete(order.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h2>Table 2</h2>
        <ul>
          {orders
            .filter((order) => order.table === 'Table 2')
            .map((order) => (
              <li key={order.id}>
                Order ID: {order.id}, Price: {order.price}, Dish: {order.dish}
                <button onClick={() => handleDelete(order.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h2>Table 3</h2>
        <ul>
          {orders
            .filter((order) => order.table === 'Table 3')
            .map((order) => (
              <li key={order.id}>
                Order ID: {order.id}, Price: {order.price}, Dish: {order.dish}
                <button onClick={() => handleDelete(order.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Orders;
