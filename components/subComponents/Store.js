import React from "react";
import ProductCard from "./productCard";
function Store() {
  const images = [
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A0809.jpg?v=1660050592",
      price: 420,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A0809.jpg?v=1660050592",
      price: 490,
      reviews: 5,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A0809.jpg?v=1660050592",
      price: 491,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A0809.jpg?v=1660050592",
      price: 421,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A0809.jpg?v=1660050592",
      price: 423,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A0809.jpg?v=1660050592",
      price: 423,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A0809.jpg?v=1660050592",
      price: 423,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A0809.jpg?v=1660050592",
      price: 423,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A0809.jpg?v=1660050592",
      price: 423,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A0809.jpg?v=1660050592",
      price: 423,
      reviews: 5,
    },
  ];
  return (
    <>
      <div className="sm:flex flex-wrap justify-evenly gap-10 md:gap-x-10 ">
        {images.map((item, index) => {
          return (
            <div key={index}>
              <ProductCard item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Store;
