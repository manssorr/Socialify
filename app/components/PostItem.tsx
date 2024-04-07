import React from 'react';
import {StyleSheet, TouchableOpacity, View, type ViewProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PostType} from '@types';
import UserInfo from './UserInfo';
import {AppText, BoxWrapper} from '@components';

interface IProps extends ViewProps {
	post: PostType;
	onPress?: () => void;
}

const PostItem = ({post, onPress}: IProps) => {
	const WrapperComponent: any = onPress ? TouchableOpacity : View;

	return (
		<WrapperComponent onPress={onPress}>
			<BoxWrapper>
				{/* User Info */}
				<UserInfo user={{id: post.user_id}} />
				{/* Content */}
				<View style={styles.contentContainer}>
					<AppText>{post.body}</AppText>
				</View>
			</BoxWrapper>
		</WrapperComponent>
	);
};

export default PostItem;

const styles = StyleSheet.create({
	contentContainer: {
		marginTop: 10,
	},
});
