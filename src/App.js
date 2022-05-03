import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/displayposts";
import CreatePost from "./Components/CreatePost/createpost";

function App() {

  const [posts, setPosts] = useState([{name: 'Raven', body: 'Hi'}])

  function addNewPost(entry){
    let tempPosts = [entry, ...posts];

    setPosts(tempPosts)
  }
  return (
    <div>
      <DisplayPosts parentPosts={posts}/> 
      <CreatePost addNewEntryProperty={addNewPost}/>
    </div>
  );
}

export default App;
