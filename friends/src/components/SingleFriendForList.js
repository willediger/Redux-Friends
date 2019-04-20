import React from "react";
import "../App.css";

const SingleFriendForList = props => {
  const friend = props.friend;
  return (
    <div className="friend">
      <div className="friend-info">
        <h3>{friend.name}</h3>
        <p>{friend.age} years old</p>
        <p>{friend.email}</p>
      </div>
    </div>
  );
};

export default SingleFriendForList;
