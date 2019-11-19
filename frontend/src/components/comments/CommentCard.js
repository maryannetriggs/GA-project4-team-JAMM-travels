import React from 'react'

const CommentCard = ({ comment, author, date }) => (
  <div className="card comment-card">
    <div className="card-header">
      <div className="card-title h5">
        {author.username}
        <br/>
        <p className="comment-card-p">{date}</p>
      </div>
    </div>
    <div className="card-body">
      {comment}
    </div>
    <div className="card-footer card-comment-buttons">
      <button className="btn">Edit</button>
      <button className="btn">Delete</button>
    </div>
  </div>
)

export default CommentCard