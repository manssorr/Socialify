import {colors} from '@utils';
import {StyleSheet, type ViewStyle} from 'react-native';
import {
	SafeAreaView,
	type SafeAreaViewProps,
} from 'react-native-safe-area-context';

interface IProps extends SafeAreaViewProps {
	children: React.ReactNode;
	style?: ViewStyle;
}

const ScreenWrapper = (props: IProps): React.ReactElement<IProps> => {
	return (
		<SafeAreaView {...props} style={[styles.container, props.style]}>
			{props.children}
		</SafeAreaView>
	);
};

export default ScreenWrapper;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		paddingHorizontal: 10,
	},
});
