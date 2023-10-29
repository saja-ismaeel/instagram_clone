import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from "@mui/material/Box";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Stack from "@mui/material/Stack";
import axios from "axios";
import PostIcons from "./PostIcons.jsx";

const token = localStorage.getItem("token");
function Posts() {
  const [posts, setposts] = useState([]);
  const [likes,setLikes]=useState(false)
  const [users, setusers] = useState([]);



  function handleAddLike(id) {
  handelgetlikes(id)
  console.log('uu',users)

    setLikes(!likes)
    const postId = id;
    setposts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, color: post.color == "red" ?  "white":"red" , likes:users
        };
        }
        return post ;
      });
    });
    axios
      .request({
        method: "post",
        url: `http://16.170.173.197/posts/like/${postId}`,
        data: {
          id: postId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((responses) => {
        console.log("add likes", responses);
      })
      .catch((error) => {
        console.error("Error adding like:", error);
      });
  }

 
  useEffect(() => {
    axios
      .get("http://16.170.173.197/posts", {
        headers: { Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        setposts(response.data.posts.reverse());
         console.log("p",posts)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handelgetlikes(id){
    axios
    .request({
      method: "get",
      url: `http://16.170.173.197/posts/likes/${id}`,
      data: {
        id: id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((responses) => {
      setusers(responses.data.likes.users)

    })
    .catch((error) => {
      console.error("Error getting like:", error);
    });
  }
  // style={{paddingBottom:"10px"}}
  return (
    <div style={{marginLeft:"40px"}} >
      {posts.map((p, index) => (
        <div key={index }  style={{paddingBottom:"50px"}}>
          <div className="postheader" style={{ margin: "5px" }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <div className="postinfo">
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    p: 1,
                    maxWidth: 300,
                    borderRadius: 1,
                    alignItems: "center",
                  }}
                >
                  <div >
                    <Avatar
                      alt="Travis Howard"
                      src={p.user.avatar}
                      style={{
                        backgroundColor: "black",
                        width: "37px ",
                        height: "37px",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: " Poppins",
                      fontSize: "13px",
                      fontWeight: "500",
                      paddingLeft: "8px",
                      color: "white", marginLeft: "10px"
                    }}
                  >
                    {p.user.userName}
                  </span>
                </Box>
              </div>
              <div style={{marginRight:"120px"}} >
                <PostIcons id={p.id} setposts={setposts} posts={posts}></PostIcons>
                
              </div>
            </Grid>
          </div>
          <div >
            <Box
             
            >
              <img
                src={p.image}
                width={500}
                style={{ border: "none" }}
              ></img>
            </Box>
          </div>

          <div>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <div className="left">
                <span onClick={() => handleAddLike(p.id)}>
                  <FavoriteBorderIcon
                    style={{
                      fontSize: "30px",
                      fontWeight: "400",
                      paddingRight: "5px",
                      color: p.color || "white",
                    }}
                  ></FavoriteBorderIcon>
                </span>
                <SendOutlinedIcon
                  style={{
                    fontSize: "30px",
                    fontWeight: "400",
                    paddingRight: "5px",
                  }}
                ></SendOutlinedIcon>
                <ChatBubbleOutlineOutlinedIcon
                  style={{
                    fontSize: "30px",
                    fontWeight: "400",
                    paddingRight: "5px",
                  }}
                ></ChatBubbleOutlineOutlinedIcon>
              </div>
              <div className="right">
                <BookmarkBorderOutlinedIcon style={{display:"flex" ,marginRight: "160px",}}></BookmarkBorderOutlinedIcon>
              </div>
            </Grid>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <span
                style={{
                  fontFamily: " Poppins",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              
              >
               
                {p.likes.length} likes
              </span>
              <span
                style={{
                  fontFamily: " Poppins",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                
                {p.user.userName}
              </span>
              <span
                style={{
                  fontFamily: " Poppins",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                {p.description}
              </span>
            </Stack>
          </div>
       
        </div>
      ))}
    </div>
  );
}

export default Posts;



