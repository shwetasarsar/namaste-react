import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state, action) =>{
            const removeItem = action.payload
            state.items.splice(removeItem, 1);
        },
        clearItem: (state, action) =>{
            state.items.length = 0;
        }
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;