
import { createStore } from 'redux';
import languageReducer from './language/languageReducer'

const store = createStore(languageReducer);

export type RootSate = ReturnType<typeof store.getState>
export default store