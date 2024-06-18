import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state , action) => {
            
            //Redux Toolkit use Immer Behind the seen
            state.items.push(action.payload);
        },
        removeItem: (state , action) =>{
            state.items.pop();
        },
        clearCart:(state) =>{
            // console.log(current(state),"ksksksksksksksksks");
            //state.items.length = 0; // state = []
            return {items : []}; //this new object wil be replaced inside originalState = {items : []}
        },
    }
});

export const {addItem , removeItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer;