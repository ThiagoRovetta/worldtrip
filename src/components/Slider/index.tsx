import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { SliderItem } from "./SliderItem";

SwiperCore.use([Navigation, Pagination]);

const continentsInfos = [
  {
    imagePath: "/images/continents/africa/africa.png",
    continent: "África",
    about: "O terceiro continente mais extenso.",
  },
  {
    imagePath: "/images/continents/northAmerica/north-america.png",
    continent: "América do Norte",
    about: "A maior fronteira em termos de extensão do planeta.",
  },
  {
    imagePath: "/images/continents/southAmerica/south-america.png",
    continent: "América do Sul",
    about: "O segundo maior continente do mundo.",
  },
  {
    imagePath: "/images/continents/asia/asia.png",
    continent: "Ásia",
    about: "O maior dos continentes.",
  },
  {
    imagePath: "/images/continents/europe/europe.png",
    continent: "Europa",
    about: "O continente mais antigo.",
  },
  {
    imagePath: "/images/continents/oceania/oceania.png",
    continent: "Oceania",
    about: "O menor continente do mundo.",
  },
]

export function Slider() {
  return (
    <Swiper navigation={true} pagination={true} className="mySwiper">
      {
        continentsInfos.map((continentInfo => (
          <SwiperSlide key={continentInfo.continent}>
            <SliderItem 
              imagePath={continentInfo.imagePath}
              continent={continentInfo.continent}
              about={continentInfo.about}
            />
          </SwiperSlide>
        )))
      }
    </Swiper>
  )
}