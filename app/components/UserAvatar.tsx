import {colors} from '@utils';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-ui-lib';

interface IProps {}

const UserAvatar = (props: IProps): React.ReactElement<IProps> => {
	return (
		<View style={styles.container}>
			<Avatar
				containerStyle={styles.imageContainer}
				imageStyle={styles.image}
				source={require('../assets/images/avatar.png')}
				backgroundColor="white"
			/>
		</View>
	);
};

export default UserAvatar;

const styles = StyleSheet.create({
	container: {
		borderColor: colors.secondary,
		borderWidth: 1.4,
		borderRadius: 100,
		backgroundColor: 'white',
		overflow: 'hidden',
		width: 50,
		height: 50,
	},
	imageContainer: {
		margin: 5,
	},
	image: {
		width: '80%',
		height: '80%',
		marginTop: 5,
		borderRadius: 0,
	},
});
