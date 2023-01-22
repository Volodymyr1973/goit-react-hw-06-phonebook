import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
import { filterReducer} from "./filterSlice";
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { singleContactReducer } from "./singleContactSlice";


const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
    // contact: singleContactReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter', 'contact'],
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export default store;

// export default configureStore ({
//     reducer: {
//         contacts: contactReducer,
//         filter: filterReducer,
//     }
// })