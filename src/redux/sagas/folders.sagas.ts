import {takeLatest, call, put} from 'redux-saga/effects';
import {actionLoadFoldersFailed, actionSetFolders, LOAD_FOLDERS} from "../actions/folders.actions";
import foldersApi from "../../api/folders.api";


function* fetchFolders(){
    try{
        const data = yield call(foldersApi.fetchFolders);
        yield put(actionSetFolders(data));
    }catch (e){
        yield put(actionLoadFoldersFailed());
    }
}

export function* foldersSaga(){
    yield takeLatest(LOAD_FOLDERS,fetchFolders)
}
