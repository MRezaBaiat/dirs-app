import {takeLatest, call, put} from 'redux-saga/effects';
import {actionLoadFoldersFailed, actionSetFolders, LOAD_FOLDERS} from "../actions/folders.actions";
import foldersApi from "../../api/folders.api";


function* fetchFolders(){
    console.log('captured')
    try{
        const data = yield call(foldersApi.fetchFolders);
        console.log('res',data)
        yield put(actionSetFolders(data))
    }catch (e){
        console.log('error',e)
        yield put(actionLoadFoldersFailed());
        alert('Something went wrong with loading folders...')
    }
}

export function* foldersSaga(){
    yield takeLatest(LOAD_FOLDERS,fetchFolders)
}
