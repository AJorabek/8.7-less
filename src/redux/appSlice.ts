import { createSlice } from "@reduxjs/toolkit";
import { getMyToken, getTokenNew } from "../utils/getToken";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    user: false,
    token: "",
  },
  reducers: {
    getToken: (state, { payload }) => {
      if (payload) state.user = payload;
      if (!payload) {
        getTokenNew();
        state.user = payload;
      }
    },
    giveToken: (state) => {
      state.token = getMyToken() || "";
    },
  },
});

export const { getToken } = appSlice.actions;
export default appSlice;
