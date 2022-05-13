import {
	useDispatch as useUntypedDispatch,
	useSelector as useUntypedSelector,
	TypedUseSelectorHook,
} from 'react-redux';

import { Dispatch, State } from './state';
import * as questionActions from './questions';

const useDispatch = () => useUntypedDispatch<Dispatch>();
const useSelector: TypedUseSelectorHook<State> = useUntypedSelector;

export { useDispatch, useSelector, questionActions };
