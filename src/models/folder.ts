import File from "./file";

export default interface Folder{
    type: 'folder',
    name: string,
    children: (File | Folder)[]
}
