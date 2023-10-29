import React from "react";
import StoriesBar from "./StoriesBar";
import Suggestion from "./Suggestion";
import Posts from "./Posts";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
function Home() {
  
  return (
<ThemeProvider theme={theme}>
    <div>
      
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <Sidebar/>
        </Grid>
        <Grid item xs={5}>
          <StoriesBar />
          <br />
          <Posts />
          <br />
          <br />
          <br />
        </Grid>
        <Grid item xs={4}>
          <Suggestion />
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}

export default Home;
