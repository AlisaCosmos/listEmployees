import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenPopup: false,
  dataPopup: {},
};

export const PopupCardSlice = createSlice({
  name: 'isOpenPopup',
  initialState,
  reducers: {
    setIsOpenPopup(state, action) {
      state.isOpenPopup = action.payload;
    },
    setDataPopup(state, action) {
      state.dataPopup = action.payload;
    },
  },
});

export const { setIsOpenPopup, setDataPopup } = PopupCardSlice.actions;

export default PopupCardSlice.reducer;
