import React, {useCallback, useState} from 'react';
import "./styles.scss";
import images from "../../assets/images/images";
import Folder from "../../models/folder";
import TreeView from "../tree-view/tree.view";

interface Props {
    folder: Folder
}
function FolderView (props: Props) {
  const {folder} = props;
  const [open,setOpen] = useState(false);
  const onClick = useCallback(()=>{
      setOpen(!open);
  },[open]);
  return(
      <div className={'folders-view-container'}>
        <div onClick={onClick}>
            <div className={'touchable'}>
                <img className={'arrow'} src={open ? images.bottom_arrow : images.right_arrow} alt={'loading...'}/>
                <img className={'image'} src={open ? images.folder_open : images.folder_closed} alt={'loading...'}/>
                <text className={'name'}>
                    {folder.name}
                </text>
            </div>
        </div>
          <div className={'children'}>
              {
                  open && <TreeView data={folder.children}/>
              }
          </div>
      </div>
  )
}

export default React.memo(FolderView);
