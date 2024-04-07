import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import {postsReducer} from './slices/';
import {reduxStorage} from '../utils/storage';
import {AppStore} from './types';

const persistConfig = {
	key: 'root',
	storage: reduxStorage,
	version: 2,
	blacklist: ['posts', 'comments'],
};

const rootReducer = combineReducers({
	posts: postsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: AppStore = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
