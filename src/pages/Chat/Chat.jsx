import React from "react";
import "./Chat.css";
import Leftsidebar from "../../components/LeftSidebar/Leftsidebar";
import Chatbox from "../../components/ChatBox/Chatbox";
import Rightsidebar from "../../components/RightSidebar/Rightsidebar";
function Chat() {
  return (
    <>
      <div className="chat">
        <div className="chat-container">
          <Leftsidebar />
          <Chatbox />
          <Rightsidebar />
        </div>
      </div>
    </>
  );
}

export default Chat;
