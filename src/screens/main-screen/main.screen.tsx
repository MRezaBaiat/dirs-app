import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionLoadFolders} from "../../redux/actions/folders.actions";
import "./styles.scss";
import {State} from "../../models/enums";
import {StoreType} from "../../redux/store";
import TreeView from "../../components/tree-view/tree.view";
import InfoView from "../../components/info-view/info.view";

interface Props {

}
function MainScreen (props: Props) {
    const dispatch = useDispatch();
    const folders = useSelector((state: StoreType) => state.foldersReducer);
    useEffect(()=>{
        dispatch(actionLoadFolders());
    },[])
  return(
        <div className={'container'}>
            {
                folders.state === State.LOADING && <text>Loading</text>
            }
            {
                folders.state === State.FAILED && <text>Something went wrong when loading folders...!</text>
            }
            {
                folders.state === State.LOADED && folders.data && <TreeView data={folders.data}/>
            }
            <div className={'line'}/>
            {
                folders.state === State.LOADED && folders.data && <InfoView data={folders.data}/>
            }
        </div>
  )
}

export default React.memo(MainScreen);

