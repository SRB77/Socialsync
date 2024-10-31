import React from "react";
import "./Chatbox.css";
import assets from "../../assets/assets";
function Chatbox() {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>
          Richard Sanford <img src={assets.green_dot} alt="" className="dot" />
        </p>
        <img src={assets.help_icon} alt="" className="help" />
      </div>
      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum is placeholder text commonly used in ..
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30pm</p>
          </div>
        </div>
        <div className="s-msg">
          <img src={assets.pic1} alt="" className="msg-img"/>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30pm</p>
          </div>
        </div>
        <div className="r-msg">
          <p className="msg">
            Lorem ipsum is placeholder text commonly used in ..
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30pm</p>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="send a message" />
        <input type="file" id="image" accept="image/png ,image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
}

export default Chatbox;
