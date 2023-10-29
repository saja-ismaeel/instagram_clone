import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import instalogo from "../assets/instagram-logo.png";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

import InstagramScreen from "./InstagramScreen.jsx";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
function SignUp() {
  const navigate = useNavigate();
  let [userData, setUsrData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://16.170.173.197/users/signup", userData)
      .then(function (response) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/home");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Grid container>
        <Grid item xs={6.5} container justifyContent="flex-end">
          <div style={{ margin: "50px 150px 0px 0px" }}>
            <InstagramScreen></InstagramScreen>
          </div>
        </Grid>
        <Grid item xs={3.5}>
          <Box
            className="signupRightTop"
            container
            maxWidth="sm"
            style={{ padding: " 15px 25px", margin: "30px 0px 15px 0px" ,backgroundColor:"#1d1d1d", borderRadius:"10px" ,width:"300px"}}
          >
            
            <div style={{display:"inline",marginLeft:"90px" }}><img src={instalogo} width={"120px"} alt=""></img></div>
            <Typography
              style={{
                fontFamily: " Poppins",
                fontSize: "11px",
                fontWeight: "600",
                textAlign: "center",
                margin: "14px 22px",
                color: "rgb(240,240,240)",
              }}
            >
              Sign up to see photos and videos from your friends
            </Typography>
            <Button
              sx={{
                borderRadius: "7px",
                fontFamily: " Poppins",
                fontSize: "15px",
                fontWeight: "600",
                padding: "1px 25px",
                backgroundColor: "rgb(33, 150, 243)",
                textTransform: "none",
                width: "100%",
              }}
              variant="contained"
            >
              Login with Facebook
            </Button>
            <Divider
              sx={{
                "&::before, &::after": {
                  borderColor: "#424242",
                },
              }}
              style={{
                margin: "15px 0px",
              }}
            >
              or
            </Divider>
            <form noValidate onSubmit={handleSubmit}>
              <div className="signupInputs">
                <input
                  name="Email"
                  required
                  label="Email"
                  placeholder="Email"
                  style={{
                    margin: "7px 0px",
                    width: "100%",
                    padding: "7px",
                    fontFamily: " Poppins",
                    fontSize: "12px",
                    fontWeight: "700",
                    borderRadius: "8px",
                    borderWidth: "0px",
                  }}
                  value={userData.email}
                  onChange={(e) => {
                    setUsrData({ ...userData, email: e.target.value });
                  }}
                ></input>

                <input
                  autoComplete="given-name"
                  name="userName"
                  required
                  label="Username"
                  placeholder="Username"
                  style={{
                    margin: "7px 0px",
                    width: "100%",
                    padding: "7px",
                    fontFamily: " Poppins",
                    fontSize: "12px",
                    fontWeight: "700",
                    borderRadius: "8px",
                    borderWidth: "0px",
                  }}
                  value={userData.userName}
                  onChange={(e) => {
                    setUsrData({ ...userData, userName: e.target.value });
                  }}
                ></input>
                <input
                  name="Password"
                  required
                  label="Password"
                  placeholder="password"
                  style={{
                    margin: "7px 0px",
                    width: "100%",
                    padding: "7px",
                    fontFamily: " Poppins",
                    fontSize: "12px",
                    fontWeight: "700",
                    borderRadius: "8px",
                    borderWidth: "0px",
                  }}
                  value={userData.password}
                  onChange={(e) => {
                    setUsrData({ ...userData, password: e.target.value });
                  }}
                ></input>
                <Button
                  type="submit"
                  sx={{
                    borderRadius: "7px",
                    fontFamily: " Poppins",
                    fontSize: "15px",
                    fontWeight: "600",
                    padding: "1px 25px",
                    backgroundColor: "rgb(33, 150, 243)",
                    textTransform: "none",
                    width: "100%",
                    margin: "7px 0px",
                  }}
                  variant="contained"
                >
                  Sign Up
                </Button>
              </div>
            </form>
            <Typography
              style={{
                fontFamily: " Poppins",
                fontSize: "11px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "10px",
                color: "rgb(240,240,240)",
              }}
            >
              By signing up, you agree to our Terms, Data Policy and Cookies
              Police
            </Typography>
          </Box>
          <Box
            className="signupRightButtom"
            container
            maxWidth="sm"
            style={{ padding: " 15px 40px", margin: "15px 0px" ,backgroundColor:"#1d1d1d", borderRadius:"10px",width:"272px"}}
          >
            <Typography
              style={{
                fontFamily: " Poppins",
                fontSize: "11px",
                fontWeight: "600",
                textAlign: "center",
                margin: "10px 22px",
                color: "rgb(240,240,240)",
              }}
            >
              Have an account?{" "}
              <Link
                href="/"
                style={{
                  color: "rgb(33, 150, 243)",
                  fontFamily: " Poppins",
                  fontSize: "12px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Log In
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}

export default SignUp;
