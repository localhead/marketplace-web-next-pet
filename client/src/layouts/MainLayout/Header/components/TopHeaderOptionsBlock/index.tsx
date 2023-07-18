import { FC } from "react";
import { StyledTitle, StyledTopHeaderOptionsBlock } from "./styles";

export interface TopHeaderOptionsBlockProps {
  className?: string;
  style?: React.CSSProperties;
}

export const TopHeaderOptionsBlock: FC = (props) => {
  const { ...restProps } = props;

  return (
    <StyledTopHeaderOptionsBlock>
      <StyledTitle>
        Еще больше скидок: теперь до -60% | На избранные товары | Посмотреть
        подборку
      </StyledTitle>
    </StyledTopHeaderOptionsBlock>
  );
};
