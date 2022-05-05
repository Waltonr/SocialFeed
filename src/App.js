import React, { useState } from "react";
import CreatePost from "./Components/CreatePost/createpost";
import DisplayPosts from "./Components/DisplayPosts/displayposts";
import Post from "./Components/Post/post";
import "./App.css"

function App() {

  const [posts, setPosts] = useState([{name: 'Ray', body: 'Hey'}])

  function addNewPost(post){
    let tempPosts = [post, ...posts];

    setPosts(tempPosts)
  }
  return (
    <div className="container">
      <div className="row">
        <h3 style={{fontSize: "2em"}}>Social<small className="text-muted">Feed</small></h3>
        <div className="border-box">
          <CreatePost addNewPostProperty={addNewPost}/>
        </div>
        <div className="border-box">
          <DisplayPosts parentPost={posts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
