import {StyleSheet, View} from 'react-native';
import {colors} from '@utils';
import {AppText, UserAvatar} from '@components';

interface IProps {
	user: {
		name?: string;
		id: string | number;
	};
	idPrefix?: string;
}

const UserInfo = ({
	user: {name = 'Unknown User', id},
	idPrefix = '@',
}: IProps): React.ReactElement<IProps> => {
	return (
		<View style={styles.userContainer}>
			{/* Avater */}
			<UserAvatar />
			{/* User Name */}
			<View style={styles.userInfo}>
				<AppText style={styles.txtUserName}>{name}</AppText>
				<AppText style={styles.txtId}>
					{idPrefix}
					{id}
				</AppText>
			</View>
		</View>
	);
};

export default UserInfo;

const styles = StyleSheet.create({
	// user info
	userContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	userInfo: {
		marginLeft: 10,
		justifyContent: 'space-between',
	},
	txtUserName: {
		marginBottom: 2,
		fontWeight: 'bold',
	},
	txtId: {
		color: colors.textSecondary,
	},
});
