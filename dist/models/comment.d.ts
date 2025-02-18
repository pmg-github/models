import { PmgUserInterface } from "./pmguser";
export interface CommentListView {
    type: CommentTypeView;
    comment: string;
    dateTime: Date | string;
    user: PmgUserInterface;
}
export interface CommentTypeView {
    id: number;
    icon: string;
    name: string;
}
