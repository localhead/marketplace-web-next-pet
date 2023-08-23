import { withAuth } from "@features/user/hoc/withAuth";
import { MainLayout } from "@layouts/MainLayout";
import { ProfileLayout } from "@layouts/ProfileLayout";

export const AddressPage = withAuth(() => {
  return (
    <MainLayout>
      <MainLayout.Content>
        <ProfileLayout></ProfileLayout>
      </MainLayout.Content>
    </MainLayout>
  );
});
