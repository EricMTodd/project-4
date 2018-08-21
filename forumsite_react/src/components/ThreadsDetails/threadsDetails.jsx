import React, { Component } from 'react'
import { Route, Switch, Link } from "react-router-dom";
import CreatePost from "../CreatePost/createPost.jsx"
import Posts from "../Posts/posts.jsx"


class ThreadDetails extends Component {
    render() {
        const shownThread = this.props.location.state.threadPotato
        console.log("shownThread:", shownThread)
        return (
            <div className="ThreadDetails" >
                <h1>{shownThread.thread_title}</h1>
                <h4>{shownThread.thread_author}</h4>
                <button onClick={this.props.deleteThread.bind(null, shownThread.id)}>Delete</button>
                <CreatePost threadId = {shownThread.id} addPost = {this.props.addPost} />
                <Posts threadId = {shownThread.id} deletePost={this.props.deletePost} posts = {this.props.posts} showModal={this.props.showModal} />
            </div>
        )
    }
}


export default ThreadDetails;