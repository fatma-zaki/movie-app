import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [], // array of movie objects
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const movie = action.payload;
      const exists = state.items.find((item) => item.id === movie.id);

      if (exists) {
        // remove from wishlist
        state.items = state.items.filter((item) => item.id !== movie.id);
      } else {
        // add to wishlist
        state.items.push(movie);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
