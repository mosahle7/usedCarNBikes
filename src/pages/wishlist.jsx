import React, { useState, useEffect } from "react";
import WishlistItem from "../components/UI/wishlistItems";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleRemove = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log("Wishlist data:", wishlist);
  }, [wishlist]); // This will log the wishlist data whenever it changes

  console.log("Initial Wishlist data:", wishlist); // Log initial wishlist data

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 && <p>Your wishlist is empty.</p>}
      {wishlist.map((item) => (
        <WishlistItem key={item.id} item={item} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default Wishlist;
