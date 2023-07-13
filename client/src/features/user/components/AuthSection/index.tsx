import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';
import { StyledAuthSection, StyledSelectTabs, StyledSubtitle } from './styles';
import { AuthTab } from './types';

import { SelectTabsOption } from '@packages/uiKit/SelectTabs/types';
import React, { FC, memo, useState } from 'react';

export interface AuthSectionProps {
  className?: string;
  style?: React.CSSProperties;

  onLoginSubmit?: () => void;
  onRegisterSubmit?: () => void;
}

const tabOptions: SelectTabsOption<AuthTab>[] = [
  { value: AuthTab.Login, label: 'У меня есть аккаунт' },
  {
    value: AuthTab.Register,
    label: 'Регистрация',
  },
];

const _AuthSection: FC<AuthSectionProps> = (props) => {
  const { onLoginSubmit, onRegisterSubmit, ...restProps } = props;

  const [tab, setTab] = useState<AuthTab>(AuthTab.Login);

  return (
    <StyledAuthSection {...restProps}>
      <StyledSubtitle>
        Войдите или зарегистрируйтесь для оформления вашего онлайн заказа
      </StyledSubtitle>
      <StyledSelectTabs<AuthTab>
        value={tab}
        onChange={setTab}
        options={tabOptions}
      />
      {tab === AuthTab.Login && <LoginForm onSubmit={onLoginSubmit} />}
      {tab === AuthTab.Register && (
        <RegistrationForm onSubmit={onRegisterSubmit} />
      )}
    </StyledAuthSection>
  );
};

export const AuthSection = memo(_AuthSection);
