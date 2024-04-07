import {AppText} from '@components';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';

type PropType = {
	color: 'pink' | '#65B741';
	message: string;
};

const ToastComp = ({color, message}: PropType) => {
	const toastStyle = styles(color);

	return (
		<View style={toastStyle.toastContainer}>
			<AppText style={toastStyle.message}>{message}</AppText>
		</View>
	);
};

export const toastConfig = {
	ErrorInfo: ({text1}: {text1: string}) => (
		<ToastComp color="pink" message={text1} />
	),
	SuccessInfo: ({text1}: {text1: string}) => (
		<ToastComp color="#65B741" message={text1} />
	),
};
export const showToast = (type: 'ErrorInfo' | 'SuccessInfo', msg: string) => {
	Toast.show({
		type: type,
		text1: msg,
	});
};

const styles = (color: string) =>
	StyleSheet.create({
		toastContainer: {
			backgroundColor: color,
			padding: 20,
			borderRadius: 10,
			marginHorizontal: 5,
			borderColor: color,
			borderWidth: 1,
			alignItems: 'center',
			width: '90%',
		},
		message: {fontSize: 20, fontWeight: '700'},
	});
