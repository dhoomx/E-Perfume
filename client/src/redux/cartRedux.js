import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.products.find(
        (product) => product._id === productToAdd._id
      );

      if (existingProduct) {
        // If product already exists, update the quantity
        existingProduct.quantity += productToAdd.quantity;
      } else {
        // Otherwise, add the new product
        state.products.push(productToAdd);
      }

      // Update the quantity and total price
      state.quantity += productToAdd.quantity;
      state.total += productToAdd.price * productToAdd.quantity;
    },
    emptyCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },

    increaseQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (p) => p._id === action.payload
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity += 1;
        state.quantity += 1;
        state.total += state.products[productIndex].price;
      }
    },

    decreaseQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (p) => p._id === action.payload
      );
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        if (product.quantity > 1) {
          product.quantity -= 1;
          state.quantity -= 1;
          state.total -= product.price;
        } else {
          // Remove the product if its quantity becomes zero after decreasing
          state.products.splice(productIndex, 1);
          state.quantity -= 1;
          state.total -= product.price;
        }
      }
    },
  },
});

export const { addProduct, emptyCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
