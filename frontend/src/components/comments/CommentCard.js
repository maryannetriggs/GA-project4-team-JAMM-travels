import React from 'react'

const CommentCard = ({ comment, author, date }) => (
  <div className="card Commentcard">
    <div className="card-header">
      <div className="card-title h5">
        {author.username}
        <br/>
        {date}
      </div>
    </div>
    <div className="card-body">
      {comment}
    </div>
    <div className="card-footer">
      <button className="btn">Edit</button>
      <button className="btn">Delete</button>
    </div>
  </div>
)

export default CommentCard