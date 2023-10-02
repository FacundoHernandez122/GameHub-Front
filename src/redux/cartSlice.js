import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  items => items.length
);



const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cart: [],
    purchasedGames: [],
    addItem(state, action) {
      state.push(action.payload);
    },

   removeItem(state, action) {
      const index = state.findIndex((item) => item._id === action.payload._id);
      state.splice(index, 1);
    }, 

    clearCart(state) {
     
      state.length = 0;
    },

    buyItem(state, action) {
      const index = state.findIndex((item) => item._id === action.payload._id);
      if (index !== -1) {
      
        const gameToBuy = state[index];

    
        state.splice(index, 1);

        
        state.push({ ...gameToBuy, purchased: true });
      }
    },
  },
});

export const { addItem, removeItem, buyItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;