import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemReducer from '../view/features/item/itemSlice';
import myRecipesReducer from '../view/features/myRecipes/MyRecipes';
import recentRecipesReducer from '../view/features/recentRecipes/RecentRecipes';
import topRecipesReducer from '../view/features/topRecipes/TopRecipes';

export const store = configureStore({
  reducer: {
    item : itemReducer,
    myRecipes : myRecipesReducer,
    topRecipes : topRecipesReducer,
    recentRecipes : recentRecipesReducer
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
