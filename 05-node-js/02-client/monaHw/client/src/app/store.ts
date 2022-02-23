import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: itemReducer,
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
