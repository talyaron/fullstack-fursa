import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appointmentReducer from '../features/appointment/appointmentsSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
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
