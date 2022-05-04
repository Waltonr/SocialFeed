import React, {Fragment} from "react";
import Post
 from "../Post/post";
const DisplayPosts = (props) => {

    return ( 
        <Fragment>
            {props.parentPost.map((postRecord, index) => {
                return(
                    <Post postRecord={postRecord} />
                )
                }
            )}
        </Fragment>
    );
}
 
export default DisplayPosts;