import React from "react";
import Grid from "@mui/material/Grid";

import Messages from "./Messages";
import MessagesLogo from "./MessagesLogo";
import Sidebar from "./Sidebar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
function MessagesPage() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3}>
        <Sidebar/>
        </Grid>
        <Grid item xs={4}>
          <Messages />
        </Grid>

        <Grid item xs={5}>
          <MessagesLogo />
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}
export default MessagesPage;
