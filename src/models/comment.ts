import { PmgUserInterface } from "./pmguser";

export interface CommentListView {
  type: CommentTypeView;
  comment: string;
  dateTime: Date | string;
  user: PmgUserInterface;
  uid: number | string;
  data: unknown;
  isResolved: number | boolean;
  comments: {
    uid: number | string;
    type: CommentTypeView;
    comment: string;
    dateTime: Date | string;
    user: PmgUserInterface;
    data: unknown;
    isResolved: number | boolean;
  }[];
}

export interface CommentTypeView{
    id:number
    icon:string
    name:string
}