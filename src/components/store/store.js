import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice"
import sidebarSlice from "./sidebarSlice"
import restaurantSlice from "./restaurantSlice"


const store = configureStore({
    reducer : {
        cart : cartSlice,
        sidebar : sidebarSlice,
        restaurants : restaurantSlice
    }
});

export default store;