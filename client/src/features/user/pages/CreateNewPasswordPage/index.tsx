import { Space } from "@components/Space";
import { paths } from "@features/routering/paths";
import { AuthFormWrapper } from "@features/user/components/AuthFormWrapper";
import { CreateNewPasswordForm } from "@features/user/components/CreateNewPasswordForm";
import { MainLayout } from "@layouts/MainLayout";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { BreadcrumbItem } from "@packages/uiKit/BreadCrumbs/type";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";

export const CreateNewPasswordPage: FC = (props) => {
  const {} = props;

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: "главная",
      link: paths.root(),
    },
    {
      label: "вход",
      link: paths.auth(),
    },
    {
      label: "восстановление пароля",
      link: paths.restorePassword(),
    },
  ];

  const router = useRouter();

  const createNewPasswordSubmitHandler = useCallback(() => {
    // если в форме RestoreRequestEmailForm - будет введен валидный мейл - будет выведена форма для ввода кода с почты
    router.push(paths.auth());
  }, [router]);

  return (
    <MainLayout>
      <MainLayout.Content breadcrumbs={breadcrumbs}>
        <Space size={20} tablet={20} />
        <Container>
          <AuthFormWrapper
            title={
              <>
                Придумайте
                <br />
                новый пароль
              </>
            }
          >
            <CreateNewPasswordForm onSubmit={createNewPasswordSubmitHandler} />
          </AuthFormWrapper>
        </Container>
        <Space size={140} tablet={60} />
      </MainLayout.Content>
    </MainLayout>
  );
};
