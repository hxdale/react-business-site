
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { actionLog } from '../redux/middlewares/actionLog'
import languageReducer from './language/languageReducer'
import productsReducer from './products/productsReducer'
import { productDetailSlice } from './productDetail/slice'
import { productSearchSlice } from '../redux/productSearch/slice'

import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  language: languageReducer,
  products: productsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer
})
// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [...getDefaultMiddleware(), actionLog],
  devTools: true
});

export type RootSate = ReturnType<typeof store.getState>
export default store