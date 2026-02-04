import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <header>
        <h1>🛒 Shopping App</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <p>Cart Items: {cart.length}</p>
      </header>

      <section>
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy">Dairy</option>
        </select>
      </section>

      <main>
        <ProductList category={category} addToCart={addToCart} />
      </main>

      <aside>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </aside>
    </div>
  );
};

export default App;