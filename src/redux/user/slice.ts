import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
  loading: boolean,
  error: string | null,
  token: string | null
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null
}

export const signIn = createAsyncThunk(
  'user/signIn',
  async (params: {
    email: string,
    password: string
  }, thunkAPI) => {
    const { data } = await axios.post(`http://123.56.149.216:8080/auth/login`, {
      email: params.email,
      password: params.password
    })
    return data.token

    // thunkApi.dispatch(productDetailSlice.actions.fetchStart());
    // try {
    //   // 异步请求数据
    //   const data = [{ name: 'apple', age: 3 }];
    //   thunkApi.dispatch(productDetailSlice.actions.fetchSuccess(data));
    // } catch (error) {
    //   thunkApi.dispatch(productDetailSlice.actions.fetchFail(error.message));
    // }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.token = action.payload;
      state.loading = false;
      state.error = null;
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
})