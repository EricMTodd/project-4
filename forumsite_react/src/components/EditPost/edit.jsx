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
          <h4> Edit Post</h4>
          <form onSubmit={props.closeAndEdit}>
            <label>
              Edit Post:
              <input type="text" name="post_author" onChange={props.handleFormChange} value={props.postToEdit.post_author}/>
            </label>
            <label>
              Edit Description:
              <input type="text" name="post_content" onChange={props.handleFormChange} value={props.postToEdit.post_content}/>
            </label>
            <br/>
            <Button color="primary" type="submit">Submit</Button>
          </form>
        </div>
        )
    }
  }

export default EditPost;