import React, { useState } from "react";
const Post = (props) => {
  const { postRecord } = props;

  const [likedButton, setLikedButton] = useState("liked");
  const [dislikedButton, setDislikedButton] = useState("disliked");

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{postRecord.name}</td>
            <td>{postRecord.body}</td>
          </tr>
          <button onClick={likedButton}></button>
          <button onClick={dislikedButton}></button>
        </tbody>
      </table>
    </div>
  );
};

export default Post;
