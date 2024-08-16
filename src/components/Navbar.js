/* eslint-disable react/prop-types */

"use client";
import { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems.length);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setFixed(true);
      } else setFixed(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full h-10 flex bg-slate-100 justify-between px-5 py-9 md:p-10 items-center transition-all duration-75 ${
          fixed ? "fixed top-0 left-0 shadow-lg z-50  " : "relative"
        }`}
      >
        <div className="left">
          <Link href={"/"}>
            <span className="text-2xl font-bold hover:text-blue-700 ">
              ShopNow
            </span>
          </Link>
        </div>
        <div className="right-desktop md:flex gap-12 hidden">
          <Link href={"/"}>
            <div
              id="home"
              className="nav-link text-lg font-semibold cursor-pointer nav-underline"
            >
              Home
            </div>
          </Link>
          <Link href={"/products"}>
            <div
              id="Products"
              className="nav-link text-lg font-semibold cursor-pointer nav-underline"
            >
              Products
            </div>
          </Link>
        </div>
        <Link href={"/cart"}>
          <div className=" cursor-pointer relative">
            <BsCart className="text-4xl" />
            <span className="bg-red-400 p-1 rounded-full absolute -top-3 right-0">
              {cartItems?.length ?? 0}
            </span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
