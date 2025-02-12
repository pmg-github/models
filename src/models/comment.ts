export interface CommentListView{
    type:CommentTypeView;
    comment:string
    dateTime:Date
}

export interface CommentTypeView{
    id:number
    icon:string
    name:string
}