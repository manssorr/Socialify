import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainNavigator from './navigation/MainNavigator';
import {persistor, store} from '@redux';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

function App(): React.JSX.Element {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MainNavigator />
			</PersistGate>
		</Provider>
	);
}

export default App;
