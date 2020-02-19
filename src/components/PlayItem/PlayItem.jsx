import React from "react";
import "./PlayItem.scss";

const PlayItem = ({ title, id, onItemClicked }) => {
  return (
    <button className="btn play-item" onClick={e => onItemClicked(e, id)}>
      {title}
    </button>
  );
};

export default PlayItem;
