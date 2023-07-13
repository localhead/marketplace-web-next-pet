import { CloseModalAction, ModalsState, OpenModalAction } from "./types";

import { createSlice } from "@reduxjs/toolkit";

const initialState: ModalsState = { openModalId: null, data: null };

export const modalsSlice = createSlice({
  name: "modals",
  initialState: initialState,
  reducers: {
    openModal: (_, action: OpenModalAction) => {
      return {
        openModalId: action.payload.id,
        data: action.payload.data ?? null,
      };
    },

    closeModal: (state, action: CloseModalAction) => {
      if (!action.payload.id) {
        return {
          openModalId: null,
          data: null,
        };
      }

      if (state.openModalId === action.payload.id) {
        return {
          openModalId: null,
          data: null,
        };
      }

      return state;
    },
  },
});
