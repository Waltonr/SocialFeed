import React from "react";

const DisplayPosts = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>Body</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {props.parentPosts.map((post, index) => {
                    return(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{post.username}</td>
                            <td>{post.body}</td>
                            <td>{post.status}</td>
                        </tr>
                    );

                

            })};
            </tbody>
        </table>
     );
}
 
export default DisplayPosts;