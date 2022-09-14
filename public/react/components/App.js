import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Article } from './Article';
import { Form } from './Form';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [isClicked, setIsClicked] = useState(false);

	//set the state for getting article data (articleData, setArticleData)
	const [articleData, setArticleData] = useState();

	//set a new state boolean for when an article is added
	const [isAddingArticle, setIsAddingArticle] = useState(false);

	async function fetchPages(){
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
			{isClicked} ? ( <Article articleData = {articleData} setIsClicked = {setIsClicked}/>) :
			isAddingArticle ? (<Form setIsAddingArticle	= {setIsAddingArticle}/>) : (
				<div>
					<h1>WikiVerse</h1>
					<h2>An interesting 📚</h2>
					<PagesList pages={pages} />

					{/* add button for creating the page*/}
					<button onClick{() => setIsAddingArticle(true)}>Create Page</button>
				</div>
			)
      
		</main>
	)
}