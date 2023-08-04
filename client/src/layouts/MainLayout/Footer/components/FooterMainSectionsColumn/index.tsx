import { FC, memo } from "react";
import { FooterContentRecord } from "../FooterMainSections/mock";
import {
  StyledColumnContainer,
  StyledColumnContainerLabel,
  StyledFooterMainColumnSections,
  StyledIcon,
  StyledTitle,
} from "./styles";

interface FooterMainSectionsColumnProps {
  className?: string;
  style?: React.CSSProperties;

  data: FooterContentRecord[];
  title: string;
}

export const _FooterMainSectionsColumn: FC<FooterMainSectionsColumnProps> = (
  props
) => {
  const { data, title, ...restProps } = props;

  return (
    <StyledFooterMainColumnSections>
      <StyledTitle>{title}</StyledTitle>
      {data.map((item) => {
        return (
          <StyledColumnContainer key={item.value}>
            {item.icon && <StyledIcon> {item.icon}</StyledIcon>}
            <StyledColumnContainerLabel>
              {item.label}
            </StyledColumnContainerLabel>
          </StyledColumnContainer>
        );
      })}
    </StyledFooterMainColumnSections>
  );
};

export const FooterMainSectionsColumn = memo(_FooterMainSectionsColumn);
