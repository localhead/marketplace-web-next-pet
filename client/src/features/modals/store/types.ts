import { PayloadAction } from "@reduxjs/toolkit";

export type ModalsState = {
  openModalId: string | null;
  data: any;
};

export type OpenModalAction = PayloadAction<{
  id: string;
  data?: any;
}>;

export type CloseModalAction = PayloadAction<{
  id?: string;
}>;
