import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css'
Modal.setAppElement('#root'); 

function CreatePostModal({ isOpen, onRequestClose, createPost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    createPost({ title, body, imageUrl });
    onRequestClose();
  };

  const modalStyle = {
    content: {
      background:  '#1d1d1d',
      border: 'none',
      maxWidth: '410px', 
      margin: 'auto',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '15px',
      padding: '20px',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)', 
    },
  };

  const inputStyle = {
    backgroundColor: '#333131', 
    color: 'white', 
    border: '1px solid white', 
    borderRadius: '8px', 
    width: '400px',
   height: '27px',
    marginBottom: '15px',
  };

  const labelStyle = {
    color: 'white',
    marginBottom: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#1a62e3', 
    color: '#fff',
    width: '50px',
    height:'25px',
    border: 'none',
    borderRadius: '45px',
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyle}
      contentLabel="Create Post Modal"
    >
      <h2 style={{ color: '#fff', borderBottom: '1px solid #1d1d1d', paddingBottom: '10px' }}>Create a New Post</h2>
      <div style={{ marginBottom: '15px' }}>
        <label style={labelStyle}>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
      </div>

    <div className="body-txt" style={{ marginBottom: '15px' }}>
        <label style={labelStyle}>Body</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={labelStyle}>Image URL</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button style={buttonStyle} onClick={handleSubmit}>
        Post
      </button>
    </Modal>
  );
}

export default CreatePostModal;
