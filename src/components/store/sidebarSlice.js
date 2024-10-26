// src/slices/sidebarSlice.js
import { createSlice } from "@reduxjs/toolkit";

const lightTheme = {
  backgroundColor: "#ffffff", // White background
  textColor: "#333333", // Darker gray for better contrast on light background
  subtextColor: "#4B5563", // Gray (similar to Tailwind's text-gray-600) for subtext
};

const darkTheme = {
  backgroundColor: "#1a1a1a", // Near-black for dark theme
  textColor: "#E5E7EB", // Light gray for readability on dark background
  subtextColor: "#D1D5DB", // Medium-light gray (similar to Tailwind's text-gray-300) for subtext
};

const initialState = {
  cityName: "Bareilly",
  state: "Uttar Pradesh",
  longitude: 79.435959,
  latitude: 28.375694,
  theme: lightTheme,
};

const sidebarSlice = createSlice({
  name: "sidebar",
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
    setBackgroundColor: (state, action) => {
      state.theme.backgroundColor = action.payload;
    },
    setTextColor: (state, action) => {
      state.theme.textColor = action.payload;
    },
    setSubtextColor: (state, action) => {
      state.theme.subtextColor = action.payload;
    },
    toggleTheme: (state) => {
      state.theme =
        state.theme.backgroundColor === lightTheme.backgroundColor
          ? darkTheme
          : lightTheme;
    },
  },
});

export const {
  setCityName,
  setStateName,
  setLongitude,
  setLatitude,
  setBackgroundColor,
  setTextColor,
  setSubtextColor,
  toggleTheme,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
