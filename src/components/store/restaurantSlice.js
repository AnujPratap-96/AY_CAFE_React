// restaurantSlice.js

import { createSlice } from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    allRestaurants: [],
    allRestHeader: '',
    whatsOnMind: [],
    whatsHeader: '',
    topRestaurants: [],
    topRestHeader: '',
    isLoading: false,
  },
  reducers: {
    setRestaurantData: (state, action) => {
      state.allRestaurants = action.payload.allRestaurants;
      state.allRestHeader = action.payload.allRestHeader;
      state.whatsOnMind = action.payload.whatsOnMind;
      state.whatsHeader = action.payload.whatsHeader;
      state.topRestaurants = action.payload.topRestaurants;
      state.topRestHeader = action.payload.topRestHeader;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setRestaurantData, setLoading } = restaurantSlice.actions;
export default restaurantSlice.reducer;
