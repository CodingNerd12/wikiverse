import React from "react";
// import and prepend the api url to any fetch calls
import apiURL from '../api';

// Set the state for articleData and set the click
export const Article = ({ articleData, setIsClicked, fetchPages }) => {
    //this is where we delete the article and auto-refresh
    const deleteAuthorData = async () => {
        window.location.reload(false);
        const response = await fetch(`${apiURL}/wiki/${articleData.slug}`, {
            method: "DELETE"
        });
        const data = await response.json();

    }
    return (
        <div className="articleDisplay">
            <h1>{articleData.title}</h1>
            <p className="authorArticle"><strong>Author:</strong> {articleData.author.name}</p>
            <p className="pubDate"><strong>Published:</strong> {articleData.createdAt}</p>
            <p className="contentArticle"><strong>Content:</strong> {articleData.content}</p>
            <p className="tagArticle"><strong>Tags:</strong></p>
            {articleData.tags.map((tag, idx) => {
                return <p key={idx}>{tag.name}</p>
            })}
            <div className="articleButtons">
                <button onClick={() => setIsClicked(null)}>Back to Wiki List</button>
                <button onClick={deleteAuthorData}> Delete this article?</button>
            </div>
        </div>
    )
}