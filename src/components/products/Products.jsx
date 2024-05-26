"use client";
import React from "react";
import "../products/Products.css";
import Image from "next/image";
import rate from "@/assets/rate.svg";

const Products = ({ data }) => {
  let categories = ["All", "Bags", "Sneakers", "Belt", "Snglasses"];
  let category = categories?.map((category, i) => (
    <li key={i}> {category} </li>
  ));
  console.log("data >>> ", data);
  const product = data?.map((e) => (
    <div key={e.id} className="product_card">
      <Image
        className="image"
        src={e.image}
        alt={e.title}
        width={405}
        height={318}
      />
      <h3 title={e.title}> {e.title}</h3>
      <Image alt="rating" width={120} height={12} src={rate} />
      <div className="price">
        <h4>${e.price}</h4>
        <p>
          <span>${e.price * e.rating.rate}</span>
          24% Off
        </p>
      </div>
    </div>
  ));

  return (
    <div className="products">
      <div className="container">
        <div className="product_contents">
          <h2>BEST SELLER</h2>
          <ul>{category}</ul>
          <div className="product_cards">{product}</div>
          <button>LOAD MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Products;