import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} ({item.selectedSize.label}) - ₹{item.selectedSize.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
