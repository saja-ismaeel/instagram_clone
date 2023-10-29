import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from "@mui/material/CssBaseline";
import MoreVertIcon from '@mui/icons-material/MoreVert';import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const modalStyle = {
  position: "absolute",
  width: 400,
  backgroundColor: "#1d1d1d",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function PostIcon({ id, setposts, posts }) {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [newDescription, setNewDescription] = React.useState("");
  const token = localStorage.getItem("token");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handeldelete = (pId) => {
    axios
      .request({
        method: "delete",
        url: `http://16.170.173.197/posts/${pId}`,
        data: {
          id: pId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const updatedPosts = posts.filter((post) => {
          return post.id !== pId;
        });
        setposts(updatedPosts);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        alert('You do not have the permissions');
      });
      handleClose();
    };

  const handleEditPost = (pId) => {
    setEditModalOpen(true);
  };

  const handleEditPostSubmit = () => {
    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/posts/${id}`,
        data: {
          description: newDescription,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const updatedPosts = posts.map((post) =>
          post.id === id
            ? { ...post, description: newDescription }
            : post
        );
        setposts(updatedPosts);
        setNewDescription("");
        setEditModalOpen(false);
      })
      .catch((error) => {
        console.error("Error Editing post:", error);
        alert('You do not have the permissions');
        setEditModalOpen(false);
      });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={anchorEl ? "long-menu" : undefined}
          aria-expanded={anchorEl ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon/>
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
              marginLeft:"-150px"
            },
          }}
        >
          <MenuItem>
            <RemoveCircleOutlineIcon
              sx={{ fontSize: "1.5rem", marginRight: "9px", color: "red" }}
            />
            <span onClick={() => handeldelete(id)}>
              {" "}
              Delete
            </span>
          </MenuItem>
          <MenuItem onClick={() => handleEditPost(id)}>
            <EditIcon sx={{ fontSize: "1.5rem", marginRight: "9px",color: "green" }} />
            <span> Edit</span>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <CancelOutlinedIcon
              sx={{ fontSize: "1.5rem", marginRight: "9px" }}
            />
            <span> cancel</span>
          </MenuItem>
        </Menu>
        <Modal
          open={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          a
        >
          <Box sx={modalStyle}>
            <TextField
          
              label="New Description"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={() => {
                handleEditPostSubmit();
              }}
            >
              Save
            </Button>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}

export default PostIcon;