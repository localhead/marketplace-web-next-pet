import { paths } from "@features/routering/paths";

export type PopoverNavigationItem = {
  label: string;
  link: string;
};

export const profileNavigationList: PopoverNavigationItem[] = [
  {
    label: "Персональные данные",
    link: paths.account(),
  },
  {
    label: "Заказы и возвраты",
    link: paths.orders(),
  },
  {
    label: "Адресная книгa",
    link: paths.address(),
  },
  {
    label: "Отзывы и вопросы",
    link: paths.reviews(),
  },
  {
    label: "Управление подписками",
    link: paths.subscriptions(),
  },
];
