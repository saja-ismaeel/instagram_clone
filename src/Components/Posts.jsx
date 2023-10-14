import React, { useState } from "react";
import ExplorePic7 from '../assets/ExplorePics/explorePic7.jpg';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import saleswomanImage from '../assets/StoriesAvatars/saleswoman.png';

function Post() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleEdit = () => {
alert("handleEdit")  };

  const handleDelete = () => {
    alert("handleDelete")   };

  return (
    <div style={{ width: "590px" }}>
      <div style={{ backgroundColor: "black", display: "flex", alignItems: "center" }}>
        <Avatar alt="Remy Sharp" src={saleswomanImage} sx={{ width: "8%", height: "9%" }} />
        <span style={{ color: "white", marginLeft: "20px" }}>Saja.Ismaeel</span>
        <MoreVertIcon
          style={{ marginLeft: "auto", color: "white", cursor: "pointer" }}
          onClick={toggleDropdown}
        />
      </div>
      {isDropdownOpen && (
  <div style={{
    position: "absolute",
    backgroundColor: "#f1f1f1",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: "1",
    display: "block",
    left: "765px"
  }}>
    <a
      style={{
        color: "black",
        padding: "12px 16px",
        textDecoration: "none",
        display: "block"
        
      }}
      onClick={handleEdit}
    >
      Edit
    </a>
    <a
      style={{
        color: "black",
        padding: "12px 16px",
        textDecoration: "none",
        display: "block"
      }}
      onClick={handleDelete}
    >
      Delete
    </a>
  </div>
)}
      <img src={ExplorePic7} style={{ marginTop: "10px", width: "100%" }} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "white", padding: "10px" }}>
        <div>
          <FavoriteBorderIcon style={{ color: "white" }} />
          <SendIcon style={{ color: "white", marginLeft: "10px" }} />
        </div>
        <div>
          <BookmarkBorderRoundedIcon style={{ color: "white" }} />
        </div>
      </div>

      <h5 style={{ color: "white", display: "flex", marginTop: "-1px" }}>600 Likes</h5>
      <h6 style={{ color: "white", display: "flex", marginTop: "-15px" }}>Saja.Ismaeel</h6>

      <div style={{ textAlign: "left", color: "white", marginTop: "-40px", display: "flex", padding: "-10px" }}>
        <h6>Color blue represents both the sky and the sea and is associated with open spaces, freedom, intuition, imagination, inspiration, and sensitivity.</h6>
      </div>
    </div>
  );
}

export default Post;
