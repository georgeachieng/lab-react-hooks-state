import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Dairy">Dairy</option>
      </select>

      
      <ProductList category={category} cart={cart} setCart={setCart} />

      
      <Cart cart={cart} />
    </div>
  );
};

export default App;