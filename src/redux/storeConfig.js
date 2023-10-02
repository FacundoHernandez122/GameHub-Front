import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { combineReducers } from "redux";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

// export default store;

export { store, persistor };
