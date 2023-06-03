import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

// const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: [sagaMiddleware]
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
