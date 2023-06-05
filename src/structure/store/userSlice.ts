import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    authenticated: false,
    session: {
      access_token: '',
      token_type: '',
      refresh_token: '',
    },
    user: {
      id: '',
      aud: '',
      role: '',
      email: '',
      user_metadata: {
        name: '',
        username: '',
      },
    },
  },
  reducers: {
    signin(state, { payload }) {
      return {
        ...state,
        authenticated: true,
        session: payload.session,
        user: payload.user,
      };
    },
    logout(state) {
      return {
        ...state,
        authenticated: false,
        session: {
          access_token: '',
          token_type: '',
          refresh_token: '',
        },
        user: {
          id: '',
          aud: '',
          role: '',
          email: '',
        },
      };
    },
  },
});

export const { signin, logout } = slice.actions;

export default slice.reducer;
