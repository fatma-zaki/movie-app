import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/slice"
import wishlistReducer from './slices/watchListSlice'
const store = configureStore({
    reducer:{
        movies: moviesReducer,
        wishlist: wishlistReducer,
    },
});
export default store;