const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "./cartSlice";
import producReducer from "./slice";
const store = configureStore({
  reducer: {
    product: producReducer,
    cart: cartSlice,
  },
});

export default store;
