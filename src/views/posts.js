import renderPage from './renderPage';

renderPage();

const postRules = {
	limit: 5,
	page: 1,
};

// Fetch post from api
const getPosts = async () => {
	const { limit, page } = postRules;

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
	);

	return await res.json();
};

// Show post on DOM
const showPosts = async () => {
	const postContainer = document.querySelector('#post-container');

	const posts = await getPosts();

	posts.forEach(post => {
		const postEl = document.createElement('div');
		postEl.classList.add('post');

		const { id, title, body } = post;

		postEl.innerHTML = `
            <div class='number'>${id}</div>
            <div class='post-info'>
                <h2 class='post-title'>${title}</h2>
                <p class='post-body'>${body}</p>
            </div>
        `;

		postContainer.appendChild(postEl);
	});
};

// Filter out post by search term
const filterPosts = e => {
	const searchTerm = e.target.value;

	const posts = document.querySelectorAll('.post');

	posts.forEach(post => {
		const title = post.querySelector('.post-title').textContent.toLowerCase();
		const body = post.querySelector('.post-body').textContent.toLowerCase();

		if (title.indexOf(searchTerm) > -1 || body.indexOf(searchTerm) > -1) {
			post.style.display = 'flex';
		} else {
			post.style.display = 'none';
		}
	});
};

// Show loader and fetch more post
const showLoading = () => {
	const loading = document.querySelector('.loader');
	loading.classList.add('show');

	setTimeout(() => {
		loading.classList.remove('show');

		setTimeout(() => {
			postRules.page += 1;
			showPosts();
		}, 300);
	}, 1000);
};

export { showPosts, filterPosts, showLoading };
