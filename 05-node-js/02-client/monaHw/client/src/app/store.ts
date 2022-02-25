import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemReducer from '../features/cart/cartSlice';
import userReducer from '../features/user/userReducer';

export const store = configureStore({
  reducer: {
    cart: itemReducer,
    user: userReducer,
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
