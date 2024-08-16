import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/slice";

const useFetchProducts = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.data);

  useEffect(() => {
    const fetchProduct = async () => {
      if (productList.length === 0) {
        try {
          const res = await fetch("https://fakestoreapi.com/products");
          const data = await res.json();
          if (data) {
            dispatch(addProducts(data));
          }
        } catch (error) {
          console.error("Failed to fetch products", error);
        }
      }
    };
    fetchProduct();
  }, [dispatch, productList.length]);

  return productList;
};

export default useFetchProducts;
