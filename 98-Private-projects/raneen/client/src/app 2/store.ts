import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import textReducer from './reducers/textSlice';
import bagReducer from './reducers/bagSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
     text:textReducer,
     bag: bagReducer,

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
