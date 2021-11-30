import { createReducer } from '@reduxjs/toolkit';
import {
    actionLoadFolders,
    actionLoadFoldersFailed,
    actionSetFolders
} from '../actions/folders.actions';
import {State} from "../../models/enums";

export const foldersReducer = createReducer({state: null, data: null}, (builder) => {
    builder.addCase(actionLoadFolders, (state, action) => {return {state: State.LOADING, data: null}});
    builder.addCase(actionLoadFoldersFailed,(state,action)=>{return{state: State.FAILED,data: null}});
    builder.addCase(actionSetFolders,(state,action)=>{return{state: State.LOADED,data: action.payload}})
});
