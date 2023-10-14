// // CreatePost.jsx
// import React, { useState } from 'react';

// function CreatePost() {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Creating a new post:', { title, body, imageUrl });
//     setTitle('');
//     setBody('');
//     setImageUrl('');
//   };

//   return (
//     <div>
//       <h1>Create Post</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Body"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//         />
//         <button type="submit">Create Post</button>
//       </form>
//     </div>
//   );
// }

// export default CreatePost;
