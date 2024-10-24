// src/slices/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cityName: 'Bareilly',
  state: 'Uttar Pradesh',
  longitude: 79.435959,
  latitude: 28.375694,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
    setStateName: (state, action) => {
      state.state = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
  },
});

// Export actions to be used in the sidebar component
export const { setCityName, setStateName, setLongitude, setLatitude } = sidebarSlice.actions;

// Export the reducer to be added to the store
export default sidebarSlice.reducer;
