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
            <div className="relative bg-base-300 border border-base-300 w-full rounded-md shadow-2xl">
              <h1 className="absolute top-5 md:top-10 left-5 md:left-10 bg-[#B6B09F]/50 border-2 border-dotted border-[#EAE4D5] text-white p-1 md:p-3 rounded-md font-bold w-30 md:w-65 lg:w-100 text-xs md:text-xl lg:text-3xl z-10 text-center">{slide.title}</h1>
              <img className="w-full lg:h-120 h-80" src={slide.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}