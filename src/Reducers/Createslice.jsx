import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementbyAmount: (state, action) => {     
      state.value += action.payload;

    },
  },
});

 export const { increment, decrement, incrementbyAmount } = counterSlice.actions;

 export const IncrementAsync = (amount) => (dispatch) =>{
     
    setTimeout( () =>{

        dispatch(incrementbyAmount(amount))

    }, 2000)
 

 }

export default counterSlice.reducer;


