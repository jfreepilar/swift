import { createSlice } from "@reduxjs/toolkit";

interface ScrollState {
        isFixed: boolean; 
};

const initialState: ScrollState = {
    isFixed: false,
};

const scrollSlice = createSlice({
    name: "scroll",
    initialState,
    reducers: {
        toggleScroll: (state) => {
            state.isFixed = !state.isFixed;
        } 
    }
});

export const { toggleScroll } = scrollSlice.actions;
export const ScrollReducer = scrollSlice.reducer;