const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const newProducts = action.payload;
      const existingProductIds = new Set(
        state.data.map((product) => product.id)
      );

      const filteredProducts = newProducts.filter(
        (product) => !existingProductIds.has(product.id)
      );

      state.data.push(...filteredProducts);
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
