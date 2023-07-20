import { FC } from "react";
import { StyledCompanyLogo, StyledImage } from "./styles";

export interface CompanyLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

import logo from "@assets/bitmap/logo.png";
import { paths } from "@features/routering/paths";
import Link from "next/link";

export const CompanyLogo: FC<CompanyLogoProps> = (props) => {
  const { ...restProps } = props;

  return (
    <StyledCompanyLogo>
      <Link href={paths.root()}>
        <StyledImage src={logo} alt="company logo"></StyledImage>
      </Link>
    </StyledCompanyLogo>
  );
};
