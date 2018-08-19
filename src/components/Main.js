import React from "react";
import "./Main.css";
import Empty from "./Empty.jsx";
import ChatWindow from "../containers/ChatWindow.jsx";


const Main = ({user, activeUserId}) => {

  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
  }

  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
