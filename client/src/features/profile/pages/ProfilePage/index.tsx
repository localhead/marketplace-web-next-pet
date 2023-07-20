import { StyledLol } from "@features/main/pages/MainPage/style";
import { AuthControlBadge } from "@features/user/components/AuthControlBadge";
import { withAuth } from "@features/user/hoc/withAuth";
import { MainLayout } from "@layouts/MainLayout";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";

export const ProfilePage = withAuth(() => {
  return (
    <MainLayout>
      <MainLayout.Content>
        <AuthControlBadge />
        <Container>Profile</Container>

        <StyledLol />
      </MainLayout.Content>
    </MainLayout>
  );
});
