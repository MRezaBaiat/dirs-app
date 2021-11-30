import React, {useMemo} from 'react';
import Folder from "../../models/folder";
import './styles.scss';
import File from "../../models/file";
import {extractFiles, generateFileSize} from "../../utils";

/**
 * since we are loading data only once and this component takes that data as props,
 * this will never re calculate sizes and quantity
 */
interface Props {
    data: (Folder | File) []
}
function InfoView (props: Props) {
    const {data} = props;

    const totalFiles = useMemo(()=>{
        return extractFiles(data)
    },[data]);

    const totalSize = useMemo(()=>{
        return generateFileSize(totalFiles.reduce((total,current) => {return total + (current as File).size},0));
    },[data]);

  return(
    <div className={'info-view-container'}>
        <text className={'text'}>Total Files: {totalFiles.length}</text>
        <text className={'text'}>Total Filesize: {totalSize}</text>
    </div>
  )
}

export default React.memo(InfoView);
