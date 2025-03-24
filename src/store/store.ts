import { configureStore } from "@reduxjs/toolkit";
import { dropdownReducers } from "./slice/dropdownSlice";
import { toggleReducer } from "./slice/toggleSlice";

export const store = configureStore({
    reducer: {
        dropdown: dropdownReducers,
        toggle: toggleReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;