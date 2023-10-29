import React from 'react'
import rocketImage from '../assets/rocket-launch.png';
import Sidebar from './Sidebar';
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const imageStyle = {
  width: '300px', 
};

function Reels() {
  return (
    <div style={containerStyle}>
       <Sidebar/>
      <h1>Search</h1>
      <img 
        src={rocketImage} alt="Rocket Launch" style={imageStyle} />
      <p style={{color:"white"}}>Coming Soon</p>
    </div>
  )
}

export default Reels
