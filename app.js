/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getPosts } from  '/fetch-utils';

/* Get DOM Elements */
const postList = document.getElementById('post-list');

/* State */
let error = null;
let posts = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getPosts();
    error = response.error;
    posts = response.data;

    if (error) {
        displayError();
    }

    if (posts) {
        displayPosts();
    }
});

/* Display Functions */
