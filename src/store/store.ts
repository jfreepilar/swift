import { configureStore } from "@reduxjs/toolkit";
import { dropdownReducers } from "./slice/dropdownSlice";
import { toggleReducer } from "./slice/toggleSlice";
import { ScrollReducer } from "./slice/scrollSlice";
import { sectionVisibilityReducer } from "./slice/sectionVisibilitySlice";

export const store = configureStore({
    reducer: {
        dropdown: dropdownReducers,
        toggle: toggleReducer,
        toggleScroll: ScrollReducer,
        sectionVisibility: sectionVisibilityReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;