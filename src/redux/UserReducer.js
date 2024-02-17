import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data/userList";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  // initial data to be taken from the User List

  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
