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
      if(state[action.payload].count <= 0){
        state.splice(action.payload, 1);
      }
    },
    removeItem(state, action) {
      state.splice(action.payload, 1);
    }
  }
})

export const { addCount, addItem, minusCount, removeItem } = cart.actions;
export default cart;