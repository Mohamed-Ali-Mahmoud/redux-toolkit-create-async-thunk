import { configureStore } from "@reduxjs/toolkit";

import book from "./bookSlice";

// auh slice
import auth from "./authSlice";

const store = configureStore({
  reducer: {
    book,
    auth,
  },
});

export default store;
