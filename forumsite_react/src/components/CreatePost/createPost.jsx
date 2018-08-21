import React, { Component } from "react";

class CreatePost extends Component{
    constructor(props){
        super(props);

        this.state = {
            post_content: "",
            post_author: "",
            thread_id: this.props.threadId,
        }
    }
    updatePost = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    render(){
        console.log(this.props, 'this is props')
        return(
            <form onSubmit={this.props.addPost.bind(null, this.state)}>
                <label>
                    Content:
                    <input type="text" name="post_content" onChange={this.updatePost}/>
                </label>
                <label>
                    Author:
                    <input type="text" name="post_author" onChange={this.updatePost}/>
                </label>
                <input type="submit"/>
            </form>
        )
    }
}

export default CreatePost;