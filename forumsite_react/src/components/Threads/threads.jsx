import React from "react";
import { Media } from 'reactstrap'
import ThreadDetails from '../ThreadsDetails/threadsDetails.jsx'
import { Route, Switch, Link } from "react-router-dom"


const Threads = (props) => {
    console.log("threads.jsx props:", props)
    const threadsList = props.threads.map((thread, i) => {
        return (
    <div key = {thread.id}>
    <h1>{thread.id}</h1>
      <Media>
        <Media body>
          <Media heading>
          <span>{thread.thread_title}</span><br/>
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
        <ul>
            {threadsList}
        </ul>
    )
}

export default Threads