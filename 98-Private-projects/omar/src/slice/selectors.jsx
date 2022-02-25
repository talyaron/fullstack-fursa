import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './index';

// First select the relevant part from the state
const selectDomain = (state ) => state.AppSlice || initialState;

export const selectUser = createSelector(
  [selectDomain],
  slice => slice.user,
);

export const selectGender = createSelector(
    [selectDomain],
  slice => slice.gender,
)

export const selectMainGoal = createSelector(
    [selectDomain],
  slice => slice.maingoal,
)

export const selectActivity = createSelector(
    [selectDomain],
  slice => slice.activity,
)

export const selectAge = createSelector(
    [selectDomain],
  slice => slice.age,
)

export const selectHeight = createSelector(
    [selectDomain],
  slice => slice.height,
)

export const selectWeight = createSelector(
    [selectDomain],
  slice => slice.weight,
)

  