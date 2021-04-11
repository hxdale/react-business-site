import { ThunkAction } from 'redux-thunk';
import { RootSate } from '../store';
export const FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";

interface FetchProductsStartAction {
  type: typeof FETCH_PRODUCTS_START,
}

interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS,
  payload: any
}
interface FetchProductsFailAction {
  type: typeof FETCH_PRODUCTS_FAIL,
  payload: any
}

export type ProductsActionTypes = FetchProductsStartAction | FetchProductsSuccessAction | FetchProductsFailAction;

export const fetchProductsStartActionCreator = (): FetchProductsStartAction => {
  return {
    type: FETCH_PRODUCTS_START
  }
}
export const fetchProductsSuccessActionCreator = (data: any): FetchProductsSuccessAction => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data
  }
}
export const fetchProductsFailActionCreator = (error: any): FetchProductsFailAction => {
  return {
    type: FETCH_PRODUCTS_FAIL,
    payload: error
  }
}

// thunk 可以返回一个函数，而不一定是js对象
// 在一个thunk action 中可以完成一些连续的action操作
// 并且可以处理异步逻辑
// 业务逻辑可以从UI层面挪到这里，代码分层会更清晰
export const getProductsListActionCreator = ():
  ThunkAction<void, RootSate, unknown, ProductsActionTypes> =>
  async (dispatch, getState) => {

  }

