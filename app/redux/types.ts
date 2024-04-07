import type {Store, ThunkDispatch, UnknownAction} from '@reduxjs/toolkit';
import type {postsReducer} from './slices';

// 1. Get the root state's type from reducers
type RootSlices = {posts: ReturnType<typeof postsReducer>};
export type RootState = RootSlices;

// 2. Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, UnknownAction>;

// 3. Create a type for store using RootState and Thunk enabled dispatch
export type AppStore = Omit<Store<RootState, UnknownAction>, 'dispatch'> & {
	dispatch: AppThunkDispatch;
};
