import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function goBack() {
	return navigationRef?.goBack();
}

function getCurrentRoute() {
	return navigationRef?.getCurrentRoute();
}

const getRouteName = () => {
	return navigationRef.getCurrentRoute()?.name ?? '';
};

const NavigationService = {
	goBack,
	getCurrentRoute,
	getRouteName,
};

export default NavigationService;
