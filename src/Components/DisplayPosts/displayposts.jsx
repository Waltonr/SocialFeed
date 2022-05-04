import React, {Fragment} from "react";
import Post
 from "../Post/post";
const DisplayPosts = (props) => {

    return ( 
        <Fragment>
            {props.parentPost.map((postRecord, index) => {
                return(
                     <div className="form-control">
                         <Post postRecord={postRecord} />
                     </div>
                )
                }
            )}
        </Fragment>
    );
}
 
export default DisplayPosts;