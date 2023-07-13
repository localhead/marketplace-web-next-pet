import { ApiRecordId } from "@features/api";

export type AuthState =
  | {
      isAuth: false;
      token: null;
    }
  | {
      isAuth: true;
      token: string;
    };

export type AuthData = {
  token: string;
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
  login: string;
  password: string;
};
export type LoginResponse = {
  user: UserProfileInfo;
  token: string;
};

export type ChangePasswordRequest = {
  password: string;
  password2: string | undefined;
  old_password: string;
};
export type ChangePasswordResponse = void;

export type ResetPasswordRequest = {
  email: string;
};
export type ResetPasswordResponse = {
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

export type GetUserRequest = void;
export type GetProfileResponse = UserProfileInfo;

export type EditProfileRequest =
  | Omit<UserProfileInfo, "id" | "city">
  | { city: ApiRecordId | null };
export type EditProfileResponse = void;

export type PatchProfileRequest = Partial<EditProfileRequest>;
export type PatchProfileResponse = void;

export type UserAddressRecord = {
  id: ApiRecordId;

  address: string;
  house: string | null;
  apt: string | null;
  postcode: string | null;
};

export type GetAddressesRequest = void;
export type GetAddressesResponse = UserAddressRecord[];

export type AddUserAddressRequest = {
  region: ApiRecordId; // Город
  address: string;
  house: string | null;
  apt: string | null;
  postcode: string | null;
};
export type AddUserAddressResponse = UserAddressRecord;
