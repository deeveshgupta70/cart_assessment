// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      toast.success("Product Added");
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    incrementQuantity: (state, action) => {
      state.items.forEach((item, index) => {
        if (item.id === action.payload.id) {
          if (item.quantity == 1) {
            state.items.splice(index, 1);
          } else item.quantity--;

          return;
        }
      });
    },
    clearFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      toast.success("Removed");
    },
  },
});

export const { addToCart, decrementQuantity, clearFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
