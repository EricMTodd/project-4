import React, { Component } from 'react'
import { Route, Switch, Link } from "react-router-dom";


class ThreadDetails extends Component {
    render() {
        const shownThread = this.props.location.state.threadPotato
        console.log("shownThread:", shownThread)
        return (
            <div className="ThreadDetails" >
                <h1>{shownThread.thread_title}</h1>
                <h4>{shownThread.thread_author}</h4>
                <button onClick={this.props.deleteThread.bind(null, shownThread.id)}>Delete</button>
            </div>
        )
    }
}


export default ThreadDetails;