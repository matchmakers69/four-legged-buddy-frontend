import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import usersReducer from "src/store/auth/slice";
import { uiReducer } from "src/store/ui/ui.reducer";

const rootPersistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [""],
  whitelist: [""],
};

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["user", "isAuthenticated"],
};

const rootReducer = combineReducers({
  ui: uiReducer,
  users: persistReducer(userPersistConfig, usersReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
