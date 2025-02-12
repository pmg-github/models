export interface CommentListView {
    type: CommentTypeView;
    comment: string;
    dateTime: Date | string;
}
export interface CommentTypeView {
    id: number;
    icon: string;
    name: string;
}
