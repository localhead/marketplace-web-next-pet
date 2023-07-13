import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { RelativeLinksOverflow } from "@features/relativeLinks/components/RelativeLinksOverflow";
import { RelativeLinksSlider } from "@features/relativeLinks/components/RelativeLinksSlider";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { ContainerWide } from "@layouts/MainLayout/pageContentComponents/ContainerWide";
import React, { FC, memo } from "react";
import { relativeLinks } from "./constants";

export interface MainRelativeLinksSliderProps {
  className?: string;
  style?: React.CSSProperties;
}

const _MainRelativeLinksSlider: FC<MainRelativeLinksSliderProps> = (props) => {
  const { ...restProps } = props;

  const width = useWindowWidth();

  return (
    <>
      {width === "desktop" ? (
        <ContainerWide>
          <RelativeLinksSlider items={relativeLinks} {...restProps} />
        </ContainerWide>
      ) : (
        <Container>
          <RelativeLinksOverflow items={relativeLinks} {...restProps} />
        </Container>
      )}
    </>
  );
};

export const MainRelativeLinksSlider = memo(_MainRelativeLinksSlider);
