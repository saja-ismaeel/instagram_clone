import image1 from "../assets/androidScreen.png";
import image2 from "../assets/iPhoneScreen.png";

import React from "react";

function InstagramScreen(props) {
  const style = {
    position: "absolute",
    top: "58%",
    left: "78%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  };
  return (
    <div style={{position:'relative' }}>
      <img src={image1} alt="androidScreen"  width={'200px'}  />
      <img style={style} src={image2} alt="iPhoneScreen" width={'270px'} />
    </div>
  );
}

export default InstagramScreen;
