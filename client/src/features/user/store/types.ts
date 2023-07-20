export type AuthState = {
  isAuth: boolean;
  user: User;
};

export type User = {
  userId: number;
  username: string;
  email: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};
export type LoginResponse = {
  user: {
    userId: number;
    username: string;
    email: string;
  };
  msg: string;
};

export type LogoutRequest = void;
export type LogoutResponse = { msg: string };

export type LoginCheckRequest = void;
export type LoginCheckResponse = {
  user: {
    userId: number;
    username: string;
    email: string;
  };
  msg: string;
};

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
