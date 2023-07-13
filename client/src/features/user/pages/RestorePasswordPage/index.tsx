import { FC, useCallback } from "react";

import { Space } from "@components/Space";
import { paths } from "@features/routering/paths";
import { AuthFormWrapper } from "@features/user/components/AuthFormWrapper";
import { RestoreRequestEmailForm } from "@features/user/components/RestoreRequestEmailForm";
import { MainLayout } from "@layouts/MainLayout";
import { Container } from "@layouts/MainLayout/pageContentComponents/Container";
import { BreadcrumbItem } from "@packages/uiKit/BreadCrumbs/type";
import Head from "next/head";
import { useRouter } from "next/router";

export const RestorePasswordPage: FC = () => {
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
    },
  ];

  const router = useRouter();

  const restoreRequestEmailSubmitHandler = useCallback(() => {
    // если в форме RestoreRequestEmailForm - будет введен валидный мейл - будет выведена форма для ввода кода с почты
    router.push(paths.secretCode());
  }, [router]);

  return (
    <MainLayout>
      <Head>
        <link rel="canonical" href={paths.restorePassword()} />
      </Head>
      <MainLayout.Content breadcrumbs={breadcrumbs}>
        <Space size={20} tablet={20} />
        <Container>
          <AuthFormWrapper
            title="Восстановление
            пароля"
            description="Введите электронную почту
            на который придет код
            для восстановления"
          >
            <RestoreRequestEmailForm
              onSubmit={restoreRequestEmailSubmitHandler}
            />
          </AuthFormWrapper>
        </Container>
        <Space size={140} tablet={60} />
      </MainLayout.Content>
    </MainLayout>
  );
};
