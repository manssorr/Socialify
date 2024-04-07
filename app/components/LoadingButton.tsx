import {AppText, Loader} from '@components';
import {colors} from '@utils';
import {ActivityIndicator} from 'react-native';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from 'react-native';

interface IProps extends TouchableOpacityProps {
	title?: string;
	loading?: boolean;
}

const LoadingButton = (props: IProps): React.ReactElement<IProps> => {
	return (
		<View style={styles.container}>
			<Loader loading={props.loading} color="white" />
			<TouchableOpacity {...props}>
				{props.children ? (
					props.children
				) : (
					<AppText style={{color: 'white'}}>{props.title}</AppText>
				)}
			</TouchableOpacity>
		</View>
	);
};

export default LoadingButton;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		backgroundColor: colors.button,
	},
});
