export function renderPosts(posts) {
    
    const li = document.createElement('li');

    const titleEl = document.createElement('h2');
    titleEl.textContent = posts.title;

    const categoryEl = document.createElement('span');
    categoryEl.title = posts.category;

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = posts.description;

    const contactEl = document.createElement('p');
    contactEl.textContent = posts.contact;

    li.append(titleEl, categoryEl, descriptionEl, contactEl);

    return li;
}
