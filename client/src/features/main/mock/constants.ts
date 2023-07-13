import cardImage1 from "@assets/imgs/mockSliderImages/sliderMockImage1.png";
import { BigBannerSlideRecord } from "@features/banners/components/BigBannerSlider/types";

import React from "react";
export interface MainBigSliderProps {
  className?: string;
  style?: React.CSSProperties;
}

export const mainBannerSlides: BigBannerSlideRecord[] = [
  {
    title: "Инвестируйте в исламские финансы с доходностью до 19%",
    description: "Бонусная программа для пользователей HalalBank",

    buttonTitle: "Стать участником",
    image: cardImage1.src,
  },
  {
    title: "Текст пример",
    description:
      " description of second slide description of second slide Second Slide Second Slide",

    buttonTitle: "button action",
    image: cardImage1.src,
  },
];
