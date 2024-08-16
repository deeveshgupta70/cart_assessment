"use client";
import Card from "@/components/Card";
import Shimmer from "@/components/Shimmer";
import useFetchProducts from "../customHooks/useFetchProducts";

const Products = () => {
  const productList = useFetchProducts();

  if (productList.length == 0)
    return (
      <>
        <div className="sample-products-wrapper flex gap-3 flex-wrap justify-center items-center mt-7">
          {new Array(10).fill(0).map((_, index) => {
            return <Shimmer key={index} />;
          })}
        </div>
      </>
    );

  return (
    <section className="products-page w-full p-2">
      <h1 className="text-xl text-center font-bold">Products</h1>
      <div className="sample-products-wrapper flex gap-3 flex-wrap justify-center items-center mt-7">
        {productList.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Products;
