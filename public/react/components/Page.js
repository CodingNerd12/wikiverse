import React from 'react';
import apiURL from "../api"

export const Page = ({ page, setArticleData, setIsClicked }) => {
  // displayAuthorData to fetch info on Author
  const displayAuthorData = async () => {
    const response = await fetch(`${apiURL}/wiki/${page.slug}`);
    const data = await response.json();

    data.createdAt = `${data.createdAt.slice(8, 10)}/${data.createdAt.slice(5, 7)}/${data.createdAt.slice(0, 4)}`;
    setArticleData(data);
    setIsClicked(true);
  };

  return <>
    <h3 onClick={() => displayAuthorData(page)}>{page.title}</h3>
  </>
} 