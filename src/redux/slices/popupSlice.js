import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenPopup: false,
};

export const PopupCardSlice = createSlice({
  name: 'isOpenPopup',
  initialState,
  reducers: {
    setIsOpenPopup(state, action) {
      state.isOpenPopup = action.payload;
    },
  },
});

export const { setIsOpenPopup } = PopupCardSlice.actions;

export default PopupCardSlice.reducer;
