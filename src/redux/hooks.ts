import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootSate } from './store'

export const useSelector: TypedUseSelectorHook<RootSate> = useReduxSelector;