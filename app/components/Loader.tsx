import {AppText} from '@components';
import {colors} from '@utils';
import {type ViewStyle} from 'react-native';
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	View,
	type ActivityIndicatorProps,
} from 'react-native';

interface IProps extends ActivityIndicatorProps {
	wrapperStyle?: ViewStyle;
	loading?: boolean;
	text?: string;
}

const Loader = (props: IProps): React.ReactElement<IProps> => {
	if (!props.loading) return <></>;
	return (
		<View style={[styles.container, props.wrapperStyle]}>
			<ActivityIndicator color={colors.secondary} size="small" {...props} />
			{props.text && <AppText>{props.text}</AppText>}
		</View>
	);
};

export default Loader;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
});
