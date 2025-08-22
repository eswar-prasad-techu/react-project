import { createSlice } from "@reduxjs/toolkit";

const cartData = {
  cart: [],
  totalPrice: 0,
};

const Reducer = createSlice({
  name: "cart",
  initialState: cartData,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      let data = state.cart.map((e) => e.price);
      let total = data.reduce((prev, curr) => prev + curr);
      state.totalPrice = Math.round(total);
    },
    removeCart: (state, action) => {
      let index = state.cart.findIndex((e) => action.payload.id === e.id);
      console.log(index);
      if (index > -1) {
        state.cart.splice(index, 1);
        let data = state.cart.map((e) => e.price);
        let total = data.reduce((prev, curr) => prev + curr, 0);
        state.totalPrice = Math.round(total);
      }
    },
  },
});

export const { addToCart, removeCart } = Reducer.actions;

export default Reducer.reducer;
