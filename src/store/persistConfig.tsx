import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { uiReducer } from "src/store/ui/ui.reducer";

const rootPersistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [""],
  whitelist: [""],
};

const rootReducer = combineReducers({
  UIState: uiReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
