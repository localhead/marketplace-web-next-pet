import { FC, useCallback } from "react";

import { Space } from "@components/Space";
import { paths } from "@features/routering/paths";
import { AuthFormWrapper } from "@features/user/components/AuthFormWrapper";
import { LoginForm } from "@features/user/components/LoginForm";
import { MainLayout } from "@layouts/MainLayout";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { BreadcrumbItem } from "@packages/uiKit/BreadCrumbs/type";
import { useRouter } from "next/router";

export const LoginPage: FC = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: "главная",
      link: paths.root(),
    },
    {
      label: "вход",
    },
  ];

  const router = useRouter();

  const loginSubmitHandler = useCallback(() => {
    // если в форме логина все будет успешно и не выкинет никаких ошибок - будет переход на страницу профиля
    router.push(paths.restorePassword());
  }, [router]);

  return (
    <MainLayout>
      <MainLayout.Content breadcrumbs={breadcrumbs}>
        <Space size={20} tablet={20} />
        <Container>
          <AuthFormWrapper
            title="Личный кабинет"
            description="Введите почту и ваш пароль"
          >
            <LoginForm onSubmit={loginSubmitHandler} />
          </AuthFormWrapper>
        </Container>
        <Space size={140} tablet={60} />
      </MainLayout.Content>
    </MainLayout>
  );
};
