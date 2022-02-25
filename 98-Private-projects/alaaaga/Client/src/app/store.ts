import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import textReducer from '../features/text/textSlice';
import userReducer from '../features/user/userReducer';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer, 
    //  text:textReducer,
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

