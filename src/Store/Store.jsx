import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../Reducers/Createslice'

export const store = configureStore({
  reducer: {
    Counter : CounterReducer
    
  }
});
