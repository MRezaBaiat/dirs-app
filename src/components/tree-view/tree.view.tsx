import React from 'react';
import './styles.scss';
import Folder from "../../models/folder";
import File from "../../models/file";
import FolderView from "../folder-view/folder.view";
import FileView from "../file-view/file.view";

interface Props {
    data: (Folder | File)[]
}
function TreeView (props: Props) {
    const {data} = props;
  return(
    <div className={'tree-view-container'}>
        {
            data.map((data, index)=>{
                return data.type === 'folder' ? <FolderView folder={data as Folder} key={index}/> : <FileView file={data as File} key={index}/>
            })
        }
    </div>
  )
}

export default React.memo(TreeView);
