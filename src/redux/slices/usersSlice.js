import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('fetchUsers/fetchUsersStatus', async (papams) => {
  //const getUsers = `${!!searchValue ? searchValue : null}`;

  const { data } = await axios.get(
    //https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=${apiKey}
    //`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&filter=free-ebooks&key=${apiKey}`
    `https://jsonplaceholder.typicode.com/users`,
  );
  console.log(data, 'data в редаксе');
  return data;
});

const initialState = {
  users: [],
  status: 'loading',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading';
        state.users = [];
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'success';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'error';
        state.users = [];
      });
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
