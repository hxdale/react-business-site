
import { ProductsActionTypes, FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAIL } from './productsActions';

interface productsState {
  productsList: [];
  loading: boolean;
  error: string | null
}

const defaultState: productsState = {
  loading: true,
  error: null,
  productsList: []
}
//eslint-disable-next-line
export default (state = defaultState, action: ProductsActionTypes) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productsList: action.payload };
    case FETCH_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state
  }
}