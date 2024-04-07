// import {persistor, store} from './app/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainNavigator from './navigation/MainNavigator';
import {persistor, store} from '@redux';

function App(): React.JSX.Element {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MainNavigator />
			</PersistGate>
		</Provider>
	);
}

export default App;
