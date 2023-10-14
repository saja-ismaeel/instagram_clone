import { Avatar } from "@mui/material";
import React from "react";
import messengar from '../assets/messengar-logo.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import boy from "../assets/Avatars/boy.png";
import nurse from '../assets/Avatars/nurse.png';
import cockman from "../assets/Avatars/cock-man.png";
import man from "../assets/Avatars/man.png";
import shopassistant from "../assets/Avatars/shop-assistant.png";
import steward from "../assets/Avatars/steward.png";
import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const account1 = [
  {
    name: "Saja.Ismaeel",
  },
];

const accounts = [
  {
    image: nurse,
    name: "user1",
    followed: "Lorem ipsum dolor sit amet.",
    time: "•2m",
  },
  {
    image: cockman,
    name: "user2",
    followed: "Lorem ipsum dolor sit amet.",
    time: "•15m",
  },
  {
    image: shopassistant,
    name: "user3",
    followed: "Lorem ipsum dolor sit amet.",
    time: "•27m",
  },
  {
    image: steward,
    name: "user4",
    followed: "Lorem ipsum dolor sit amet.",
    time: "•5h",
  },
  {
    image: man,
    name: "user5",
    followed: "Lorem ipsum dolor sit amet.",
    time: "•1d",
  },
];

export default function Messages() {
  return (
    <div
      style={{
        borderBottom: "1px solid gray",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "320px",
          position: "fixed",
          right: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "800px",
          borderRight: "1px solid #1d1d1d",
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
              }}
            >
              <div
                style={{
                  marginRight: "30px",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    display: "inline",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "left",
                    margin: "2px",
                  }}
                >
                  {account.name} <KeyboardArrowDownIcon />
                </p>
                <EditNoteIcon style={{ marginLeft: "5px", color: "white" }} />
              </div>
            </li>
          ))}
        </ul>

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
        <ul style={{ listStyle: "none", padding: "10px", textAlign: "left" }}>
          {accounts.map((account, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "3px",
                padding: "6px",
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
              <div style={{ marginLeft: "10px", color: "white" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    margin: "2px",
                  }}
                >
                  {account.name}
                </p>
                <p
                  style={{
                    display: "inline",
                    color: "grey",
                    margin: "0",
                  }}
                >
                  {account.followed}
                </p>
                <p
                  style={{
                    display: "inline",
                    color: "grey",
                    margin: "0",
                  }}
                >
                  {account.time}
                </p>
              </div>
            </li>
 ))}
        </ul>
      </div>
    </div>
  );
}
