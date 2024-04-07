import {useEffect, useState} from 'react';
import {
	fetchCommentsByPostId,
	fetchMoreCommentsByPostId,
	selectComments,
	selectError,
	selectIsLoading,
	useAppDispatch,
	useAppSelector,
} from '@redux';

export const usePostDetails = (postId: number) => {
	const dispatch = useAppDispatch();
	const comments = useAppSelector(selectComments);
	const isLoading = useAppSelector(selectIsLoading);
	const error = useAppSelector(selectError);

	const [loadMoreLoading, setGetMoreLoading] = useState(false);

	useEffect(() => {
		comments.length === 0 && dispatch(fetchCommentsByPostId(postId));
	}, [dispatch]);

	const loadMore = async () => {
		if (comments.length >= 9 && !loadMoreLoading) {
			setGetMoreLoading(true);
			setTimeout(() => {
				dispatch(fetchMoreCommentsByPostId(postId));
				setGetMoreLoading(false);
			}, 2000);
		}
	};

	return {
		comments,
		error,
		isLoading,
		loadMore,
		loadMoreLoading,
	};
};
