import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import updateReducer from "../features/update/updateSlice";
import { authApi } from "../app/services/authService";

export default configureStore({
  reducer: {
    auth: authReducer,
    update: updateReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
