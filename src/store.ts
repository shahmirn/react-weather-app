import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import locationSearchReducer from './slices/locationSlice';
import weatherReducer from './slices/weatherSlice';

export const store = configureStore({
  reducer: {
    locationSearch: locationSearchReducer,
    weather: weatherReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
