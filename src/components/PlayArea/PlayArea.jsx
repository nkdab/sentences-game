import React from "react";
import PlayItem from "../PlayItem";
import "./PlayArea.scss";

const PlayArea = ({ items, onItemClick }) => {
  const dataItems = items.map(item => (
    <PlayItem
      title={item.title}
      id={item.id}
      onItemClicked={onItemClick}
      key={item.id}
    />
  ));
  return (
    <div className="card play-area">
      <div className="card-content">{dataItems}</div>
    </div>
  );
};

export default PlayArea;
