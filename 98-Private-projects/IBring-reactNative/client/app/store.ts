import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import curListReducer from '../features/curListSelector/curListReducer';
import listReducer from '../features/listSelector/listReducer';
import loginReducer from '../features/userLogin/userLoginReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    logged: loginReducer,
    allLists: listReducer,
    curList: curListReducer
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
