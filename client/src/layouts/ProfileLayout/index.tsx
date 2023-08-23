import { Space } from "@components/Space";
import { profileNavigationList } from "@features/profile/constants";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, memo } from "react";
import { StyledSidebarContent } from "./Sidebar";
import { Title } from "./Title";
import { StyledContainer, StyledContent, StyledProfileLayout } from "./styles";

export interface ProfileLayoutProps extends PropsWithChildren {
  className?: string;
}

const _ProfileLayout: FC<ProfileLayoutProps> = (props) => {
  const { children, className } = props;

  const router = useRouter();

  const currentTitle = profileNavigationList.filter((item) => {
    return item.link === router.pathname;
  });

  return (
    <>
      <StyledProfileLayout className={className}>
        <Container>
          <Space size={35} />
          <StyledContainer>
            <StyledSidebarContent />
            <StyledContent>
              <ProfileLayout.Title>
                {currentTitle.map((item) => {
                  return item.label;
                })}
              </ProfileLayout.Title>
              {children}
            </StyledContent>
          </StyledContainer>
          <Space size={105} />
        </Container>
      </StyledProfileLayout>
    </>
  );
};

export const ProfileLayout = memo(
  _ProfileLayout
) as unknown as typeof _ProfileLayout & {
  Title: typeof Title;
};

ProfileLayout.Title = Title;
