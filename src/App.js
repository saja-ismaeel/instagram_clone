import "./App.css";
// import StoriesBar from "./Components/StoriesBar";
// import Sidebar from "./Components/Sidebar";
// import Suggestion from "./Components/Suggestion";
// import Posts from "./Components/Posts";
import axios from 'axios';

import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import Reels from "./Components/Reels";
import Notifications from "./Components/Notifications";
import { Route, Routes } from "react-router-dom";
import CreatePostModal from "./Components/CreatePostModal";
import Sidebar from "./Components/Sidebar";
import MessagesPage from "./Components/MessagesPage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import NotFoundPage from "./Components/NotFoundPage";

function App() {
  return (
    <>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} /> 
        <Route path="/reels" element={<Reels />} /> 
        <Route path="/notifications" element={<Notifications />} /> 
        <Route path="/create" element={<CreatePostModal />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFoundPage  />} />
      </Routes>
    </>
  );
}

export default App;
