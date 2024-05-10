// WishlistItem.js
import React from "react";

const WishlistItem = ({ item, onRemove }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <button className="btn btn-danger" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
