import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import {useEffect, useState} from 'react';

import {persistor, store} from '@redux';
import {toastConfig, showToast} from '@config';
import MainNavigator from './navigation/MainNavigator';
import {addEventListener} from '@react-native-community/netinfo';
import type {ToastConfig} from 'react-native-toast-message';
import Toast from 'react-native-toast-message';

const THREE_SECONDS = 3000;

function App(): React.JSX.Element {
	const [isNetworkConnected, setisNetworkConnected] = useState<boolean | null>(
		true,
	);

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	useEffect(() => {
		const unsubscribe = addEventListener(state => {
			!state.isConnected &&
				showToast('ErrorInfo', 'You are Not connected to internet');
			setisNetworkConnected(state?.isConnected);
		});

		unsubscribe();
	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MainNavigator />
				<Toast
					config={toastConfig as ToastConfig}
					visibilityTime={THREE_SECONDS}
					topOffset={55}
				/>
			</PersistGate>
		</Provider>
	);
}

export default App;
