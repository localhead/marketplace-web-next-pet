export type AuthState = {
  isAuth: false;
  accessToken: null;
};

export type UserProfileInfo = {
  id: number;
  email: string;
  name: string;
  surname?: string;
  patronymic?: string;
  tel: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};
export type LoginResponse = {
  user: {
    user: {
      userId: number;
      username: string;
      password: string;
    };
  };
  msg: string;
};

export type ResetPasswordConfirmRequest = {
  password: string;
  token: string;
};
export type ResetPasswordConfirmResponse = void;

export type ResetPasswordValidateTokenRequest = {
  token: string;
};

export type ResetPasswordValidateTokenResponse = void;

export type LogoutRequest = void;
export type LogoutResponse = void;

export type RegistrationResponse = {
  id: number;
  password: string;
  username: string;
  email: string;
  updatedAt: Date;
  createdAt: Date;
};

export type RegistrationRequest = {
  email: string;
  password: string;
  username: string;
};
