import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { goalsApi } from "./features/goalsAPI";
import notificationsReducer from "./features/notificationSlice";

export const store = configureStore({
  reducer: {
    [goalsApi.reducerPath]: goalsApi.reducer,
    notifications: notificationsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goalsApi.middleware),
});

setupListeners(store.dispatch);
