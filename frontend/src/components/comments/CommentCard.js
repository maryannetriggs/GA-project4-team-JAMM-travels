import React from 'react'

const CommentCard = ({ comment, author, date }) => (
  <div className="card Commentcard">
    <div className="card-header">
      <div className="card-title h5">
        {author}
        {date}
      </div>
    </div>
    <div className="card-body">
      {comment}
    </div>
    <br />
  </div>
)

export default CommentCard