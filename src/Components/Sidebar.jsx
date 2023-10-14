import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InstagramLogo from "../assets/instagram-logo.png";
import CreatePostModal from './CreatePostModal'; 
import { Link } from "react-router-dom";
//my img
import saleswomanImage from '../assets/StoriesAvatars/saleswoman.png';
function Sidebar() {
  const iconAndTextStyles = { color: "#FFFFFF" };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeListItem, setActiveListItem] = useState(null);

  const handleCreatePost = ({ title, body, imageUrl }) => {
    console.log('Creating a new post:', { title, body, imageUrl });
  };

  const openModal = (item) => {
    setIsModalOpen(true);
    setActiveListItem(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveListItem(null);
  };

  return (
    <div
      style={{
        width: "250px",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #1d1d1d",
        alignItems: "center",
      }}
    >
      <img
        src={InstagramLogo}
        alt="Instagram Logo"
        style={{ width: "120px", margin: "30px auto" }}
      />
      <List>
        <Link to="/home">
          <ListItem button>
            <ListItemIcon style={iconAndTextStyles}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" style={iconAndTextStyles} />
          </ListItem>
        </Link>
        <Link to="/search">
          <ListItem button>
            <ListItemIcon style={iconAndTextStyles}>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Search" style={iconAndTextStyles} />
          </ListItem>
        </Link>
        <Link to="/explore">
          <ListItem button>
            <ListItemIcon style={iconAndTextStyles}>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" style={iconAndTextStyles} />
          </ListItem>
        </Link>
        <Link to="/reels">
          <ListItem button>
            <ListItemIcon style={iconAndTextStyles}>
              <SlideshowIcon />
            </ListItemIcon>
            <ListItemText primary="Reels" style={iconAndTextStyles} />
          </ListItem>
        </Link>
        <Link to="/messages">
          <ListItem button>
            <ListItemIcon style={iconAndTextStyles}>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" style={iconAndTextStyles} />
          </ListItem>
        </Link>
        <Link to="/notifications">
          <ListItem button>
            <ListItemIcon style={iconAndTextStyles}>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" style={iconAndTextStyles} />
          </ListItem>
        </Link>
        <ListItem button onClick={() => openModal("Create")}>
          <ListItemIcon style={iconAndTextStyles}>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Create" style={iconAndTextStyles} />
        </ListItem>
        {activeListItem === "Create" && (
          <CreatePostModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            createPost={handleCreatePost}
          />
          
        )}
        <Link to="/profile">
  <ListItem button>
    <ListItemIcon style={iconAndTextStyles}>
      <img src={saleswomanImage} alt="My Proile Img" style={{ width: "24px" }} />
    </ListItemIcon>
    <ListItemText primary="Saja Ismaeel" style={iconAndTextStyles} />
  </ListItem>
</Link>

      </List>

      <Link >
    <ListItem button style={{ position: "absolute", bottom: "20px", left: "10px" }}>
      <ListItemIcon style={iconAndTextStyles}>
        <MenuIcon />
      </ListItemIcon>
      <ListItemText primary="Menu" style={iconAndTextStyles} />
    </ListItem>
  </Link>
    </div>
  );
}

export default Sidebar;
