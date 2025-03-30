import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  category: '',
  gender: '',
  homeState: '',
  jeeMainsRank: '',
  jeeAdvancedRank: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
    clearUser(state) {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;