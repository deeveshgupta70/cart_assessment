"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  clearFromCart,
  decrementQuantity,
} from "../redux/cartSlice";
import { useState } from "react";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [discount, setDiscount] = useState(0);

  const handleDiscountChange = (e) => {
    const value = e.target.value;
    if (value === "10on100" && totalPrice >= 100) {
      setDiscount(Math.min(0.1 * totalPrice, 10));
    } else if (value === "10on250" && totalPrice >= 250) {
      setDiscount(Math.min(0.1 * totalPrice, 25));
    } else if (value === "10on999" && totalPrice >= 999) {
      setDiscount(Math.min(0.1 * totalPrice, 99));
    } else {
      setDiscount(0);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const finalPrice = totalPrice - discount;

  return (
    <main className="flex flex-col md:flex-row gap-4 p-3 min-h-96">
      <section className="w-full ">
        <h1 className="text-xl font-bold mb-4 text-center">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div className="flex-1 px-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">Price: Rs. {item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(clearFromCart(item.id))}
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </section>

      <div
        className={`w-full md:w-2/4 h-full mt-4 md:mt-0 md:ml-4 p-4 bg-gray-100 rounded
        ${cartItems.length === 0 ? "hidden" : "block"}`}
      >
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Total Items:</span>
          <span>{cartItems?.length ?? 0}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Apply Coupon:</span>
          <select
            name="discount"
            id="discount"
            className="px-3 py-2 border rounded"
            onChange={handleDiscountChange}
          >
            <option value="">Select a coupon</option>
            <option value="10on100">
              10% on Rs.100 shopping (upto Rs.10 off)
            </option>
            <option value="10on250">
              10% on Rs.250 shopping (upto Rs.25 off)
            </option>
            <option value="10on999">
              10% on Rs.999 shopping (upto Rs.99 off)
            </option>
          </select>
        </div>

        <hr />

        <div className="flex justify-between mb-2 mt-5">
          <span>Original Price:</span>
          <span>Rs. {totalPrice?.toFixed(2) ?? 0}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount:</span>
          <span>- Rs. {discount?.toFixed(2) ?? 0}</span>
        </div>
        <div className="flex justify-between font-bold mb-2">
          <span>Final Price:</span>
          <span>Rs. {finalPrice?.toFixed(2) ?? 0}</span>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded mt-4">
          Proceed to Checkout
        </button>
      </div>
    </main>
  );
}
