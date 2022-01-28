import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { SliderItem } from "./SliderItem";

SwiperCore.use([Navigation, Pagination]);


export function Slider() {
  return (
    <>
      <Swiper navigation={true} pagination={true} className="mySwiper">
        <SwiperSlide>
          <SliderItem 
            imageName={"europe.png"}
            continent="África"
            about="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem 
            imageName={"europe.png"}
            continent="América do Norte"
            about="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem 
            imageName={"europe.png"}
            continent="América do Sul"
            about="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem 
            imageName={"europe.png"}
            continent="Ásia"
            about="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem 
            imageName={"europe.png"}
            continent="Europa"
            about="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem 
            imageName={"europe.png"}
            continent="Oceania"
            about="O continente mais antigo."
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}