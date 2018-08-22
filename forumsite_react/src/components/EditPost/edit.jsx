import React from 'react';


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
        <input type='Submit'/>
      </form>
    </div>
    )
  }

export default EditPost;