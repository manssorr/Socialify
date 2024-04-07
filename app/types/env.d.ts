import {PostStackParamList} from './navigationTypes';
declare module '@env' {
	export const API_KEY: string;
	export const API_URL: string;
	export const IMAGE_URL: string;
}

/*
 * React Navigation
 * see: https://reactnavigation.org/docs/typescript/#type-checking-the-navigator
 * see: https://stackoverflow.com/a/70272943/17660568
 */
declare global {
	namespace ReactNavigation {
		interface RootParamList extends PostStackParamList {}
	}
}
