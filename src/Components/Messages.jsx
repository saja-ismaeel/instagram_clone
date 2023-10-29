import React from "react";
import nurse from "../assets/Avatars/nurse.png";
import cockman from "../assets/Avatars/cock-man.png";
import man from "../assets/Avatars/man.png";
import shopassistant from "../assets/Avatars/shop-assistant.png";
import steward from "../assets/Avatars/steward.png";
import { Link } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
const account1 = {
  name: "Saja.Ismaeel",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  marginRight: "30px",
  color: "white",
};

const pstyle = {
  display: "inline",
  fontWeight: "bold",
  color: "white",
  textAlign: "left",
  margin: "2px",
  marginLeft: "28px",
};

const maindivStyle = {
  width: "345px",
  position: "fixed",
  right: 0,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginRight: " 1057px",
  borderRight: "1px solid #1d1d1d",
};


const accounts = [
  {
    image: nurse,
    name: "user1",
    messages: "Lorem ipsum dolor sit amet.",
    time: "•2m",
    read: true,
    stat:"•"
  },
  {
    image: cockman,
    name: "user2",
    messages: "Lorem ipsum dolor sit amet.",
    time: "•15m",
    read: true,
    stat:"•"
  },
  {
    image: shopassistant,
    name: "user3",
    messages: "Lorem ipsum dolor sit amet.",
    time: "•27m",
    read: false,
    stat:"•"
  },
  {
    image: steward,
    name: "user4",
    messages: "Lorem ipsum dolor sit amet.",
    time: "•5h",
    read: false,
    stat:"•"
  },
  {
    image: man,
    name: "user5",
    messages: "Lorem ipsum dolor sit amet.",
    time: "•1d",
    read: true,
    stat:"•"
  },
];

export default function Messages() {
  return (
  <ThemeProvider theme={theme}>
    <div
    
      style={{
        borderBottom: "1px solid gray",
        flexDirection: "column",
      }}
    >
      <div style={maindivStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "27px",
          }}
        >
          <div style={divStyle}>
            <p style={pstyle}>{account1.name}</p>
            <div>
              <KeyboardArrowDownIcon style={{ paddingTop: "5px", color: "white" }} />
            </div>
            <div>
              <EditNoteIcon style={{ marginLeft: "125px", color: "white" }} />
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #1d1d1d",
            display: "flex",
            justifyContent: "space-between",
            width: "99%",
          }}
        >
          <p
            style={{
              marginLeft: "20px",
              color: "white",
              marginBottom: "5px",
              fontWeight: "bold",
              alignSelf: "flex-start",
            }}
          >
            Messages
          </p>
          <Link
            style={{
              marginRight: "20px",
              textDecoration: "none",
              color: "grey",
              marginBottom: "5px",
              alignSelf: "flex-end",
            }}
          >
            Request
          </Link>
        </div>
        <div style={{ listStyle: "none", padding: "10px", textAlign: "left" }}>
          {accounts.map((account, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "3px",
                padding: "6px",
                color:  "white" ,
              }}
            >
              <img
                src={account.image}
                alt={account.name}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              />
              <div style={{ marginLeft: "10px", color: "graye" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "left",
                 
                    display:"inline",
                  }}
                >
                  {account.name}
                </p>
                <div style={{ marginTop: "-8px" }}>
                <p
                  style={{
                    display: "inline",
                    margin: "0",
                    color: account.read ? "grey" : "white",
                  }}
                >
                  {account.messages}
                </p>
                
                
                <p
                  style={{
                    display: "inline",
                    margin: "0",
                    paddingLeft: "18px",
                    color: account.read ? "grey" : "white",
                  }}
                >
                  {account.time}
                </p>
                <p
                  style={{
                    display: "inline",
                    margin: "0",
                    fontSize: "30px",

                    marginLeft: "2px",
                                        color: account.read ? "black" : "#1976d2",
                  }}
                >
                  {account.stat}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </ThemeProvider>
  );
}
