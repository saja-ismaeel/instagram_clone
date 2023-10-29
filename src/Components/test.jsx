// import React, { useState } from "react";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import CssBaseline from "@mui/material/CssBaseline";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import EditIcon from "@mui/icons-material/Edit";
// import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import axios from "axios";
// import EditPostModal from "./EditPostModal"; // Import the EditPostModal component

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

// function PostEdit({ id, setposts, posts }) {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const token = localStorage.getItem("token");

//   const handleEditOpen = () => {
//     setEditModalOpen(true);
//     handleClose();
//   };

//   function getPosts() {
//     axios
//       .get("http://16.170.173.197/posts", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then(function (response) {
//         setposts(response.data.posts);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   const ITEM_HEIGHT = 48;

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   function handeldelete(pId) {
//     axios
//       .request({
//         method: "delete",
//         url: `http://16.170.173.197/posts/${pId}`,
//         data: {
//           id: pId,
//         },
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const updatedPosts = posts.filter((post) => {
//           return post.id !== pId;
//         });
//         setposts(updatedPosts);
//       })
//       .catch((error) => {
//         console.error("Error deleting post:", error);
//         alert('You do not have the permissions');
//       });
//       handleClose();
//   }

//   const handleEditPost = (pId, newDescription) => {
//     axios
//       .request({
//         method: "put",
//         url: `http://16.170.173.197/posts/${pId}`,
//         data: {
//           description: newDescription,
//         },
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const updatedPosts = posts.map((post) => {
//           if (post.id === pId)
//             return { ...post, description: newDescription };
//           else
//             return post;
//         });
//         setposts(updatedPosts);
//       })
//       .catch((error) => {
//         console.error("Error Editing post:", error);
//         alert('You do not have the permissions');
//       });
//       handleClose();
//   };

//   return (
//     <div>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <IconButton
//           aria-label="more"
//           id="long-button"
//           aria-controls={open ? "long-menu" : undefined}
//           aria-expanded={open ? "true" : undefined}
//           aria-haspopup="true"
//           onClick={handleClick}
//         >
//           <MoreHorizIcon />
//         </IconButton>
//         <Menu
//           id="long-menu"
//           MenuListProps={{
//             "aria-labelledby": "long-button",
//           }}
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           PaperProps={{
//             style: {
//               maxHeight: ITEM_HEIGHT * 4.5,
//               width: "20ch",
//             },
//           }}
//         >
//           <MenuItem>
//             <DeleteForeverIcon
//               sx={{ fontSize: "1.5rem", marginRight: "9px", color: "red" }}
//             />
//             <span onClick={() => handeldelete(id)} style={{ color: "red" }}>
//               {" "}
//               Delete
//             </span>
//           </MenuItem>
//           <MenuItem onClick={handleEditOpen}>
//             <EditIcon sx={{ fontSize: "1.5rem", marginRight: "9px" }} />
//             <span> Edit</span>
//           </MenuItem>
//           <MenuItem onClick={handleClose}>
//             <CancelOutlinedIcon
//               sx={{ fontSize: "1.5rem", marginRight: "9px" }}
//             />
//             <span> cancel</span>
//           </MenuItem>
//         </Menu>
//       </ThemeProvider>

//       {/* Edit Post Modal */}
//       <EditPostModal
//         open={editModalOpen}
//         handleClose={() => setEditModalOpen(false)}
//         handleEditPost={handleEditPost}
//         postId={id}
//       />
//     </div>
//   );
// }

// export default PostEdit;



import React, { useState } from 'react';
// import Modal from 'react-modal';
// import Dropzone from 'react-dropzone';
// import '../App.css';
// import { Description } from '@mui/icons-material';

// Modal.setAppElement('#root');

// function CreatePostModal({ isOpen, onRequestClose, createPost }) {
//   const [Description, setDescription] = useState(null);
//   const [image, setImage] = useState(null);
//   // const [image, setImage] = useState(null);

//   const handleImageDrop = (acceptedFiles) => {
//     if (acceptedFiles && acceptedFiles.length > 0) {
//       const selectedImage = acceptedFiles[0];
//       setImage(selectedImage);
//     }
//   };

//   const handleSubmit = () => {
//     if (image && Description) {
//       createPost({ Description, image });
//       onRequestClose();
//     } else {
//       alert("Please provide both description and image to create a post.");
//     }
//   };

//   const modalStyle = {
//     content: {
//       background: '#1d1d1d',
//       border: 'none',
//       maxWidth: '800px',
//       margin: 'auto',
//       height: '500px',
//       width: '600px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       borderRadius: '15px',
//       padding: '20px',
//     },
//     overlay: {
//       background: 'rgba(0, 0, 0, 0.5)',
//     },
//   };

//   const inputStyle = {
//     backgroundColor: '#333131',
//     color: 'white',
//     border: '1px solid white',
//     borderRadius: '8px',
//     width: '500px',
//     height: '200px',
//     marginBottom: '15px',
//   };

//   const labelStyle = {
//     color: 'white',
//     marginBottom: '5px',
//   };

//   const buttonStyle1 = {
//     backgroundColor: '#1a62e3',
//     color: '#fff',
//     width: '400px',
//     height: '30px',
//     border: 'none',
//     borderRadius: '45px',
//   };
//   const buttonStyle2 = {
//     backgroundColor: '#1a62e3',
//     color: '#fff',
//     width: '80px',
//     height: '30px',
//     border: 'none',
//     borderRadius: '45px',
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={modalStyle}
//       contentLabel="Create Post Modal"
//     >
//       <h3
//         style={{
//           Top: 0,
//           textAlign: 'center',
//           width: '100%',
//           color: '#fff',
//           borderBottom: '1px solid gray',
//           paddingBottom: '10px',
//         }}
//       >
//         Create New Post
//       </h3>
//       <div style={{ marginBottom: '15px' }}>
//         <label style={labelStyle}>Description</label>

//         <input
//           type="text"
//           value={Description}
//           onChange={(e) => setDescription(e.target.value)}
//           style={inputStyle}
//         />
//       </div>
//       <br />
// <button style={buttonStyle1}>
//       <Dropzone onDrop={handleImageDrop}>
//         {({ getRootProps, getInputProps }) => (
//           <div
//             {...getRootProps()}
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <input {...getInputProps()} />
//             {image ? (
//               <div>
//                 <p>Selected Image: {image.name}</p>
//               </div>
//             ) : (
//               <p>Drag & drop an image here, or click to select one</p>
//             )}
//           </div>
//         )}
//       </Dropzone>
//       </button>
// <br></br>
//       <button style={buttonStyle2} onClick={handleSubmit}>
//         Post
//       </button>
//     </Modal>
//   );
// }

// export default CreatePostModal;


// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import '../App.css'
// Modal.setAppElement('#root'); 

// function CreatePostModal({ isOpen, onRequestClose, createPost }) {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   const handleSubmit = () => {
//     createPost({ title, body, imageUrl });
//     onRequestClose();
//   };

//   const modalStyle = {
//     content: {
//       background:  '#1d1d1d',
//       border: 'none',
//       maxWidth: '410px', 
//       margin: 'auto',
//       height: '500px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       borderRadius: '15px',
//       padding: '20px',
//     },
//     overlay: {
//       background: 'rgba(0, 0, 0, 0.5)', 
//     },
//   };

//   const inputStyle = {
//     backgroundColor: '#333131', 
//     color: 'white', 
//     border: '1px solid white', 
//     borderRadius: '8px', 
//     width: '400px',
//    height: '27px',
//     marginBottom: '15px',
//   };

//   const labelStyle = {
//     color: 'white',
//     marginBottom: '5px',
//   };

//   const buttonStyle = {
//     backgroundColor: '#1a62e3', 
//     color: '#fff',
//     width: '50px',
//     height:'25px',
//     border: 'none',
//     borderRadius: '45px',
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={modalStyle}
//       contentLabel="Create Post Modal"
//     >
//       <h2 style={{ color: '#fff', borderBottom: '1px solid #1d1d1d', paddingBottom: '10px' }}>Create a New Post</h2>
//       <div style={{ marginBottom: '15px' }}>
//         <label style={labelStyle}>Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           style={inputStyle}
//         />
//       </div>

//     <div className="body-txt" style={{ marginBottom: '15px' }}>
//         <label style={labelStyle}>Body</label>
//         <input
//           type="text"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//           style={inputStyle}
//         />
//       </div>

//       <div style={{ marginBottom: '15px' }}>
//         <label style={labelStyle}>Image URL</label>
//         <input
//           type="text"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//           style={inputStyle}
//         />
//       </div>
//       <button style={buttonStyle} onClick={handleSubmit}>
//         Post
//       </button>
//     </Modal>
//   );
// }

// export default CreatePostModal;