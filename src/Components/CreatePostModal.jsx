

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
