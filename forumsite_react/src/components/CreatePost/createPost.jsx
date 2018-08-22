import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


class CreatePost extends Component{
    constructor(props){
        super(props);

        this.state = {
            post_content: "",
            post_author: "",
            thread_id: this.props.threadId,
        }
    }
    updatePost = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col xs="auto">
                            <Form inline onSubmit={this.props.addPost.bind(null, this.state)} >
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label className="mr-sm-2">Author</Label>
                                    <Input type="text" name="post_author" onChange={this.updatePost} />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label className="mr-sm-2">Content</Label>
                                    <Input type="text" name="post_content" onChange={this.updatePost} />
                                </FormGroup>
                                <Button color="primary" type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CreatePost;