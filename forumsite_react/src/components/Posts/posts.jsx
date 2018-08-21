import React from "react";

const Posts = (props) => {
    console.log(props);
    const postsList = props.posts.map((post, i) => {
        if (post.thread_id === props.threadId) {
            return (
                <li key = {post.id}>
                    <small> {post.post_author}</small>
                    <p>{post.post_content}</p>
                    <p>This is the thread id! {props.threadId}</p>
                    <button onClick={props.deletePost.bind(null,post.id)}> Delete </button>
                    <button onClick={props.showModal.bind(null,post.id)}> Edit </button> 
                </li> 
            )
        }
    })
    return (
        <ul>
            {postsList}
        </ul>
    )
}

export default Posts