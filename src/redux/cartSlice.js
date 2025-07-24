import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: 'cart',
  initialState: [
 
  ],
  reducers: {
    addCount(state, action) {
      state[action.payload].count++;
    },
    addItem(state, action) {
      let index = state.findIndex(data => {
        return data.id == action.payload.id
      })
      if(index !== -1) {
        state[index].count++
      } else {
        state.push(action.payload);
      }
    },
    minusCount(state, action) {
      state[action.payload].count--;
    }
  }
})

export const { addCount, addItem, minusCount} = cart.actions;
export default cart;