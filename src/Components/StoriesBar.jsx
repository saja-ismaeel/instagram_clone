import React from 'react';
import '../App.css';

import driverImage from '../assets/StoriesAvatars/driver.png';
import farmerAvatarImage from '../assets/StoriesAvatars/farmer-avatar.png';
import femaleChefImage from '../assets/StoriesAvatars/female-chef.png';
import flightAttendantImage from '../assets/StoriesAvatars/flight-attendant.png';
import graduatedStudentImage from '../assets/StoriesAvatars/graduated-student.png';
import saleswomanImage from '../assets/StoriesAvatars/saleswoman.png';

const profileImages = [
  {
    image: driverImage,
    name: 'Driver', 
  },
  {
    image: farmerAvatarImage,
    name: 'Farmer',
  },
  {
    image: femaleChefImage,
    name: 'Chef',
  },
  {
    image: flightAttendantImage,
    name: 'Attend',
  },
  {
    image: graduatedStudentImage,
    name: 'Student',
  },
  {
    image: saleswomanImage,
    name: 'Sale',
  },
  
  {
    image: farmerAvatarImage,
    name: 'Farmer2',
  },
  {
    image: saleswomanImage,
    name: 'Sales2',
  }
];

function StoriesBar() {
  return (
    <div className="stories-bar">
      {profileImages.map((profile, index) => (
        <div key={index} className="story-item">
          <img style={{width:"60px", height:"60px"}} src={profile.image} alt={`User ${index + 1}`} />
          <p className="name">{profile.name}</p>
        </div>        
      ))}
    </div>




  );
}

export default StoriesBar;
