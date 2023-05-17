import React from "react";

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
  ];
  return (
    <>
      <div className="sm:flex flex-wrap justify-evenly gap-10 md:gap-10">
        {images.map((item, index) => {
          return (
            <div key={index}>
              <div className=" sm:my-0 my-5 md:w-[200px] mx-auto cursor-pointer max-w-[300px]">
                <div className="w-full max-w-[300px] md:w-[200px] mx-auto relative ">
                  <img
                    src={item.url}
                    className="w-full max-w-[300px] max-h-[300px] md:w-[200px] "
                    alt=""
                  />
                  <div className="absolute bottom-0 font-workSans text-color_2 px-2">
                    <div>Rating: {item.rating}/5</div>
                    <div>{item.size}</div>
                  </div>
                </div>
                <div className="text-text_2 flex justify-between flex-wrap">
                  <div>reviews: {item.reviews}</div>
                  <div>buys: {item.reviews}</div>
                </div>
                <div className="font-rubik text-color_6 ">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Store;
