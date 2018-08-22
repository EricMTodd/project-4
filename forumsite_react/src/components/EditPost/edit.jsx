import React from 'react';
import { Button } from 'reactstrap';


const EditPost = (props) =>  {
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

export default EditPost;