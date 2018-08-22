import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
    render(props) {
      return (
        <div>
        <Button color="danger" onClick={this.toggle}>Edit Post</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h4> Edit Post</h4></ModalHeader>
          <ModalBody>
            <form onSubmit={this.props.closeAndEdit}>
              <label>
                Edit Post:
                <input type="text" name="post_author" onChange={this.props.handleFormChange} value={this.props.postToEdit.post_author}/>
              </label>
              <label>
                Edit Description:
                <input type="text" name="post_content" onChange={this.props.handleFormChange} value={this.props.postToEdit.post_content}/>
              </label>
              <br/>
              <Button color="primary" type="submit">Submit</Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" size="sm" onClick={props.showModal.bind(null,post.id)}> Jim's Modal </Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
        )
    }
  }

export default EditPost;