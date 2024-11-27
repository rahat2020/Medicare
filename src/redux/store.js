import appReducer from "@/redux/app/appSlice";
import { configureStore } from "@reduxjs/toolkit";
// import { api } from './apiSlice';

export default configureStore({
  reducer: {
    app: appReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
