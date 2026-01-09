import { PmgUserInterface } from "./pmguser";
import { SelectOptionViewModel } from "./selectoption";
export interface SupportCategory {
    id: number;
    name: string;
}
export interface SupportStatus {
    id: number;
    name: string;
}
export declare enum Priority {
    "low" = "low",
    "medium" = "medium",
    "high" = "high"
}
export interface SupportTicketListViewModelWhitCursorAndContent {
    content: SupportTicketListViewModel[];
    nextCursor: string;
}
export interface SupportTicketListViewModel {
    id: number;
    user: PmgUserInterface;
    statusId: number;
    categoryId: number;
    triage: number;
    subject: string;
    description: string;
    priority: Priority;
    bucket: SelectOptionViewModel | null;
    created_at: string;
    ticketNumber: string;
    connected_users_ids?: string;
    connected_user_code?: string;
    snoozed?: boolean;
    project: SelectOptionViewModel | null;
    isRead: boolean;
    amountOfTasks?: number;
    amountOfFinishedTasks?: number;
    deadline: string;
    endDate: string;
    startDate: string;
}
export interface SupportTaskListViewModel {
    id: number;
    description: string;
    finished: boolean;
    asigntUserId: number;
}
export interface SupportTicketIcalModel {
    id: number;
    ticketNumber: string;
    subject: string;
    description: string;
    startDate: Date | string;
    endDate: Date | string;
    deadline: Date | string;
    userFirstName: string;
    userLastName: string;
}
export interface ProjectIcalModel {
    id: number;
    name: string;
    description: string;
    dateStart: Date | string;
    dateEnd: Date | string;
    deadline: Date | string;
}
export interface SupportTicketViewModel {
    id: number;
    user: PmgUserInterface;
    connected_users: PmgUserInterface[];
    followers: PmgUserInterface[];
    testers: PmgUserInterface[];
    categoryId: number;
    statusId: number;
    subject: string;
    startDate?: Date | string;
    endDate?: Date | string;
    deadline?: Date | string;
    description: string;
    priority: Priority;
    created_at: string;
    ticket_number: string;
    files: returnFileResponse[];
    project: SelectOptionViewModel;
    bucket: string;
    triage: number;
    snooze?: Date;
    estimatedHours: number;
}
export interface returnFileResponse {
    name: string;
    url: string;
}
export interface SupportCommentViewModel {
    id: number;
    user: PmgUserInterface;
    comment: string;
    updated_at: string;
    files: returnFileResponse[];
}
export declare class CreateSuportTicketModel {
    user_id: number;
    category_id: number;
    subject: string;
    description: string;
    priority: Priority;
    file?: File;
}
export declare class AddUserToTicketModel {
    ticket_id: number;
    user_id: number;
}
export declare class AddCommentToTicketModel {
    ticket_id: number;
    comment: string;
}
export declare class UpdateCommentToTicketModel {
    id: number;
    comment: string;
}
export interface TicketFilterParamsModel {
    user_id?: number;
    status_id?: number;
    category_id?: number;
    priority?: Priority;
    created_at?: string;
}
export declare class UpdateTicketStatusModel {
    id: number;
    status_id: number;
}
export declare class UpdateTicketPriorityModel {
    id: number;
    priority: Priority;
}
