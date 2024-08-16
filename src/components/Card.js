import { addToCart } from "@/app/redux/cartSlice";
import { useDispatch } from "react-redux";

const Card = ({ item }) => {
  // console.log(item);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    // console.log(item);
  };

  return (
    <div
      className="product-card h-[420px]  w-[300px] rounded-md shadow-xl p-1"
      key={item.id}
    >
      <div className="card-top h-2/3 overflow-hidden ">
        <img
          src={item.image}
          alt="product"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-1/3 p-2 flex flex-col">
        <h2 className="text-lg">{item.title.substring(0, 25) + "..."}</h2>
        <p className="text-sm"> RS. {item.price}</p>
        <p className="text-sm mb-1 text-nowrap capitalize">
          {item.description.substring(0, 30) + "..."}
        </p>
        <button
          className="p-2 rounded-lg bg-red-500 text-white m-auto w-28"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
