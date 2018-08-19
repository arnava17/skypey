import React from "react";
import { setActiveUserId } from "../actions";
import store from "../store";
import "./User.css";

const User = ({ user }) => {
  const { name, profile_pic, status, user_id } = user;
  const { activeUserId } = store.getState();
  function handleUserClick({ user_id }) {
    store.dispatch(setActiveUserId(user_id));
  }

  return (
    <div className={`User ${activeUserId===user_id?"selected-user":""}`} onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;
