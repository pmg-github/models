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
    category: string;
    status: string;
    subject: string;
    description: string;
    priority: Priority;
    created_at: string;
    ticketNumber: string;
    connected_users_ids?: string;
    connected_user_code?: string;
    snoozed?: boolean;
    project: SelectOptionViewModel | null;
}
export interface SupportTicketViewModel {
    id: number;
    user: PmgUserInterface;
    connected_users: PmgUserInterface[];
    category: string;
    status: string;
    subject: string;
    startDate: Date | string;
    endDate: Date | string;
    deadline: Date | string;
    description: string;
    priority: Priority;
    created_at: string;
    ticket_number: string;
    files: returnFileResponse[];
    project: SelectOptionViewModel;
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
