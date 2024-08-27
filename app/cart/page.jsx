"use client";
import React from 'react';
import Image from 'next/image';
import { useCart } from '../CartContext';
import Link from 'next/link';

const CartPage = () => {
  const { cart } = useCart();

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Proceeding to checkout...');
    // You can redirect to a checkout page or integrate with a payment gateway
  };

  return (
    <div className="container mt-5">
      <div className="d-flex flex-column flex-lg-row justify-content-start  justify-content-lg-between align-items-center mb-3">
        <h1>Your Shopping Cart</h1>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
      <div className="row">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div className="col-md-4 col-xl-3 col-sm-6" key={item.id}>
                <div className="card mb-3 py-2">
                  <Image src="/item.png" width={100} height={100} alt="item" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p>${item.price} x {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12 mt-3">
              <button onClick={handleCheckout} className="btn btn-success">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
