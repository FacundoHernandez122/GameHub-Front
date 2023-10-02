import { createSlice } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload;
    },

    logout(state, action) {

      return null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { login, logout } = actions;
export default reducer;
