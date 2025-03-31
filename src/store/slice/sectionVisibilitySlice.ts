import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SectionVisibilityState {
    visibleSectionIndex: Number[]; 
}

const initialState: SectionVisibilityState = {
    visibleSectionIndex: [],
};

const sectionVisibilitySlice = createSlice({
    name: "sectionVisibility",
    initialState,
    reducers: {
        addVisibleSection: (state, action: PayloadAction<number>) => {
            if (!state.visibleSectionIndex.includes(action.payload)) {
                state.visibleSectionIndex.push(action.payload);
            }
        },
    },
});

export const { addVisibleSection } = sectionVisibilitySlice.actions;
export const sectionVisibilityReducer = sectionVisibilitySlice.reducer;
