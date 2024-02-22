import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import Comments from './Comments';

const Post = ({ post, onLike, onComment }) => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
   
    const storedComments = JSON.parse(localStorage.getItem('comments')) || {};
    const postComments = storedComments[post.id] || [];
    setComments(postComments);

    
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    const postLikeStatus = storedLikes[post.id] || false;
    setLiked(postLikeStatus);
  }, [post.id]);

  const generateUUID = () => {
    return uuidv4();
  };

  const handleLike = () => {
    setLiked(!liked);
    onLike(post.id, !liked);

    
    const likes = JSON.parse(localStorage.getItem('likes')) || {};
    likes[post.id] = !liked;
    localStorage.setItem('likes', JSON.stringify(likes));
  };

  const handleComment = () => {
    const newComment = {
      id: generateUUID(), 
      text: comment,
      liked: false,
    };

    onComment(post.id, newComment);
    setComment('');

  
    const newComments = [...comments, newComment];
    setComments(newComments);

    const allComments = JSON.parse(localStorage.getItem('comments')) || {};
    allComments[post.id] = newComments;
    localStorage.setItem('comments', JSON.stringify(allComments));
  };

  const handleUpdate = (commentId) => {
    
    const updatedText = prompt('Update comment:', comments.find(comment => comment.id === commentId).text);
    if (updatedText !== null) {
      const updatedComments = comments.map((comment) =>
        comment.id === commentId ? { ...comment, text: updatedText } : comment
      );
      setComments(updatedComments);

      
      const allComments = JSON.parse(localStorage.getItem('comments')) || {};
      allComments[post.id] = updatedComments;
      localStorage.setItem('comments', JSON.stringify(allComments));
    }
  };

  const handleDelete = (commentId) => {
    
    const shouldDelete = window.confirm('Are you sure you want to delete this comment?');
    if (shouldDelete) {
      const updatedComments = comments.filter((comment) => comment.id !== commentId);
      setComments(updatedComments);

      
      const allComments = JSON.parse(localStorage.getItem('comments')) || {};
      allComments[post.id] = updatedComments;
      localStorage.setItem('comments', JSON.stringify(allComments));
    }
  };

  const handleLikeComment = (commentId) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? { ...comment, liked: !comment.liked } : comment
    );
    setComments(updatedComments);

    
    const allComments = JSON.parse(localStorage.getItem('comments')) || {};
    allComments[post.id] = updatedComments;
    localStorage.setItem('comments', JSON.stringify(allComments));
  };

  return (
    <div className="card mt-3">
      <img
        src={post.image}
        className="card-img-top"
        alt="Post Image"
        style={{ width: '100%', height: '300px' }}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '1.2rem' }}>{post.title}</h5>
        <p className="card-text" style={{ fontSize: '0.8rem' }}>{post.content}</p>

       
        <button className={`btn ${liked ? 'btn-danger' : 'btn-outline-danger'} btn-sm`} onClick={handleLike}>
          <FontAwesomeIcon icon={faHeart} /> {liked ? 'Unlike' : 'Like'}
        </button>
        <hr />

       
        <Comments
          comments={comments}
          handleLikeComment={handleLikeComment}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />

        
        <div className="mt-2">
          <input
            type="text"
            placeholder="Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control mr-2"
          />
          <br />
          <button className="btn btn-primary" onClick={handleComment}>
          Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
