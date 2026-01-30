import React from 'react';
import ProductCard from './ProductCard';

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Carrots', price: '$1.20', category: 'Vegetable', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.00', category: 'Dairy', inStock: true }
];

const ProductList = ({ category, cart, setCart }) => {
  
  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === category);

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default ProductList;