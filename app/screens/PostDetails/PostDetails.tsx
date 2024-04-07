import type {PostType} from '@types';
import {StyleSheet, View} from 'react-native';
import {usePostDetails} from './hooks';
import {CommentsList} from './components';
import {
	AppText,
	BoxWrapper,
	Loader,
	PostItem,
	ScreenWrapper,
} from '@components';

export const PostDetails = ({route}: {route: {params: {post: PostType}}}) => {
	const {post} = route?.params;

	const {isLoading, comments, error, loadMore, loadMoreLoading} =
		usePostDetails(post?.id);

	const moreThanFourComments = comments.length > 4;
	return (
		<ScreenWrapper edges={['bottom']} style={styles.container}>
			<View style={{}}>
				<PostItem post={post} />
				<AppText style={styles.title}>Comments</AppText>
			</View>
			<BoxWrapper
				style={[
					styles.commentsContainer,
					moreThanFourComments && styles.fillRestScreen,
				]}>
				<Loader loading={isLoading} />

				{!isLoading && (
					<CommentsList
						comments={comments}
						loadMore={loadMore}
						loadMoreLoading={loadMoreLoading}
					/>
				)}
			</BoxWrapper>
		</ScreenWrapper>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
	},
	commentsContainer: {
		marginBottom: 10,
	},
	fillRestScreen: {
		flex: 1,
		flexGrow: 1,
	},
	title: {
		marginTop: 10,
		marginBottom: 5,
		fontSize: 20,
		fontWeight: 'bold',
	},
});
