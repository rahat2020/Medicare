"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalProps: {},
  globalPropsForSingleTask: {},
  tabs: {}
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addModalProps: (state, action) => ({ ...state, modalProps: action.payload }),
    addGlobalPropsForSingleTask: (state, action) => ({
      ...state,
      globalPropsForSingleTask: action.payload
    }),
    addTabs: (state, action) => ({ ...state, tabs: action.payload })
  }
});

export const { addModalProps, addGlobalPropsForSingleTask, addTabs } = appSlice.actions;
export default appSlice.reducer;
