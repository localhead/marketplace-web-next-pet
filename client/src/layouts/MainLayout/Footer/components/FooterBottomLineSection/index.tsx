import { NavLink } from "@components/NavLink";
import { paths } from "@features/routering/paths";
import { formatDate } from "@utils/dateFormat";
import { FC, memo } from "react";
import { StyledFooterBottomLineSection, StyledText } from "./styles";

export interface FooterBottomLineSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const _FooterBottomLineSection: FC<FooterBottomLineSectionProps> = () => {
  const date = new Date();

  return (
    <StyledFooterBottomLineSection>
      <NavLink href={paths.root()}>
        <StyledText>Карта сайта</StyledText>
      </NavLink>
      <NavLink href={paths.root()}>
        <StyledText>Политика конфиденциальности</StyledText>
      </NavLink>{" "}
      <StyledText>{`© snapback.com, 2008-${formatDate(
        date,
        "YYYY"
      )}`}</StyledText>
    </StyledFooterBottomLineSection>
  );
};

export const FooterBottomLineSection = memo(_FooterBottomLineSection);
