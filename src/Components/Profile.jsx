import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AppsIcon from '@mui/icons-material/Apps';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

// Posts images
import ExplorePic1 from '../assets/ExplorePics/explorePic1.jpg';
import ExplorePic2 from '../assets/ExplorePics/explorePic2.jpg';
import ExplorePic3 from '../assets/ExplorePics/explorePic3.jpg';
import ExplorePic4 from '../assets/ExplorePics/explorePic4.jpg';
import ExplorePic5 from '../assets/ExplorePics/explorePic5.jpg';

// Tagged images
import ExplorePic6 from '../assets/ExplorePics/explorePic6.jpg';
import ExplorePic7 from '../assets/ExplorePics/explorePic7.jpg';
import ExplorePic8 from '../assets/ExplorePics/explorePic8.jpg';
import ExplorePic9 from '../assets/ExplorePics/explorePic9.jpg';

// Reels images
import ExplorePic10 from '../assets/ExplorePics/explorePic10.webp';
import ExplorePic11 from '../assets/ExplorePics/explorePic11.webp';
import ExplorePic12 from '../assets/ExplorePics/explorePic12.webp';
import ExplorePic13 from '../assets/ExplorePics/explorePic13.webp';
import ExplorePic14 from '../assets/ExplorePics/explorePic14.webp';

// My image
import saleswomanImage from '../assets/StoriesAvatars/saleswoman.png';

export default function ImageAvatars() {
  const [value, setValue] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const postsImages = [
    { image: ExplorePic1, title: "ex1" },
    { image: ExplorePic2, title: "ex2" },
    { image: ExplorePic3, title: "ex3" },
    { image: ExplorePic4, title: "ex4" },
    { image: ExplorePic5, title: "ex5" },
  ];

  const taggedImages = [
    { image: ExplorePic6, title: "tagged1" },
    { image: ExplorePic7, title: "tagged2" },
    { image: ExplorePic8, title: "tagged3" },
    { image: ExplorePic9, title: "tagged4" },
  ];

  const reelsImages = [
    { image: ExplorePic10, title: "reel1" },
    { image: ExplorePic11, title: "reel2" },
    { image: ExplorePic12, title: "reel3" },
    { image: ExplorePic13, title: "reel4" },
    { image: ExplorePic14, title: "reel5" },
  ];

  const images = value === 0 ? postsImages : value === 1 ? reelsImages : taggedImages;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
  };

  const avatarStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const headerStyle = {
    color: 'white',
    fontSize: '24px',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '12px',
    padding: '4px 12px',
    marginRight:'5px',
    marginLeft:'5px'
  };

  return (
    <div style={containerStyle}>
      <Box>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={saleswomanImage} alt="My Photo" style={avatarStyle} />
          <span style={headerStyle}>Saja.Ismaeel</span>
          <Button style={buttonStyle} variant="contained">
            Edit Profile
          </Button>
          <Button style={buttonStyle} variant="contained">
            View Actions
          </Button>
          <SettingsIcon style={{ color: 'white', fontSize: '24px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ color: 'white', fontSize: '18px', marginRight: '20px' }}>5 Posts</span>
          <span style={{ color: 'white', fontSize: '18px', marginRight: '20px' }}>371 Followers</span>
          <span style={{ color: 'white', fontSize: '18px' }}>1410 Following</span>
        </div>
        <span style={{ color: 'white', fontSize: '18px', marginBottom: '10px' }}>
          The things You own end up owning you.
        </span>
        <Tabs style={{ color: '#1D1D1D' }} value={value} onChange={handleChange} aria-label="icon position tabs example">
          <Tab style={{ color: 'white' }} icon={<AppsIcon />} iconPosition="start" label="POSTS" />
          <Tab style={{ color: 'white' }} icon={<BookmarkBorderIcon />} iconPosition="start" label="REELS" />
          <Tab style={{ color: 'white' }} icon={<AssignmentIndIcon />} iconPosition="start" label="TAGGED" />
        </Tabs>
        <ImageList sx={{ width: 450, height: 390 }} cols={3} rowHeight={165}>
          {images.map((image, index) => (
            <ImageListItem key={index}>
              <img src={image.image} alt={image.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}