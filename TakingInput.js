import React, { useState, useEffect } from 'react';
import Button from '../button/Button'; // Ensure the correct path for the Button component
import Orders from '../orders/Orders'; // Ensure the correct path for the Orders component

const TakingInput = () => {
  const [order, setOrder] = useState('');
  const [price, setPrice] = useState('');
  const [dish, setDish] = useState('');
  const [table, setTable] = useState('Table 1'); // Set the default value to 'Table 1'
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    // Load orders from local storage when the component mounts
    const storedOrders = JSON.parse(localStorage.getItem('orders'));
    if (storedOrders) {
      setOrdersList(storedOrders);
    }
  }, []);

  useEffect(() => {
    // Save orders to local storage whenever ordersList changes
    localStorage.setItem('orders', JSON.stringify(ordersList));
  }, [ordersList]);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Create a new order object
    const newOrder = {
      id: order,
      price,
      dish,
      table,
    };

    // Update the orders list in the state
    setOrdersList((prevOrders) => [...prevOrders, newOrder]);

    // Clear the form fields after submitting
    setOrder('');
    setPrice('');
    setDish('');
    setTable('Table 1'); // Set the default value to 'Table 1'
  };

  const handleDeleteOrder = (id) => {
    // Filter out the order with the provided ID and update the state
    setOrdersList((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="order">Unique Order ID</label>
        <input type='number' id='order' value={order} onChange={(e) => setOrder(e.target.value)} />
        <label htmlFor="price">Choose Price</label>
        <input type='number' id='price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <label htmlFor="dish">Choose Dish</label>
        <input type='text' id='dish' value={dish} onChange={(e) => setDish(e.target.value)} />
        <label htmlFor="table">Choose Table</label>
        <select value={table} onChange={(e) => setTable(e.target.value)}>
          <option>Table 1</option>
          <option>Table 2</option>
          <option>Table 3</option>
        </select>
        <Button type="submit" value="Add to bill" />
      </form>
      <Orders orders={ordersList} onDeleteOrder={handleDeleteOrder} />
    </>
  );
};

export default TakingInput;
