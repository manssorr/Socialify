import {AppText} from '@components';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {colors} from '@utils';

type PropType = {
	color: 'red' | '#9e1876';
	message: string;
};

const ToastComponent = ({color, message}: PropType) => {
	return (
		<View
			style={[
				styles.toastContainer,
				{borderColor: color, backgroundColor: color},
			]}>
			<AppText style={styles.message}>{message}</AppText>
		</View>
	);
};

export const toastConfig = {
	ErrorInfo: ({text1}: {text1: string}) => (
		<ToastComponent color="red" message={text1} />
	),
	SuccessInfo: ({text1}: {text1: string}) => (
		<ToastComponent color="#9e1876" message={text1} />
	),
};
export const showToast = (type: 'ErrorInfo' | 'SuccessInfo', msg: string) => {
	Toast.show({
		type: type,
		text1: msg,
	});
};

const styles = StyleSheet.create({
	toastContainer: {
		padding: 10,
		borderRadius: 5,
		marginHorizontal: 5,
		borderWidth: 1,
		alignItems: 'center',
		width: '90%',
	},
	message: {fontSize: 20, fontWeight: '700', color: 'white'},
});
