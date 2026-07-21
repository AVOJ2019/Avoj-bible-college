"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export function HomeSlideshow() {
 const slides = [
  "/images/slide 1.jpg",
  "/images/slide 2.jpg",
  "/images/slide 3.jpg",
  "/images/slide 4.jpg",
  "/images/slide 5.jpg",
  "/images/slide 6.jpg",
  "/images/slide 7.jpg",
];
  return (
    <section className="w-full py-10 bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}