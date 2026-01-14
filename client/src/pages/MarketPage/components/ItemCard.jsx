import React from "react";
import HeartIcon from "../../../assets/images/icons/ic_heart.svg";
import DefaultImage from "../../../assets/images/icons//defaultimage.png";

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      {<img src={DefaultImage} alt={DefaultImage} className="itemCardThumbnail" />} 
      {/* <img src={item.images[0]} alt={item.name} className="itemCardThumbnail" /> */}
      <div className="itemSummary">
        <h2 className="itemName">{item.name}</h2>
        <p className="itemPrice">{item.price.toLocaleString()}원</p>
        <div className="favoriteCount">
          <img src={HeartIcon} alt='heart'/>
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
