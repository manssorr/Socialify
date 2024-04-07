import {showToast} from '@config';
import {useEffect, useState} from 'react';
import {
	fetchMorePosts,
	fetchPosts,
	selectError,
	selectIsLoading,
	selectPosts,
	useAppDispatch,
	useAppSelector,
} from '@redux';
import {useNavigation} from '@react-navigation/native';
import type {PostType} from '@types';

export const usePosts = () => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation();
	const posts = useAppSelector(selectPosts);
	const isLoading = useAppSelector(selectIsLoading);
	const error = useAppSelector(selectError);

	const [loadMoreLoading, setGetMoreLoading] = useState(false);

	useEffect(() => {
		posts.length === 0 && dispatch(fetchPosts());
	}, []);

	const loadMore = async () => {
		if (posts.length > 0 && !loadMoreLoading) {
			setGetMoreLoading(true);
			setTimeout(() => {
				dispatch(fetchMorePosts());
				setGetMoreLoading(false);
			}, 2000);
		}
	};

	const onPressPost = (post: PostType) => {
		navigation.navigate('PostDetails', {post});
	};

	return {
		posts,
		error,
		isLoading,
		loadMore,
		loadMoreLoading,
		onPressPost,
	};
};
