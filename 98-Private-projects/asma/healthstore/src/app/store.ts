import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import treatmentReducer from '../features/treatment/treatmentSlice';

export const store = configureStore({
  reducer: {
    treatment: treatmentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
