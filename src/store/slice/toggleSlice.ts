import { createSlice } from "@reduxjs/toolkit";

interface toggleState {
    isVisible: boolean;
};

const initialState: toggleState = {
    isVisible: false,
};

const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        toggle: (state) => {
            state.isVisible = !state.isVisible;;
          },
    },
});

export const { toggle } = toggleSlice.actions;
export const toggleReducer = toggleSlice.reducer;