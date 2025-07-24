import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./cartSlice";

const item = createSlice({
  name: 'item',
  initialState: ['', '', ]
})

const num = createSlice({
  name: 'num',
  initialState: 0,
  reducers: {
    plusNum(state) {
      return state + 1;
    }
  }
})

export const { plusNum } = num.actions

export default configureStore({
  reducer: {
    item: item.reducer,
    cart: cart.reducer,
    num: num.reducer,
  }
})