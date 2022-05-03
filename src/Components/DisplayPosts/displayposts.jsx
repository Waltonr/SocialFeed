import React from "react";

const DisplayPosts = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>User's Name</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {props.map((post, index) => {
                    return(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{post.name}</td>
                            <td>{post.body}</td>
                        </tr>
                    );

                

            })};
            </tbody>
        </table>
     );
}
 
export default DisplayPosts;