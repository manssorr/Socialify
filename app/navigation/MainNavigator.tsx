import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PostsStack} from '@navigation';

const MainNavigator = (): React.ReactElement => {
	return (
		<NavigationContainer>
			<PostsStack />
		</NavigationContainer>
	);
};

export default MainNavigator;
