import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  reaction_users: [],
  comments:[]
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    fillReactionUsers: (state, action: PayloadAction<any>) => {
      state.reaction_users = action.payload;
    },
    fillComments: (state, action: PayloadAction<any>) => {
      state.comments = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fillReactionUsers,fillComments } = commentSlice.actions;

export const stateReactionUsers = (state: any) => state.comment.reaction_users;
export const stateComments = (state: any) => state.comment.comments;



export default commentSlice.reducer;
