import axios from 'axios';

// set axios defaults
axios.defaults.baseURL = `https://gorest.co.in/public/v2`;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// add token to every request
axios.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${process.env.API_KEY}`;
	return config;
});

export const apiFetchPosts = async (page = 1) =>
	await axios.get(`posts?page=${page}`);

export const apiFetchCommentsByPostId = async (postId, page = 1) => {
	return await axios.get(`posts/${postId}/comments?page=${page}`);
};
