import React, { Component } from "react";

class CreatePost extends Component{
    constructor(){
        super();

        this.state = {
            title: "",
            body: "",
            author: "",
            date: "",
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
                    Title:
                    <input type="text" name="title" onChange={this.updatePost}/>
                </label>
                //^^^confirm title is not needed for posts
                <label>
                    Body:
                    <input type="text" name="body" onChange={this.updatePost}/>
                </label>
                <label>
                    Author:
                    <input type="text" name="author" onChange={this.updatePost}/>
                </label>
                <label>
                    Date:
                    <input type="text" name="date" onChange={this.updatePost}/>
                </label> 
                //^^^^we probably need to make date an automatic thing... 
                <input type="submit"/>
            </form>
        )
    }
}

export default CreatePost;