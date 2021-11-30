import Folder from "../models/folder";
import File from "../models/file";

export function generateFileSize(size: number): string{
    if (Math.abs(size) < 1024) {
        return size + ' B';
    }

    const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let u = -1;
    const r = 10**1;

    do {
        size /= 1024;
        ++u;
    } while (Math.round(Math.abs(size) * r) / r >= 1024 && u < units.length - 1);


    return size.toFixed(1) + ' ' + units[u];
}

export function extractFiles(data: (File | Folder)[]): File[]{
    const total: File[] = [];
    data.forEach((value)=>{
        if(value.type === 'folder'){
            total.push(...extractFiles(value.children));
        }else{
            total.push(value);
        }
    })
    return total;
}
