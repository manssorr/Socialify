import type {PostList, PostType} from '@types';
import React from 'react';
import {View, FlatList, type FlatListProps} from 'react-native';
import {AppText, Loader, PostItem} from '@components';

interface IProps extends Omit<FlatListProps<PostType>, 'renderItem' | 'data'> {
	posts: PostList;
	loadMore: () => void;
	loadMoreLoading: boolean;
	onPressPost: (post: PostType) => void;
}

export const PostsList = ({
	posts,
	loadMore,
	loadMoreLoading,
	onPressPost,
	...props
}: IProps) => {
	return (
		<FlatList<PostType>
			data={posts}
			extraData={posts}
			renderItem={({item: post}) => (
				<PostItem onPress={() => onPressPost(post)} post={post} />
			)}
			keyExtractor={post => post.id.toString()}
			showsVerticalScrollIndicator={false}
			ListHeaderComponent={() => <View style={{height: 10}} />}
			ItemSeparatorComponent={() => <View style={{height: 20}} />}
			ListEmptyComponent={() => (
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<AppText style={{textAlign: 'center'}}> No posts found </AppText>
				</View>
			)}
			onEndReached={loadMore}
			onEndReachedThreshold={0.5}
			ListFooterComponent={
				<Loader text="Load more posts..." loading={loadMoreLoading} />
			}
			{...props}
		/>
	);
};
