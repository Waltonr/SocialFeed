import React, {Fragment} from "react";
import Post
 from "../Post/post";
const DisplayPosts = (props) => {

    return ( 
        <Fragment>
            {props.parentPost.map((postRecord, index) => {
                return(
                    <table>
                        <td><Post postRecord={postRecord} /></td>
                    </table>
                )
                }
            )}
        </Fragment>
    );
}
 
export default DisplayPosts;