import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import popupCardReducer from './slices/popupSlice';
import filtersReducer from './slices/filtersSlice';
import dropdownReducer from './slices/dropdownSlise';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    isOpenPopup: popupCardReducer,
    filters: filtersReducer,
    dropdown: dropdownReducer,
  },
});
