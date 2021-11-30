import Folder from "../models/folder";
import File from "../models/file";

function fetchFolders(): Promise<(Folder | File)[]>{
    return fetch('https://dev21.becollective.com/api/v2/coding-challenges/dirs').then(res => res.json());
}

export default {
    fetchFolders
}
