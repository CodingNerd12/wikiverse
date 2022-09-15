import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Article } from './Article';
import { Form } from './Form';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	//set the clicking states
	const [isClicked, setIsClicked] = useState(false);
	//set the state for getting article data (articleData, setArticleData)
	const [articleData, setArticleData] = useState(null);
	//set a new state boolean for when an article is added
	const [isAddingArticle, setIsAddingArticle] = useState(false)


	async function fetchPages() {
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	useEffect(() => {
		fetchPages();
	}, []);
	return (
		<main>
			{isClicked ? (
				<Article articleData={articleData} setIsClicked={setIsClicked} />
			) :
				isAddingArticle ? (
					<Form setIsAddingArticle={setIsAddingArticle} fetchPages={fetchPages} />
				) : (
					<div className='showPageHeader'>
						<span>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</span>
						<h1>WikiVerse</h1>
						<h2>📚 View Pages Here 📚</h2>
						<div className='articleList'>
							<PagesList pages={pages} setArticleData={setArticleData} setIsClicked={setIsClicked} />
							<span>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</span>
							{/* Add the button for adding an Article */}
							<button onClick={() => setIsAddingArticle(true)}>Create a Page</button>
							{/* Add the button for updating an Article */}

						</div>
					</div>
				)}
			<footer>&#169; Wikiverse 2022</footer>
		</main>
	)
}