import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reply_modal: false,
  reaction_modal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openReplyModal: (state) => {
      state.reply_modal = !state.reply_modal;
    },
    openReactionModal: (state) => {
      state.reaction_modal = !state.reaction_modal;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openReplyModal, openReactionModal } = modalSlice.actions;

export const stateReplyModal = (state: any) => state.modal.reply_modal;
export const stateReactionModal = (state: any) => state.modal.reaction_modal;

export default modalSlice.reducer;
