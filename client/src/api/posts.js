import axios from 'axios';

const API = axios.create({
  baseURL: 'https://week-7-devops-deployment-assignment-dnr6.onrender.com/api',
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (postData) => API.post('/posts', postData);
