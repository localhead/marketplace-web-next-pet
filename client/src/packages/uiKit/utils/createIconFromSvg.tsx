import { FC, PropsWithoutRef } from "react";

type SvgComponentType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export type IconProps = React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
  size?: number;
};

export type ImgIconProps = PropsWithoutRef<JSX.IntrinsicElements["img"]> & {
  title?: string | undefined;
  size?: number;
};

export const createIconFromSvg = (SvgComponent: SvgComponentType) => {
  const component: FC<IconProps> = (props) => {
    const { size, style, ...restProps } = props;
    return (
      <SvgComponent
        style={{
          width: size ?? "1em",
          minWidth: size ?? "1em",
          height: size ?? "1em",
          minHeight: size ?? "1em",
          lineHeight: 1,
          display: "inline-block",
          ...style,
        }}
        {...restProps}
      />
    );
  };

  return component;
};
