import React from "react";
import "../App.css";
import boy from "../assets/Avatars/boy.png";
import farmerAvatarImage from "../assets/StoriesAvatars/farmer-avatar.png";
import femaleChefImage from "../assets/StoriesAvatars/female-chef.png";
import flightAttendantImage from "../assets/StoriesAvatars/flight-attendant.png";
import shopAssistant from "../assets/Avatars/shop-assistant.png";
import saleswomanImage from "../assets/StoriesAvatars/saleswoman.png";
import nurse from "../assets/Avatars/nurse.png";

const account1 = [
  {
    image: saleswomanImage,
    name: "Rana",
    followed: "Seba",
  },
];

const accounts = [
  {
    image: boy,
    name: "Ahmed",
    followed: "Ali",
  },
  {
    image: shopAssistant,
    name: "Mona",
    followed: "Raja",
  },
  {
    image: femaleChefImage,
    name: "Chef",
    followed: "Ali",
  },
  {
    image: flightAttendantImage,
    name: "Mera",
    followed: "Sama",
  },
  {
    image: nurse,
    name: "Laila",
    followed: "Toqa",
  },
];

function Suggestion() {
  return (
    
    <div>
      
      <div
        style={{
          width: "500px",
          position: "fixed",
          right: 0,
          top: "30px",
          height: "100%",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          {account1.map((account, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <img
                src={account.image}
                alt={account.name}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <div style={{ marginLeft: "10px", color: "white" }}>
                <p style={{ fontWeight: "bold", textAlign: "left" , margin: "2px"}}>{account.name}</p>
                <p style={{ color: "grey", margin: "0" }}>Followed by {account.followed}</p>
              </div>
              <p style={{ color: "blue", padding: "5px", marginLeft: "100px" }}>
                Follow
              </p>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", justifyContent: "space-between", width: "65%" }}>
          <p style={{ color: "grey", marginBottom: "5px", fontWeight: "bold", alignSelf: "flex-start" }}>
            Suggestions for you
          </p>
          <p style={{ color: "white", marginBottom: "5px", alignSelf: "flex-end" }}>See More</p>
        </div>
        <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
          {accounts.map((account, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "3px", 
              }}
            >
              <img
                src={account.image}
                alt={account.name}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <div style={{ marginLeft: "10px", color: "white" }}>
                <p style={{ fontWeight: "bold", textAlign: "left" , margin: "2px"}}>{account.name}</p>
                <p style={{ color: "grey", margin: "0" }}>Followed by {account.followed}</p>
              </div>
              <p style={{ color: "blue", padding: "5px", marginLeft: "100px" }}>
                Follow
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Suggestion;
