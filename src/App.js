import "./App.css";
// import StoriesBar from "./Components/StoriesBar";
// import Sidebar from "./Components/Sidebar";
// import Suggestion from "./Components/Suggestion";
// import Posts from "./Components/Posts";

import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Messages from "./Components/Messages";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import Reels from "./Components/Reels";
import Notifications from "./Components/Notifications";



import { Route, Routes } from "react-router-dom";
import CreatePostModal from "./Components/CreatePostModal";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <div className="App">
      <Sidebar />
      </div>
      {/* <search/> */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} /> 
        <Route path="/reels" element={<Reels />} /> 
        <Route path="/notifications" element={<Notifications />} /> 
        <Route path="/create" element={<CreatePostModal />} />
      </Routes>
    </>
  );
}

export default App;
