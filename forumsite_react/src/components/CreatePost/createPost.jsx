import React, { Component } from "react";

class CreatePost extends Component{
    constructor(){
        super();

        this.state = {
            post_content: "",
            post_author: "",
            post_date: "",
        }
    }
    updatePost = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    render(){
        console.log(this.props, 'this is props')
        return(
            <form onSubmit={this.props.addPost.bind(null, this.sate)}>
                <label>
                    Content:
                    <input type="text" name="post_content" onChange={this.updatePost}/>
                </label>
                <label>
                    Author:
                    <input type="text" name="post_author" onChange={this.updatePost}/>
                </label>
                <label>
                    Date:
                    <input type="text" name="post_date" onChange={this.updatePost}/>
                </label> 
                <input type="submit"/>
            </form>
        )
    }
}

export default CreatePost;