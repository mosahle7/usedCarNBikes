// ParentComponent.js
import React, { useState } from "react";
import AddToWishlistButton from "../components/UI/AddToWishlistButton";

const ParentComponent = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = () => {
    // Logic to add item to wishlist
    const newItem = { id: 1, name: "Car", description: "This is a car." };
    setWishlist([...wishlist, newItem]);
  };

  return (
    <div>
      <h2>Product Details</h2>
      {/* Product details here */}
      <AddToWishlistButton onClick={handleAddToWishlist} />
    </div>
  );
};

export default ParentComponent;
