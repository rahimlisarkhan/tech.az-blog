import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  useInfo: null,
  config: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fillUserInfo: (state, action: PayloadAction<any>) => {
      state.useInfo = action.payload;
    },
    fillConfig: (state, action: PayloadAction<any>) => {
      state.config = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fillUserInfo, fillConfig } = userSlice.actions;

export const stateUser = (state: any) => state.user.useInfo;
export const stateConfig = (state: any) => state.user.config;

export default userSlice.reducer;
