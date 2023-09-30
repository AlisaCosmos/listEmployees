import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedUser: {},
  numberOfUsersSelected: '',
  selectedUserName: '',
};

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },
    setNumberOfUsersSelected(state, action) {
      state.numberOfUsersSelected = action.payload;
    },
    setSelectedUserName(state, action) {
      state.selectedUserName = action.payload;
    },
  },
});

export const { setSelectedUser, setNumberOfUsersSelected, setSelectedUserName } =
  dropdownSlice.actions;

export default dropdownSlice.reducer;
