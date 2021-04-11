
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import languageReducer from './language/languageReducer'
import productsReducer from './products/productsReducer'

const rootReducer = combineReducers({
  language: languageReducer,
  products: productsReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootSate = ReturnType<typeof store.getState>
export default store