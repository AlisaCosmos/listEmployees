import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import popupCardReducer from './slices/popupSlice';
import filtersReducer from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    isOpenPopup: popupCardReducer,
    filters: filtersReducer,
  },
});
