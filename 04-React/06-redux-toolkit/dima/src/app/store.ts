import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemReducer from '../view/features/item/itemSlice';

export const store = configureStore({
  reducer: {
    item : itemReducer,
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
