import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/displayposts";

function App() {

  const [posts, setPosts] = useState([{name: '', body: ' '}])

  return (
    <div>
      <DisplayPosts/> 
    </div>
  );
}

export default App;
