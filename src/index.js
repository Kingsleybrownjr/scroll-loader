import { showPosts, filterPosts, showLoading } from './views/posts';

const filter = document.querySelector('#filter');

showPosts();

window.addEventListener('scroll', () => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

	if (scrollTop + clientHeight >= scrollHeight - 5) {
		showLoading();
	}
});

filter.addEventListener('input', filterPosts);
