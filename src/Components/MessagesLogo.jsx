import React from "react";
import Button from "@mui/material/Button";
import Messengar from "../assets/messengar-logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
function MessagesLogo() {
  return (
    <ThemeProvider theme={theme}>
    <div style={{ textAlign: "center", position: "fixed", marginTop: "224px" }}>
      <img src={Messengar} alt="Messengar Logo" style={{ width: "100px", height: "100px",margin: "auto" }} />
      <h2 style={{ color: "white", paddingTop: "10px" }}>Your Messages</h2>
      <h3 style={{ color: "gray", paddingTop: "10px" }}>
        Send private photos and messages to a friend or group
      </h3>
      <Button variant="contained" disableElevation>
        SEND MESSAGE
      </Button>
    </div>
    </ThemeProvider>
  );
}

export default MessagesLogo;
