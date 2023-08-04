import { FC, memo } from "react";
import { FooterMainSectionsColumn } from "../FooterMainSectionsColumn";
import {
  mockFooterMainSectionCategory1,
  mockFooterMainSectionCategory2,
  mockFooterMainSectionCategory3,
  mockFooterMainSectionCategory4,
  mockFooterMainSectionCategory5,
} from "./mock";
import { StyledFooterMainSections } from "./styles";

interface FooterMainSectionsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const _FooterMainSections: FC<FooterMainSectionsProps> = (props) => {
  const { ...restProps } = props;

  return (
    <StyledFooterMainSections>
      <FooterMainSectionsColumn
        title={"О нас"}
        data={mockFooterMainSectionCategory1}
      />
      <FooterMainSectionsColumn
        title={"Помощь"}
        data={mockFooterMainSectionCategory2}
      />
      <FooterMainSectionsColumn
        title={"Наши проекты"}
        data={mockFooterMainSectionCategory3}
      />{" "}
      <FooterMainSectionsColumn
        title={"Партнерам"}
        data={mockFooterMainSectionCategory4}
      />
      <FooterMainSectionsColumn
        title={"Подписывайтесь"}
        data={mockFooterMainSectionCategory5}
      />
    </StyledFooterMainSections>
  );
};

export const FooterMainSections = memo(_FooterMainSections);
