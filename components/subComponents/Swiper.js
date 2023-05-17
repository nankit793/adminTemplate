import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

function SwiperJS(props) {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {props.pages &&
          props.pages.map((page, index) => {
            return (
              <div key={index}>
                <SwiperSlide>{page.pageData}</SwiperSlide>
              </div>
            );
          })}
      </Swiper>
    </>
  );
}

export default SwiperJS;
