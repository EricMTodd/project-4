import React from "react";

const Posts = (props) => {
    const postsList = props.posts.map((post, i) => {
        return (
            <li key = {post.id}>
                <span>{post.title}</span><br/>
                <small> {post.body}</small>
                <button onClick={props.deletePost.bind(null,post.id)}> Delete </button>
                <button onClick={props.showModal.bind(null,post.id)}> Edit </button> 
            </li> 
        )
    })
    return 
    (
        <ul>
            {postsList}
        </ul>
    )
}

export default Posts