import {apiFetchCommentsByPostId, apiFetchPosts} from '@networking';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {CommentList, PostType, CommentType, PostList} from '@types';
import type {AxiosError} from 'axios';

export interface IRootState {
	posts: PostList;
	comments: CommentList;
	isLoading: boolean;
	error: string;
	postsPage: number;
	commentsPage: number;
}

const initialState = {
	isLoading: false,
	error: '',

	posts: [],
	comments: [],

	postsPage: 2,
	commentsPage: 2,
};
const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts: (state, action) => {
			state.posts = action.payload;
		},
		setComments: (state, action) => {
			state.comments = action.payload;
		},
	},
	extraReducers: builder => {
		// posts/fetchPosts
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.posts = action.payload;

			state.isLoading = false;
			state.error = '';
		});
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.error = action.error.message ?? 'Something went wrong';
			state.isLoading = false;
		});

		// posts/fetchMorePosts
		builder.addCase(fetchMorePosts.fulfilled, (state, action) => {
			// filter duplicate posts
			const filteredNewPosts = action.payload.filter(
				(post: PostType) =>
					!state.posts.find((p: PostType) => p.id === post.id),
			);
			state.posts = state.posts.concat(filteredNewPosts);
			state.error = '';
			state.postsPage = state.postsPage + 1;
		});
		builder.addCase(fetchMorePosts.pending, (state, action) => {});
		builder.addCase(fetchMorePosts.rejected, (state, action) => {
			state.error = action.error.message ?? 'Something went wrong';
		});

		// posts/fetchCommentsByPostId
		builder.addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
			state.comments = action.payload;
			state.error = '';
			state.isLoading = false;
		});
		builder.addCase(fetchCommentsByPostId.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchCommentsByPostId.rejected, (state, action) => {
			state.error = action.error.message ?? 'Something went wrong';
			state.isLoading = false;
		});
		// posts/fetchMoreCommentsByPostId
		builder.addCase(fetchMoreCommentsByPostId.fulfilled, (state, action) => {
			// filter duplicate comments
			const filteredNewComments = action.payload.filter(
				(comment: CommentType) =>
					!state.comments.find((c: CommentType) => c.id === comment.id),
			);
			state.comments = state.comments.concat(filteredNewComments);
			state.error = '';
			state.commentsPage = state.commentsPage + 1;
		});
		builder.addCase(fetchMoreCommentsByPostId.pending, (state, action) => {});
		builder.addCase(fetchMoreCommentsByPostId.rejected, (state, action) => {
			state.error = action.error.message ?? 'Something went wrong';
		});
	},
});

export const fetchPosts = createAsyncThunk(
	'posts/fetchPosts',
	async (_, thunkAPI: any) => {
		try {
			const res = await apiFetchPosts();
			if (res.status === 200) {
				return res?.data;
			}
			return [];
		} catch (err: any) {
			const error: AxiosError = err;
			console.log(`error.toJSON()`, JSON.stringify(error.toJSON(), null, 2));
			return thunkAPI.rejectWithValue(error.toJSON());
		}
	},
);

export const fetchMorePosts = createAsyncThunk(
	'posts/fetchMorePosts',
	async (_, thunkAPI: any) => {
		const newPage = thunkAPI.getState().posts.postsPage;
		try {
			const res = await apiFetchPosts(newPage);
			if (res.status === 200) {
				return res?.data;
			}
			return [];
		} catch (err: any) {
			const error: AxiosError = err;
			console.log(`error.toJSON()`, JSON.stringify(error.toJSON(), null, 2));
			return thunkAPI.rejectWithValue(error.toJSON());
		}
	},
);

export const fetchCommentsByPostId = createAsyncThunk(
	'posts/fetchCommentsByPostId',
	async (postId: number, thunkAPI: any) => {
		try {
			const res = await apiFetchCommentsByPostId(postId);
			if (res.status === 200) {
				return res?.data;
			}
			return [];
		} catch (err: any) {
			const error: AxiosError = err;
			console.log(`error.toJSON()`, JSON.stringify(error.toJSON(), null, 2));
			return thunkAPI.rejectWithValue(error.toJSON());
		}
	},
);

export const fetchMoreCommentsByPostId = createAsyncThunk(
	'posts/fetchMoreCommentsByPostId',
	async (postId: number, thunkAPI: any) => {
		console.log(`fetchMoreCommentsByPostId`, fetchMoreCommentsByPostId);
		try {
			const newPage = thunkAPI.getState().posts.commentsPage;
			const res = await apiFetchCommentsByPostId(postId, newPage);
			if (res.status === 200) {
				return res?.data;
			}
			return [];
		} catch (err: any) {
			const error: AxiosError = err;
			return thunkAPI.rejectWithValue(error.toJSON());
		}
	},
);

export const {setPosts, setComments} = postsSlice.actions;
export const postsReducer = postsSlice.reducer;

// selectors
export const selectPosts = (state: any) => state.posts.posts;
export const selectComments = (state: any) => state.posts.comments;
export const selectIsLoading = (state: any) => state.posts.isLoading;
export const selectError = (state: any) => state.posts.error;
