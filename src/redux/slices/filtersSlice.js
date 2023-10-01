import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filtersSlice.actions;

export default filtersSlice.reducer;
