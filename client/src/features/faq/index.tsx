import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { CaretDownIcon } from "@packages/icons";
import { colors } from "@packages/uiKit";
import { Collapse, CollapseProps, theme } from "antd";
import { CSSProperties, FC, memo } from "react";
import { StyledFaqSectionSection } from "./styles";

interface FaqSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>просто 1</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>просто 312</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>просто 2</p>,
    style: panelStyle,
  },
];

export const _FaqSection: FC<FaqSectionProps> = (props) => {
  const { ...restProps } = props;

  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 0,
    fontSize: 18,
    padding: 0,
    background: `${colors.white}`,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <StyledFaqSectionSection>
      <Container>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretDownIcon rotate={isActive ? 90 : 0} />
          )}
          style={{ background: token.colorBgContainer }}
          items={getItems(panelStyle)}
          expandIconPosition="right"
        />
      </Container>
    </StyledFaqSectionSection>
  );
};

export const FaqSection = memo(_FaqSection);
