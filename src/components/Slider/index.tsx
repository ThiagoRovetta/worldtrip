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
            imagePath={"/images/continents/africa/africa.png"}
            continent="África"
            about="O terceiro continente mais extenso."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem 
            imagePath={"/images/continents/northAmerica/north-america.png"}
            continent="América do Norte"
            about="A maior fronteira em termos de extensão do planeta."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem 
            imagePath={"/images/continents/southAmerica/south-america.png"}
            continent="América do Sul"
            about="O segundo maior continente do mundo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem 
            imagePath={"/images/continents/asia/asia.png"}
            continent="Ásia"
            about="O maior dos continentes."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem 
            imagePath={"/images/continents/europe/europe.png"}
            continent="Europa"
            about="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem 
            imagePath={"/images/continents/oceania/oceania.png"}
            continent="Oceania"
            about="O menor continente do mundo."
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}