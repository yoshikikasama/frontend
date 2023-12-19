import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    user: userReducer,
});

const psersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer:psersistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        // warningを防止: https://github.com/rt2zz/redux-persist/issues/988#issuecomment-552242978
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
