import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isJsxFragment } from "typescript";
import { RootState, AppThunk } from "../../app/store";
import { getUsers } from "./usersApi";

export interface CounterState {
  users: Array<any>;
  status: "idle" | "loading" | "failed";
  error: any;
}

const initialState: CounterState = {
  users: [],
  status: "idle",
  error: "",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getUsersAsync = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const usersDB = await getUsers();
      // The value we return becomes the `fulfilled` action payload
      if (Array.isArray(usersDB)) {
        return usersDB;
      }

      thunkAPI.rejectWithValue("No users");
      return;
    } catch (err: any) {
      thunkAPI.rejectWithValue(err.messsage);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action);
        if (Array.isArray(action.payload)) {
          state.users = action.payload;
        } else {
          console.error("payload is not an array");
          console.log(action.payload);
        }
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// export const {  getUsersAsync } = usersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const usersSelect = (state: RootState) => state.users.users;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default usersSlice.reducer;
