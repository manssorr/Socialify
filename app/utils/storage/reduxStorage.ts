import storage from './storage';

interface IReduxStorage {
	setItem: (key: string, value: any) => Promise<boolean>;
	getItem: (key: string) => Promise<string>;
	removeItem: (key: string) => Promise<void>;
}

export const reduxStorage: IReduxStorage = {
	setItem: (key: string, value: any) => {
		storage.set(key, value);
		return Promise.resolve(true);
	},
	getItem: (key: string) => {
		const value = storage.getString(key);
		return Promise.resolve(value ?? '');
	},
	removeItem: (key: string) => {
		storage.delete(key);
		return Promise.resolve();
	},
};
