import React from "react";
import "./cart.css";

const Cart = () => {
  let ItemObj = [
    {
      id: 1,
      title: "Sambar Idly",
      type: "Veg",
      rating: 5.0,
      price: 120,
      hotel: "Perambur Srinivasa",
      imgages: "/images/food/sambaridly.jpg",
    },
    {
      id: 2,
      title: "Full Metals",
      type: "Veg",
      rating: 5.0,
      price: 160,
      hotel: "sangeetha",
      imgages: "/images/food/fullmeal.jpg",
    },
    {
      id: 3,
      title: "Chicken Biryani",
      type: "Non-Veg",
      rating: 5.0,
      price: 220,
      hotel: "Biryani Brothers",
      imgages: "/images/food/sukkucb.jpg",
    },
    {
      id: 4,
      title: "Mutton Biryani",
      type: "Non-Veg",
      rating: 5.0,
      price: 350,
      hotel: "SukkuBhai Biryani",
      imgages: "/images/food/sukkmb.jpg",
    },
    {
      id: 5,
      title: "Beef Biryani",
      type: "Non-Veg",
      rating: 5.0,
      price: 100,
      hotel: "Periyamedu Beef Biryani",
      imgages: "/images/food/ppbb.jpg",
    },
    {
      id: 6,
      title: "panner Butter Malasa",
      type: "Veg",
      rating: 5.0,
      price: 150,
      hotel: "Perambur Srinivasa",
      imgages: "/images/food/panner.jpg",
    },
    {
      id: 7,
      title: "Chicken Biryani",
      type: "Non-Veg",
      rating: 5.0,
      price: 220,
      hotel: "Biryani Brothers",
      imgages: "/images/food/sukkucb.jpg",
    }
  ];

  let PurchaseFun = () => {
    console.log("Add to cart");
  }

  return (
    <div>
      <div id="cartContainer">
        {ItemObj.map((Item) => {
          return (
            <div key={Item.id} className="CartClass">
              <img src={Item.imgages} alt={Item.title} className="cartImg" />
              <h2>{Item.title}</h2>
              <p>Price: {Item.price}</p>
              <p>Hotel: {Item.hotel}</p>
              <button id="CartBut" onClick={PurchaseFun}>Buy</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
