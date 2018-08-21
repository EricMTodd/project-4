import React, { Component } from "react";
import { Media } from 'reactstrap'
import ThreadDetails from '../ThreadsDetails/threadsDetails.jsx'
import { Route, Switch, Link } from "react-router-dom"
import { browserHistory } from 'react-router'


class Threads extends Component {
    handleClick = (showThread) => {
        browserHistory.push({
            pathname: "/show/" + showThread.id,
            state: {threadDetails: showThread}
        });
    }
    render() {
        const threadsList = this.props.threads.map((thread, i) => {
            console.log("thread:", thread)
            return (
        <div key = {thread.id}>
          <Media>
            <Media body>
              <Media heading>
              <li onClick={this.handleClick.bind(this, this.showThread)}><span>{thread.thread_title}</span></li><br/>
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
                    {this.threadsList}
                </ul>
            </div>
        )
    }
}


export default Threads