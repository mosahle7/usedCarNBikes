import React from "react";

const AddToWishlistButton = ({ onClick }) => {
  return (
    <button className="btn btn-outline-danger" onClick={onClick}>
      <i className="bi bi-heart"></i> Add to Wishlist
    </button>
  );
};

export default AddToWishlistButton;
