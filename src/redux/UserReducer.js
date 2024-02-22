import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data/userList";

const userSlice = createSlice({
  name: "users",
  initialState: userList, // initial data to be taken from the User List

  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, domain } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
        uu.domain = domain;
      }
    },
  },
});

export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
