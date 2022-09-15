import React, {useState}from "react";
import apiURL from "../api";

// set field states all states are needed here
export const Form = ({setIsAddingArticle, fetchPages }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");



// make the event event handling for the post method 
    const handleSubmit = async (event) => {
        event.preventDefault();
        //await the response for the fetched wiki URL
        const response = await fetch(`${apiURL}/wiki`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
           // can use JSON.parse to return to object
           // date is created when making the post 
            
           title :  title, 
           content : content,
           name : name,
           email : email,
           tags : tags,
            })
          });

          
          const data = await response.json();
          fetchPages();
          //Reset the state
          setName("");
          setEmail("");
          setTitle("");
          setContent("");
          setTags("");
    };

    
        return (
            <>
            {/* You need to callt he form and handle the submitions */}
              <form onSubmit={handleSubmit}>
                <input value ={name} type = "text"
                // when the event changes (onChange) what happens? 
                  onChange={(event) => setName(event.target.value)}
                //   Don't forget to add the author's name
                  placeholder="Author Name"
                />
                {/* Add another input change event for the email */}
                <input value={email} type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                
                {/* Add a change event to set the title */}
                <input type="text" value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Article Title"
                />
                {/* This input will allow your content to be added */}
                <input value={content} type="text"
                  onChange={(event) => setContent(event.target.value)}
                  placeholder="Content"
                />
                 {/* Add a change event to set the tag*/}
                <input value={tags} type="text" onChange={(event) => setTags(event.target.value)} placeholder="Tag" />
                {/* add a button for submitting a new post */}
                <button type="submit">Create New Post</button>
                {/* Is the article(?) setIsAddingArticle onClick button */}
                <button onClick={() => setIsAddingArticle(false)}>Back to Wiki List!</button>
               
              </form>         

            </>
        )
        };