export interface ToolsListView{
    id:number
    name:string,
    groupName:string
}
export interface ToolsListModel{
    cursor:string
    content:ToolsListView[]
}