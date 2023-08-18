// certificate.js
import { createSlice } from '@reduxjs/toolkit';

const certificateSlice = createSlice({
  name: 'certificate',
  initialState: {
    allfields:[]
  },
  reducers: {
    addfield: (state, action) => {
      state.allfields =  [...state.allfields, action.payload];
    }
  },
});

export const { addfield } = certificateSlice.actions;
export default certificateSlice.reducer;
