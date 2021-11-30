import { configureStore } from '@reduxjs/toolkit';
import {foldersReducer, FoldersReducerType} from "./reducers/folders.reducer";
import createSagaMiddleware from 'redux-saga';
import {foldersSaga} from "./sagas/folders.sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        foldersReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(foldersSaga);

export interface StoreType{
    foldersReducer: FoldersReducerType
}

export default store;
