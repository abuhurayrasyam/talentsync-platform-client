import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Slider({ slidesData }) {
  return (
    <div className="w-full px-4 py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="rounded-lg"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-base-300 border border-base-300 w-full rounded-md shadow-2xl">
              <img className="w-full lg:h-120 h-80" src={slide.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}