import { RelativeLinkRecord } from "@features/relativeLinks/types";
import { paths } from "@features/routering/paths";
import {
  BuildingWithTreeIcon,
  CalculatorIcon,
  CarIcon,
  EmptyWalletChangeIcon,
  MonitorMobileIcon,
  StatusUpIcon,
  WalletAddIcon,
} from "@packages/icons";

export const relativeLinks: RelativeLinkRecord[] = [
  {
    title: "Авто в рассрочку",
    icon: <CarIcon />,
    href: paths.notImplemented(),
  },
  {
    title: "Получать бонусы",
    icon: <WalletAddIcon />,
    href: paths.notImplemented(),
  },
  {
    title: "Перевести деньги",
    icon: <EmptyWalletChangeIcon />,
    href: paths.notImplemented(),
  },
  {
    title: "Получить ипотеку",
    icon: <BuildingWithTreeIcon />,
    href: paths.notImplemented(),
  },
  {
    title: "Товары в рассрочку",
    icon: <MonitorMobileIcon />,
    href: paths.notImplemented(),
  },
  {
    title: "Калькулятор закята",
    icon: <CalculatorIcon />,
    href: paths.notImplemented(),
  },
  {
    title: "Инвестиции в халяль",
    icon: <StatusUpIcon />,
    href: paths.notImplemented(),
  },
  {
    title: "Калькулятор закята",
    icon: <CalculatorIcon />,
    href: paths.notImplemented(),
  },
  {
    title: "Товары в рассрочку",
    icon: <MonitorMobileIcon />,
    href: paths.notImplemented(),
  },
];
