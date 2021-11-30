import React from 'react';
import './styles.scss';
import File from "../../models/file";
import images from "../../assets/images/images";
import {generateFileSize} from "../../utils";

interface Props {
  file: File
}
function FileView (props: Props) {
  const {file} = props;
  return(
    <div className={'file-container-view'}>
      <img src={images.file} className={'image'} alt={'loading...'}/>
      <text className={'name'}>{file.name}</text>
      <text className={'size'}>{generateFileSize(file.size)}</text>
    </div>
  )
}

export default React.memo(FileView);
