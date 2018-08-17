import React from "react";

const Threads = (props) => {
    console.log("props:", props)
    const threadsList = props.threads.map((thread, i) => {
        return (
            <li key = {thread.id}>
                <span>{thread.thread_title}</span><br/>
{/*                 
                 { <button onClick={props.deleteThread.bind(null,thread.id)}> Delete </button>
                <button onClick={props.showModal.bind(null,thread.id)}> Edit </button>  } 
                 */}

            </li> 
        )
    })
    return (
        <ul>
            {threadsList}
        </ul>
    )
}

export default Threads