import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {PostStackParamList} from '@types';
import {PostDetails, Posts} from '@screens';

const Stack = createNativeStackNavigator<PostStackParamList>();

export const PostsStack = () => {
	return (
		<Stack.Navigator initialRouteName="Posts">
			<Stack.Screen name="Posts" component={Posts} />
			<Stack.Screen name="PostDetails" component={PostDetails} />
		</Stack.Navigator>
	);
};
