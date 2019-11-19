import React from 'react'

const CommentForm = ({ commentFormData, handleChange, handleSubmit }) => (
  <div className="card comment-card">
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <label>PLEASE LEAVE US A COMMENT</label>
        <input
          className="form-input"
          name="comment"
          value={commentFormData.comment}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <button className="btn">Submit</button>
      </div>
    </form>
  </div>
)

export default CommentForm