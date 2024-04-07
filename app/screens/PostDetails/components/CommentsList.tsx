import type {CommentType, CommentList} from '@types';
import {FlatList, View, type FlatListProps} from 'react-native';
import CommentItem from './CommentItem';
import {colors} from '@utils';
import {AppText, Loader} from '@components';

interface IProps
	extends Omit<FlatListProps<CommentType>, 'renderItem' | 'data'> {
	comments: CommentList;
	loadMore: () => void;
	loadMoreLoading: boolean;
	loading?: boolean;
}

export const CommentsList = ({
	comments,
	loadMore,
	loadMoreLoading,
	loading = false,
	...props
}: IProps): React.ReactElement<IProps> => {
	return (
		<FlatList<CommentType>
			data={comments}
			extraData={comments}
			renderItem={({item}) => <CommentItem comment={item} />}
			keyExtractor={post => post.id.toString()}
			showsVerticalScrollIndicator={false}
			ListHeaderComponent={() => <View style={{height: 10}} />}
			// contentContainerStyle={{paddingBottom: 30}}
			ItemSeparatorComponent={() => (
				<View
					style={{
						height: 1,
						marginVertical: 5,
						backgroundColor: colors.border,
					}}
				/>
			)}
			ListEmptyComponent={() => (
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<AppText style={{textAlign: 'center', marginBottom: 10}}>
						{' '}
						No comments found{' '}
					</AppText>
				</View>
			)}
			onEndReached={loadMore}
			onEndReachedThreshold={0.5}
			ListFooterComponent={
				<Loader text="Load more comments..." loading={loadMoreLoading} />
			}
			{...props}
		/>
	);
};
