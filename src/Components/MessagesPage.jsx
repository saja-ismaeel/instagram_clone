import React from "react";
import Grid from '@mui/material/Grid';

import Messages from "./Messages";
import MessagesLogo from "./MessagesLogo";


function MessagesPage(){
    return(
<div>
<Grid container spacing={0}>
<Grid item xs={3}>
</Grid>
<Grid item xs={3}>
<Messages/>
</Grid>

<Grid item xs={5}>
    <MessagesLogo/>
    </Grid>
</Grid>
</div>

    )
}
export default MessagesPage;