import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './carsOperations';

const initialState = {
  isLoading: false,
  error: null,
  cars: [],
  favorites: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const isFavorite = state.favorites.find(
        favorite => favorite.id === action.payload.id
      );

      if (!isFavorite) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter(
          favorite => favorite.id !== action.payload.id
        );
      }
    },
  },
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

export const { toggleFavorite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
