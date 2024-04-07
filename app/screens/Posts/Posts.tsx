import {PostsList} from './Components';
import {usePosts} from './hooks';
import {Loader, ScreenWrapper} from '@components';
import {showToast} from '@config';

export const Posts = ({}: {}) => {
	const {isLoading, onPressPost, posts, error, loadMore, loadMoreLoading} =
		usePosts();

	if (error) {
		console.log(`error`, error);
		showToast('ErrorInfo', error);
	}

	return (
		<ScreenWrapper edges={['bottom']}>
			<Loader loading={isLoading} />
			{!isLoading && (
				<PostsList
					loadMore={loadMore}
					loadMoreLoading={loadMoreLoading}
					posts={posts}
					onPressPost={onPressPost}
				/>
			)}
		</ScreenWrapper>
	);
};
