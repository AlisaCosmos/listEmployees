import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import popupCardReducer from './slices/popupSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    isOpenPopup: popupCardReducer,
  },
});
