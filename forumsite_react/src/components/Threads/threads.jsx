import React, { Component } from "react";
import { Media } from 'reactstrap'
import ThreadDetails from '../ThreadsDetails/threadsDetails.jsx'
import { Route, Switch, Link } from "react-router-dom"
import { browserHistory } from 'react-router'


class Threads extends Component {
    handleClick = (showThread) => {
        this.props.history.push({
            pathname: "/show/" + showThread.id,
            state: {threadDetails: showThread}
        });
    }
    render() {
        const threadsList = this.props.threads.map((thread, i) => {
            console.log("thread:", thread)
            return (
        <div key = {thread.id} id = {thread.id}>
          <Media>
            <Media body>
              <Media heading>
              <Link to={{
            pathname: "/show/" + thread.id,
            state: {threadDetails: thread.id}
        }}><span>{thread.thread_title}</span></Link><br/>
              </Media>
            </Media>
          </Media>
{/*                     
                     { <button onClick={props.deleteThread.bind(null,thread.id)}> Delete </button>
                    <button onClick={props.showModal.bind(null,thread.id)}> Edit </button>  } 
                     */}
                </div> 
            )
        })
        return (
            <div>
                <ul>
                    {threadsList}
                </ul>
            </div>
        )
    }
}


export default Threads