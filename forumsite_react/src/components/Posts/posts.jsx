import React from "react";

const Posts = (props) => {
    console.log(props);
    const postsList = props.posts.map((post, i) => {
        return (
            <li key = {post.id}>
                <small> {post.post_content}</small>
                <button onClick={props.deletePost.bind(null,post.id)}> Delete </button>
                <button onClick={props.showModal.bind(null,post.id)}> Edit </button> 
            </li> 
        )
    })
    return (
        <ul>
            {postsList}
        </ul>
    )
}

export default Posts