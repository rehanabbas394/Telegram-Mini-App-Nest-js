// src/Counter.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Counter = () => {
  // State to store the counter value
  const [count, setCount] = useState(0);

  // Fetch initial count from the backend
  useEffect(() => {
    axios.get('https://localhost:4000/counter')
      .then(response => setCount(response.data.count))
      .catch(error => console.error('Error fetching count:', error));
  }, []);

  // Function to increment the counter
  const handleIncrement = () => {
    axios.post('https://localhost:4000/counter')
      .then(response => setCount(response.data.count))
      .catch(error => console.error('Error incrementing count:', error));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click the Image to Increment Counter</h1>
      <img
        src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Click to increment"
        style={{ cursor: 'pointer', width: '300px', height: 'auto' }}
        onClick={handleIncrement}
      />
      <h2>Counter: {count}</h2>
    </div>
  );
};

export default Counter;
