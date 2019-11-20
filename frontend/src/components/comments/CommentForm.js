import React from 'react'

const CommentForm = ({ commentFormData, handleChange, handleSubmit }) => (
  <div className="card comment-form">
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <label className="h5">PLEASE LEAVE US A COMMENT</label>
        <input
          className="form-input comment-form-input"
          name="comment"
          value={commentFormData.comment}
          onChange={handleChange}
          placeholder="Type Comment Here"
        />
      </div>
      <br />
      <div className="card-footer card-comment-buttons">
        <button className="btn">Submit</button>
      </div>
    </form>
  </div>
)

export default CommentForm