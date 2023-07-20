import { Content } from "./Content";
import { StyledContent, StyledMainLayout } from "./styles";

import { useAdaptiveParam } from "@features/adaptive/useAdaptiveParam";

import { GlobalModals } from "@features/modals/components/GlobalModals";
import { FC, memo, PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileBottomNavLinks } from "./MobileBottomNavLinks";

export interface MainLayoutProps extends PropsWithChildren {
  showFooter?: boolean;
  className?: string;
}

const _MainLayout: FC<MainLayoutProps> = (props) => {
  const { children, className } = props;

  const isShowBottomNavigation = useAdaptiveParam({
    desktop: false,
    tablet: true,
    mobile: true,
  });

  return (
    <>
      <StyledMainLayout
        className={className}
        $isShowBottomNav={isShowBottomNavigation}
      >
        <Header />

        <StyledContent>{children}</StyledContent>

        <Footer />

        {isShowBottomNavigation && <MobileBottomNavLinks />}
      </StyledMainLayout>

      <GlobalModals />
    </>
  );
};

export const MainLayout = memo(_MainLayout) as unknown as typeof _MainLayout & {
  Content: typeof Content;
};

MainLayout.Content = Content;
