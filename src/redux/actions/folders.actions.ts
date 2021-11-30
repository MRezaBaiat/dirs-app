import { createAction } from '@reduxjs/toolkit';
import Folder from "../../models/folder";
import File from "../../models/file";

export const LOAD_FOLDERS = 'folders/loading';
export const LOAD_FOLDERS_FAILED = 'folders/load-failed';
export const SET_FOLDERS = 'folders/set';

export const actionLoadFolders = createAction(LOAD_FOLDERS, () => {
    return {
       payload: undefined
    };
});

export const actionLoadFoldersFailed = createAction(LOAD_FOLDERS_FAILED, () => {
    return {
        payload: undefined
    };
});

export const actionSetFolders = createAction(SET_FOLDERS,(folder: (Folder | File)[])=>{
    return{
        payload: folder
    }
})
