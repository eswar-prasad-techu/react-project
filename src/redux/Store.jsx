import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "./ApiSlice";
import reducer from "./Reducer";
import { setupListeners } from "@reduxjs/toolkit/query";

const Store = configureStore({
  reducer: {
    cart: reducer,
    [ApiSlice.reducerPath]: ApiSlice.reducer
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(ApiSlice.middleware),
});

setupListeners(Store.dispatch)

export default Store;
