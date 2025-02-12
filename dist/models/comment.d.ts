import { UserViewModel } from "./user";
export interface CommentListView {
    type: CommentTypeView;
    comment: string;
    dateTime: Date | string;
    user: UserViewModel;
}
export interface CommentTypeView {
    id: number;
    icon: string;
    name: string;
}
