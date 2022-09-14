import React from 'react';
import apiURL from "../api"

export const Page = ({ page, setArticleData, setIsClicked }) => {
  // displayAuthorData to fetch info on Author
  const displayAuthorData = async () => {
    const response = await fetch(`${apiURL}/wiki/${page.slug}`);
    const data = await response.json();

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC
    //https://stackoverflow.com/questions/11171746/reverse-of-json-stringify

    data.createdAt = `${data.createdAt.slice(8, 10)}/${data.createdAt.slice(5, 7)}/${data.createdAt.slice(0, 4)}`;
    setArticleData(data);
    setIsClicked(true);
  };

  return <>
    <h3 onClick={() => displayAuthorData(page)}>{page.title}</h3>
  </>
} 
	