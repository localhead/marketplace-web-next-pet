import { Space } from "@components/Space";
import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { BigBannerSlider } from "@features/banners/components/BigBannerSlider";
import { useDesktopSliderCards } from "@features/banners/hooks/useDesktopSliderCards";
import { useMobileSliderCards } from "@features/banners/hooks/useMobileSliderCards";
import { mainBannerSlides } from "@features/main/mock/constants";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { Section } from "@layouts/MainLayout/pageContentComponents/Section";
import { SliderDots } from "@packages/uiKit/SliderDots";
import React, { FC, memo } from "react";
import { MainRelativeLinksSlider } from "../MainRelativeLinksSlider";

export interface MainHeadSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const _MainHeadSection: FC<MainHeadSectionProps> = (props) => {
  const { ...restProps } = props;

  //mainBannerSlides

  const mobileSlides = useMobileSliderCards(mainBannerSlides);
  const desktopSlides = useDesktopSliderCards(mainBannerSlides);

  const width = useWindowWidth();

  return (
    <Section {...restProps}>
      <Container>
        {width === "desktop" ? (
          <>
            <BigBannerSlider slides={desktopSlides} {...restProps} />
          </>
        ) : (
          <>
            <SliderDots slides={mobileSlides || []} {...restProps} />
            <Space size={25} />
          </>
        )}
      </Container>

      <MainRelativeLinksSlider />
    </Section>
  );
};

export const MainHeadSection = memo(_MainHeadSection);
