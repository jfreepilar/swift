import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DropdownState {
    visibleDropdown: string | null;
};

const initialState: DropdownState = {
    visibleDropdown: null,
};

const dropdownSlice = createSlice({
    name: "dropdown",
    initialState,
    reducers: {
        showDropdown: (state, action: PayloadAction<string>) => {
            state.visibleDropdown = action.payload;
          },
          hideDropdown: (state) => {
            state.visibleDropdown = null;
          },
    },
});

export const { showDropdown, hideDropdown } = dropdownSlice.actions;
export const dropdownReducers = dropdownSlice.reducer;