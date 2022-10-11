// export function renderPosts(posts) {
    
//     const li = document.createElement('li');

//     const titleEl = document.createElement('h2');
//     titleEl.textContent = posts.title;

//     const categoryEl = document.createElement('span');
//     categoryEl.title = posts.category;

//     const descriptionEl = document.createElement('p');
//     descriptionEl.textContent = posts.description;

//     const contactEl = document.createElement('p');
//     contactEl.textContent = posts.contact;

//     li.append(titleEl, categoryEl, descriptionEl, contactEl);

//     return li;
// }
export function renderPosts(posts) {
    const fragment = document.createDocumentFragment();

    const li = document.createElement('li');
    li.classList.add('post-it');

    const titleEl = document.createElement('h2');
    titleEl.textContent = posts.title;

    const categoryEl = document.createElement('span');
    categoryEl.classList.add('category');
    categoryEl.title = posts.category.name;
    categoryEl.textContent = posts.category.emoji;

    const descriptionEl = document.createElement('p');
    descriptionEl.classList.add('description');
    descriptionEl.textContent = posts.description;

    const contactEl = document.createElement('p');
    contactEl.textContent = posts.contact;

    li.append(titleEl, categoryEl, descriptionEl, contactEl);

    fragment.append(li);

    return li;
}