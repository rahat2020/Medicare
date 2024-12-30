import appReducer from "@/redux/app/appSlice";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice/apiSlice";
import { authApi } from "./authSlice/authSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
