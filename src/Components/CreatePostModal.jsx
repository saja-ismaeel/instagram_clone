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

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1D1D1D",
  border: "1px solid #1D1D1D",
  boxShadow: 24,
 borderRadius:"10px",
 height:"200px",
 textAlign:"center"
};

export default function CreatePostModal({open,handleClose,setposts}) {

  const [postImg,setPostImg]=useState(null);
  const [postDesc,setPostDesc]=useState(null);
  const [postImageCover, setPostImageCover] = useState(null);
  const token = localStorage.getItem("token")


  const handleImageChange = (event) => {
    
    const file = event.target.files[0];
    setPostImg(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPostImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  };


  let formData = new FormData();

  formData.append("description", postDesc)
  formData.append("image", postImg)

  function handleSubmit(event) {
    event.preventDefault();


    axios.post("http://16.170.173.197/posts", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then((response) => {
      console.log("create", response)
      setposts((prevMomeris) => [...prevMomeris, response.data])
    }).catch((error) => {
      console.log("Error:", error)
    })

    handleClose()
  }
  return (
    <div >
    <Modal
    
      open={open}
      onClose={handleClose}

    >
      <Box sx={style} className="modalc">
        <Typography
       
          style={{
            fontFamily: " Poppins",
            fontSize: "10px",
            fontWeight: "400",
            textAlign: "center",
            margin: "5px",
          }}
        >
          Create new post
        </Typography>
        <Divider style={{ backgroundColor: "rgb(140,140,140)" }}></Divider>

        <div className="modal-body">
          <Container maxWidth="sm">
            <form>
              <div className="modalInputs">
                <h4
                  style={{
                    fontFamily: " Poppins",
                    fontSize: "10px",
                    fontWeight: "600",
                    margin: "0px",
                    color: "rgb(180,180,180)",
                  }}
                >
                  Title
                </h4>
                <input className="ModalInput"  value={postDesc}
          onChange={((e)=>{
            setPostDesc(e.target.value)
          })}
          required
          fullWidth
          ></input>
              </div>
              <div className="modalInputs">
                <h4
                  style={{
                    fontFamily: " Poppins",
                    fontSize: "10px",
                    fontWeight: "600",
                    margin: "0px",
                   
                  }}
                >
                  Body
                </h4>
              
               {postImageCover &&(<img
            src={postImageCover}
            alt="Uploaded"
            style={{ width: "100%", marginBottom: "1rem" }}
          />
               )}
                
              </div>
              <div className="modalInputs" style={{ textAlign: "center" }}>
                <label htmlFor="image-upload">
          
                </label>
                <input 
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
              </div>
              <div className="modalInputs" style={{ textAlign: "center" }}>
                <Button
                  sx={{
                    borderRadius: "18px",
                    fontFamily: " Poppins",
                    fontSize: "10px",
                    fontWeight: "700",
                    padding: "3px 25px",
                    backgroundColor: "rgb(33, 150, 243)",
                  }}
                  variant="contained"
                  type="submit"
                  
                  onClick={handleSubmit}
                >
                  Post
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </Box>
    </Modal>
  </div>
);
}
