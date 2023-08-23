import { profileNavigationList } from "@features/profile/constants";
import { paths } from "@features/routering/paths";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { StyledContent, StyledNavigationTitle } from "./styled";

export interface SidebarProps {
  className?: string;
  style?: React.CSSProperties;
}

export const StyledSidebarContent: FC<SidebarProps> = (props) => {
  const { ...restProps } = props;

  const router = useRouter();

  console.log(router.pathname, paths.orders());

  const navigateHandler = useCallback(
    (href: string) => {
      router.push(href);
    },
    [router]
  );

  return (
    <StyledContent {...restProps}>
      {profileNavigationList.map((item, index) => {
        const isActive = router.pathname === item.link;

        return (
          <StyledNavigationTitle
            $isActive={isActive}
            key={index}
            onClick={() => {
              navigateHandler(item.link);
            }}
          >
            {item.label}
          </StyledNavigationTitle>
        );
      })}
    </StyledContent>
  );
};
