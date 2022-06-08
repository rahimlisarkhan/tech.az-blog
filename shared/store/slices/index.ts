import homeSlice from "./home/homeSlices";
import userSlice from "./user/userSlices";
import modalSlice from "./modal/modalSlices";
import commentSlice from "./comment/commentSlices";

export const reducers = {
  home: homeSlice,
  user: userSlice,
  comment: commentSlice,
  modal: modalSlice,
};
