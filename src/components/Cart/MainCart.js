import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';
import Bill from './Bill';

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="container mx-auto mt-24 px-4 lg:px-8 flex flex-col lg:flex-row gap-8 pb-12">
      {/* Cart Items Section */}
      <CartItems />
      
      {/* Bill Section */}
      <Bill />
    </div>
  );
}
