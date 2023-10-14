import React from "react";
import StoriesBar from "./StoriesBar";
import Suggestion from "./Suggestion";
import Posts from "./Posts";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";

function Home() {
  return (
    // <div className="home">
    
    //   <div className="center-content">
    //     <StoriesBar />
    //   </div>
    //   {/* <div className="right-content">
    //     <Suggestion />
    //   </div> */}
    //   <div className="right-content">
    //     <Posts />
    //   </div>
    // </div>
    <div>
<Grid container spacing={2}>
        <Grid item xs={2.5}>
    
            </Grid>
            <Grid item xs={5}>
                <StoriesBar/>
                <br/>
                <Posts/>
                <br/>
                <br/>
                <br/>
            </Grid>
            <Grid item xs={4}>
          
              <Suggestion/>
            </Grid>
            </Grid>

    </div>
  );
}

export default Home;
