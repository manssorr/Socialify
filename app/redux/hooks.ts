import {useDispatch, type TypedUseSelectorHook, useSelector} from 'react-redux';
import type {AppThunkDispatch, RootState} from './types';

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
