import {configureStore} from '@reduxjs/toolkit';
import RootStore from "./reducers/root.store";

export const store = configureStore({
    reducer: RootStore,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});