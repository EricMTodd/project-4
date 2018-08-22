import React, { Component } from 'react'
import { Button, ListGroup, ListGroupItem, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CreatePost from "../CreatePost/createPost.jsx"
import Posts from "../Posts/posts.jsx"
import "./threadsDetails.css"


class ThreadDetails extends Component {
    render() {
        const shownThread = this.props.location.state.threadPotato
        console.log("shownThread:", shownThread)
        return (
            <Container>
                <Row >
                    <ListGroup>
                        <ListGroupItem>
                            <div className="ThreadDetails" >
                                <h1>{shownThread.thread_title}</h1>
                                <h6>{shownThread.thread_author}</h6>
                                <Button size="sm" color="danger" onClick={this.props.deleteThread.bind(null, shownThread.id)}>Delete</Button>
                                <br/>
                                <br/>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                        <h3 id="commentHead" >Make a comment on this thread</h3>
                            <CreatePost threadId = {shownThread.id} addPost = {this.props.addPost} />
                            <div id="postContainer" >
                                <Posts threadId = {shownThread.id} deletePost={this.props.deletePost} posts = {this.props.posts} showModal={this.props.showModal} />
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </Row>
            </Container>
        )
    }
}


export default ThreadDetails;