import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, articleData, setArticleData, setIsClicked}) => {
	return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} key={idx} articleData={articleData} setArticleData={setArticleData} setIsClicked={setIsClicked} />
			})
		}
	</>
} 
