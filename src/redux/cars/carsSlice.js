import { createSlice } from '@reduxjs/toolkit';

import { getAllCars } from './carsOperations';

const initialState = {
  isLoading: false,
  error: null,
  cars: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllCars.pending, state => {
      state.isLoading = true;
      state.error = null;
      state.cars = [];
    });
    builder.addCase(getAllCars.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.cars = action.payload;
    });
    builder.addCase(getAllCars.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.cars = [];
    });
  },
});

export const carsReducer = carsSlice.reducer;
