import React, { useState } from "react";

const CreatePost = (props) => {
    const [name, setName] = useState(' ');
    const [body, setBody] = useState(' ')

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            body: body
        };
        console.log(newPost)
        props.addNewPostProperty(newPost)

    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label>Post</label>
                <input type="text" value={body} onChange={(event) => setBody(event.target.value)} />
            </div>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CreatePost;