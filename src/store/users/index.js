import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    message: '',
  },
  reducers: {
    fetchUsers: (state) => {
      state.isLoading = true;
      state.message = '';
    },
    fetchUsersSuccess: (state, { payload }) => {
      console.log(payload.results);
      state.users = payload.results;
      state.isLoading = false;
    },
    fetchUsersReject: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
    },
  },
});

export const { fetchUsers, fetchUsersSuccess, fetchUsersReject } = usersSlice.actions;

export default usersSlice.reducer;
