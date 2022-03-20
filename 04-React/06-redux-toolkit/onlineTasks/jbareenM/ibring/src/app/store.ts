import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pageReducer from '../features/pageSelector/pageReducer';
import { ShopReducer } from '../features/storeSelector/storeReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    selectImg: pageReducer,
    shop: ShopReducer.reducer
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
