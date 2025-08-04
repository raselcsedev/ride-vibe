import { authKey } from '@/components/constant';
import { localStroageRemove } from '@/lib/utils';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


export type userProps = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};

type AuthStateProps = {
  user: null | userProps;
  token: null | string;
};

const initialState:AuthStateProps = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const signOut = () => (dispatch: any) => {
  localStroageRemove(authKey)
  Cookies.remove(authKey)
  dispatch(logout()); 
};

export default authSlice.reducer;
