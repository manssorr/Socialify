import {StyleSheet, View} from 'react-native';
import {CommentType} from '../../../types/commentType';
import {AppText, UserInfo} from '@components';

interface IProps {
	comment: CommentType;
}

const CommentItem = ({comment}: IProps): React.ReactElement<IProps> => {
	return (
		<View>
			<UserInfo user={{name: comment.name, id: comment.email}} />
			<AppText style={styles.txtContentContainer}>{comment.body}</AppText>
		</View>
	);
};

export default CommentItem;

const styles = StyleSheet.create({
	txtContentContainer: {
		marginLeft: 60,
		marginTop: 4,
	},
});
