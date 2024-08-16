"use client";
import Shimmer from "@/components/Shimmer";
import configObj from "../../public/constant";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import useFetchProducts from "./customHooks/useFetchProducts";

export default function Home() {
  const [banner, setBanner] = useState(
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
  );
  const productList = useFetchProducts();

  useEffect(() => {
    let i = 0;
    const instance = setInterval(() => {
      i = (i + 1) % configObj.Images.length;
      setBanner(configObj.Images[i]);
    }, 5000);

    return () => {
      clearInterval(instance);
    };
  }, []);

  return (
    <>
      <main className="home w-full h-auto  md:flex relative">
        <div className="main-left  w-full">
          <img src={banner} alt="Background Banner" />
          <div className="hero-details md:absolute w-full md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/4 md:w-1/2 h-52 bg-slate-200 rounded-md p-3 bg-white-200 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100">
            <h1 className="text-center md:text-3xl text-2xl">
              Welcome to ShopNow
            </h1>
            <p className="md:text-xl text-lg text-center mt-4">
              At ShopNow, we curate the most stylish and on-trend clothing,
              accessories, and more. Whether you’re looking for everyday
              essentials or a statement piece, we’ve got you covered.
            </p>
          </div>
        </div>
      </main>
      <section className="product-preview  w-full  px-4 mt-2">
        <h1 className="text-3xl font-bold text-center underline underline-offset-8">
          Our Products
        </h1>
        <div className="sample-products-wrapper flex gap-3 flex-wrap justify-center items-center mt-7">
          {productList.length !== 0
            ? productList.slice(0, 10).map((item) => {
                return <Card item={item} key={item.id} />;
              })
            : new Array(10).fill(0).map((_, index) => {
                return <Shimmer key={index * 10} />;
              })}
        </div>
      </section>
    </>
  );
}
