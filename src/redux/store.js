import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./"

const store = configureStore({
    reducer:{
        movies: movisReducer
    },
});
export default store;