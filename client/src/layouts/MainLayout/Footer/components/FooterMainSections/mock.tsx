import {
  FaceBookIcon,
  InstagramIcon,
  TelegramIcon,
  TikTokIcon,
  VkIcon,
} from "@packages/icons";
import { ReactNode } from "react";

export type FooterContentRecord = {
  value: number;
  label: string;
  icon?: ReactNode;
};

export const mockFooterMainSectionCategory1: FooterContentRecord[] = [
  {
    value: 1,
    label: "Публичная оферта",
  },
  {
    value: 2,
    label: "Вакансии",
  },
  {
    value: 3,
    label: "Реквизиты",
  },
  {
    value: 4,
    label: "Контакты",
  },
  {
    value: 5,
    label: "Пресс-центр",
  },
];

export const mockFooterMainSectionCategory2: FooterContentRecord[] = [
  {
    value: 1,
    label: "Как сделать заказ",
  },
  {
    value: 2,
    label: "Оплата",
  },
  {
    value: 3,
    label: "Доставка",
  },
  {
    value: 4,
    label: "Возврат товаров",
  },
  {
    value: 5,
    label: "Контакты",
  },
];

export const mockFooterMainSectionCategory3: FooterContentRecord[] = [
  {
    value: 1,
    label: "Курьерам",
  },
  {
    value: 2,
    label: "Перевозчикам",
  },
  {
    value: 3,
    label: "Продавайте у нас",
  },
  {
    value: 4,
    label: "Возврат товаров",
  },
  {
    value: 5,
    label: "Контакты",
  },
];

export const mockFooterMainSectionCategory4: FooterContentRecord[] = [
  {
    value: 1,
    label: "Курьерам",
  },
  {
    value: 2,
    label: "Перевозчикам",
  },
  {
    value: 3,
    label: "Продавайте у нас",
  },
  {
    value: 4,
    label: "Возврат товаров",
  },
  {
    value: 5,
    label: "Контакты",
  },
];

export const mockFooterMainSectionCategory5: FooterContentRecord[] = [
  {
    value: 1,
    label: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    value: 2,
    label: "Telegram",
    icon: <TelegramIcon />,
  },
  {
    value: 3,
    label: "Вконтакте",
    icon: <VkIcon />,
  },
  {
    value: 4,
    label: "Facebook",
    icon: <FaceBookIcon />,
  },
  {
    value: 5,
    label: "TikTok",
    icon: <TikTokIcon />,
  },
];
