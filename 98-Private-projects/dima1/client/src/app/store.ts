import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemReducer from './reducers/itemSlice';
import myRecipesReducer from './reducers/MyRecipesSlice';
import pageReducer from './reducers/NamePageSlice';
import recentRecipesReducer from './reducers/RecentRecipesSlice';
import topRecipesReducer from './reducers/TopRecipesSlice';
import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    item : itemReducer,
    myRecipes : myRecipesReducer,
    topRecipes : topRecipesReducer,
    recentRecipes : recentRecipesReducer,
    pageName : pageReducer,
    user : userReducer
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
