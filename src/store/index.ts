import {
  useDispatch as useUntypedDispatch,
  useSelector as useUntypedSelector,
  TypedUseSelectorHook,
} from 'react-redux';

import { Dispatch, State, store } from './state';

const useDispatch = () => useUntypedDispatch<Dispatch>();
const useSelector: TypedUseSelectorHook<State> = useUntypedSelector;

export { useDispatch, useSelector };
export default store;
