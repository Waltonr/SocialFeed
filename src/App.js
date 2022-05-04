import React, { useState } from "react";
import CreatePost from "./Components/CreatePost/createpost";
import DisplayPosts from "./Components/DisplayPosts/displayposts";
import Post from "./Components/Post/post";

function App() {

  const [posts, setPosts] = useState([{name: 'Ray', body: 'Hey'}])

  function addNewPost(post){
    let tempPosts = [post, ...posts];

    setPosts(tempPosts)
  }
  return (
    <div>
      <h1>App</h1>
      <CreatePost addNewPostProperty={addNewPost}/>
      <DisplayPosts parentPost={posts}/>
    </div>
  );
}

export default App;
