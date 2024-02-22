import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


const Comments = ({ comments, handleLikeComment, handleUpdate, handleDelete }) => {
  return (
    <div className="mt-3">
      <h6 style={{ fontSize: '0.9rem' }}>Comments:</h6>
      {comments.map((comment, index) => (
        <div key={index} className="d-flex justify-content-between align-items-center mb-2">
          <p style={{ fontSize: '0.9rem', marginRight: '10px', flex: 1 }}>
            {comment.text}
          </p>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={comment.liked ? faHeart : faHeart}
              className={`mr-2 ${comment.liked ? 'text-danger' : ''}`}
              onClick={() => handleLikeComment(comment.id)}
            />
            <FontAwesomeIcon
              icon={faEdit}
              className="mr-2"
              onClick={() => handleUpdate(comment.id)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => handleDelete(comment.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
