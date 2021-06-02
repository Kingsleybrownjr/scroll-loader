const renderPage = () => {
	const rootDiv = document.querySelector('#root');

	rootDiv.innerHTML = `
		<h1>My Blog</h1>

		<div class="filter-container">
			<input
				type="text"
				id="filter"
				class="filter"
				placeholder="Filter posts.."
			/>
		</div>

		<div id="post-container"></div>

		<div class="loader">
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
		</div>    
    
    `;

	return rootDiv;
};

export { renderPage };
