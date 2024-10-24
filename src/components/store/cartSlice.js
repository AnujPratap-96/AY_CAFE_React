import { createSlice } from "@reduxjs/toolkit";  // Single import

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);  // Add item to the cart
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((res) => res.name !== action.payload);  // Remove item by ID
    },
    clearCart: (state) => {
      state.items = [];  // Clear all items from the cart
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
