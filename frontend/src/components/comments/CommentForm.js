import React from 'react'

const CommentForm = ({ commentFormData, handleChange, handleSubmit }) => (
  <div className="card Commentcard">
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <label>Please leave us a comment</label>
        <input
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