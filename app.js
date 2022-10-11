/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getPosts } from '/fetch-utils.js';
import { renderPosts } from '/render-utils.js';

/* Get DOM Elements */
const bulletinBoard = document.getElementById('bulletin-board');
const errorDisplay = document.getElementById('error-display');

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
function displayError() {
    if (error) {
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}

function displayPosts() {
    bulletinBoard.innerHTML = '';

    for (const post of posts) {
        const postEl = renderPosts(post);
        bulletinBoard.append(postEl);
    }
}


