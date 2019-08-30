import React from "react";

const LikeButton = props => {
  return (
    <i
      className={props.isLiked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.handleLikeToggle}
    />
  );
};

export default LikeButton;
