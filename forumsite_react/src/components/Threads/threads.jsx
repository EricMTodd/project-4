import React, { Component } from "react";
import { Media } from 'reactstrap'
import { Link } from "react-router-dom"

const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }



const Threads = (props) => {
        const regex = new RegExp(escapeRegex(props.inputValue), "gi");
        const threadsList = props.threads.map((thread, id) => {
            if (thread.thread_title.match(regex)) {
                return (
                    <div key = {thread.id}>
                      <Media>
                        <Media body>
                          <Media heading>
                          <Link to={{
                        pathname: "/show/" + thread.id,
                        state: {threadPotato: thread}
                    }}><span>{thread.thread_title}</span></Link><br/>
                          </Media>
                        </Media>
                      </Media>
                            </div> 
                        )
            }

        })
        return (
            <div>
            <form action="" onSubmit={props.handleSearch}>
                <input type="text" value={props.inputValue} onChange={props.updateInputValue}/>
                {/* <input type="submit" value="submit"/> */}
            </form>
                <ul>
                    {threadsList}
                </ul>
            </div>
        )
    
}


export default Threads