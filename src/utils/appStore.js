import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //this is big reduce for whole app and consist of small samall reducers
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;