import {colors} from '@utils';
import {StyleSheet, Text, View, type TextProps} from 'react-native';

interface IProps extends TextProps {}

const AppText = (props: IProps): React.ReactElement<IProps> => {
	return (
		<Text {...props} style={[styles.text, props.style]}>
			{props.children}
		</Text>
	);
};

export default AppText;

const styles = StyleSheet.create({
	text: {
		color: colors.textPrimary,
	},
});
