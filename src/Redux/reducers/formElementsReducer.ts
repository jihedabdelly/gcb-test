import { createSlice } from "@reduxjs/toolkit";
import { FormElementsState } from "../../types";

  
const initialState: FormElementsState = {
    value: [],
};

export const formElementsSlice = createSlice({
    name: "formElements",
    initialState,
    reducers: {
        addElement: (state, action) => {
            state.value = [...state.value, action.payload] // payload here is the form element
        }, 
        removeElement: (state, action) => {
            state.value.splice(action.payload, 1) // payload here is the form element's index to remove
        }
    }

})

export const { addElement, removeElement } = formElementsSlice.actions

export default formElementsSlice.reducer