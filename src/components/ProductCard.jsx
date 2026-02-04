import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      {product.inStock && (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;