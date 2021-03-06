import React, { useState } from "react";

const Post = (props) => {
  const { postRecord } = props;

  const [likedButton, setLikedButton] = useState("inactive");
  const [dislikedButton, setDislikedButton] = useState("inactive");

  function handleClick() {
    if(likedButton === "inactive"){
      setLikedButton("liked")
      setDislikedButton("inactive")
    }
    else if (dislikedButton === "inactive"){
      setDislikedButton('disliked')
      setLikedButton("inactive")
    }
  }

  return (
    <div>
      <table striped>
        <tbody>
          <tr>
            <td>{postRecord.name}</td>
            <td>{postRecord.body}</td>
          </tr>
          <div>
            <button className={likedButton} onClick={handleClick}></button>
            <button className={dislikedButton} onClick={handleClick}></button>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Post;
