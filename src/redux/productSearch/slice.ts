import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface ProductSearchState {
  loading: boolean,
  error: string | null,
  data: any,
  pagination: any
}

const initialState: ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null
}

export const searchProduct = createAsyncThunk(
  'ProductSearch/searchProduct',
  async (touristRouteId: string, thunkApi) => {
    const data = [{ name: 'apple', age: 3 }];
    return data;
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

export const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState,
  reducers: {
    // fetchStart: (state) => {
    //   state.loading = true;
    // },
    // fetchSuccess: (state, action) => {
    //   state.data = action.payload;
    //   state.loading = false;
    //   state.error = null;
    // },
    // fetchFail: (state, action: PayloadAction<string | null>) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // }
  },
  extraReducers: {
    [searchProduct.pending.type]: (state) => {
      state.loading = true
    },
    [searchProduct.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [searchProduct.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
})