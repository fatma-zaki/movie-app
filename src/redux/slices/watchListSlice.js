import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [], 
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const movie = action.payload;
      const exists = state.items.find((item) => item.id === movie.id);

      if (exists) {
       
        state.items = state.items.filter((item) => item.id !== movie.id);
      } else {
       
        state.items.push(movie);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
