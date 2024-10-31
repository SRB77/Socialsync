import React from "react";
import "./Rightsidebar.css";
import assets from "../../assets/assets";
import { logout } from "../../config/firebase";
function Rightsidebar() {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          Richard sanford <img src={assets.green_dot} alt="" />
        </h3>
        <p>hii there i am Richard using Chat app </p>
      </div>
      <hr />
      <div className="rs-media">
        <p>media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic3} alt="" />
        </div>
      </div>
      <button onClick={()=>logout()}>LogOut</button>
    </div>
  );
}

export default Rightsidebar;
