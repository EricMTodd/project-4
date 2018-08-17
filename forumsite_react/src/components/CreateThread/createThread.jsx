import React, { Component } from "react";

class CreateThread extends Component{
    constructor(){
        super();

        this.state = {
            thread_title: "",
            thread_author: "",
            thread_date: "",
        }
    }
    updateThread = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    render(){
        console.log(this.props, 'this is props')
        return(
            <form onSubmit={this.props.addThread.bind(null, this.sate)}>
                <label>
                    Title:
                    <input type="text" name="thread_title" onChange={this.updateThread}/>
                </label>
                <label>
                    Author:
                    <input type="text" name="thread_author" onChange={this.updateThread}/>
                </label>
                <label>
                    Date:
                    <input type="text" name="thread_date" onChange={this.updateThread}/>
                </label> 
                <input type="submit"/>
            </form>
        )
    }
}

export default CreateThread;