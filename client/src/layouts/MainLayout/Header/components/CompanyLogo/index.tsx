import { FC } from "react";
import { StyledCompanyLogo, StyledImage } from "./styles";

export interface CompanyLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

import logo from "@assets/bitmap/logo.png";

export const CompanyLogo: FC<CompanyLogoProps> = (props) => {
  const { ...restProps } = props;

  return (
    <StyledCompanyLogo>
      <StyledImage src={logo} alt="company logo"></StyledImage>
    </StyledCompanyLogo>
  );
};
