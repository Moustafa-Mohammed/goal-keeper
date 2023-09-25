// Redux slice for notifications
import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    message: "",
    heading: "",
    type: null,
    show: false,
  },
  reducers: {
    setNotification: (state, action) => {
      state.message = action.payload.message;
      state.heading = action.payload.heading;
      state.type = action.payload.type;
      state.show = true;
    },
    clearNotification: (state) => {
      state.message = "";
      state.heading = "";
      state.type = null;
      state.show = false;
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
