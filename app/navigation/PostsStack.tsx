import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {PostStackParamList} from '@types';
import {PostDetails, Posts} from '@screens';
import {View} from 'react-native';

const Stack = createNativeStackNavigator<PostStackParamList>();

export const PostsStack = () => {
	return (
		<Stack.Navigator initialRouteName="Posts">
			<Stack.Screen
				name="Posts"
				component={Posts}
				options={{
					title: 'Posts',
					headerTitleAlign: 'center',
				}}
			/>
			<Stack.Screen
				name="PostDetails"
				component={PostDetails}
				options={{
					animation: 'slide_from_right',
					title: 'Post Details',
					headerTitleAlign: 'center',
				}}
			/>
		</Stack.Navigator>
	);
};
