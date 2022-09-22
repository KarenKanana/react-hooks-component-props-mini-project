import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";



console.log(blogData);

function App() {
  return (
    <div className="App">
      <About image={blogData.image} about={blogData.about}/>
      <Header name={blogData.name}/>
      <ArticleList post={blogData.posts}/>
    </div>
  );
}

export default App;
