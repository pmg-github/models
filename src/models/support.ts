import { IsEnum, IsNotEmpty, IsString } from "class-validator";
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

export enum Priority {
  "low" = "low",
  "medium" = "medium",
  "high" = "high",
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
  bucket: SelectOptionViewModel|null;
  created_at: string;
  ticketNumber: string;
  connected_users_ids?: string;
  connected_user_code?: string;
  snoozed?: boolean;
  project: SelectOptionViewModel | null;
  isRead: boolean;
  amountOfTasks?: number;
  amountOfFinishedTasks?: number;
  deadline:string
  endDate:string
  startDate:string
}
export interface SupportTaskListViewModel {
  id: number;
  description: string;
  finished: boolean;
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

//todo alwais camalcase
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
  bucket: string;
  snooze?:Date
  estimatedHours:number
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
  // isDeleted:boolean
}

export class CreateSuportTicketModel {
  @IsNotEmpty()
  user_id!: number;

  @IsNotEmpty()
  category_id!: number;

  @IsNotEmpty()
  @IsString()
  subject!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsEnum(Priority)
  priority!: Priority;

  file?: File;
}

export class AddUserToTicketModel {
  @IsNotEmpty()
  ticket_id!: number;

  @IsNotEmpty()
  user_id!: number;
}

export class AddCommentToTicketModel {
  @IsNotEmpty()
  ticket_id!: number;

  @IsNotEmpty()
  @IsString()
  comment!: string;
}

export class UpdateCommentToTicketModel {
  @IsNotEmpty()
  id!: number;

  @IsNotEmpty()
  @IsString()
  comment!: string;
}

export interface TicketFilterParamsModel {
  user_id?: number;
  status_id?: number;
  category_id?: number;
  priority?: Priority;
  created_at?: string; // Formaat: YYYY-MM-DD
}

export class UpdateTicketStatusModel {
  @IsNotEmpty()
  id!: number;

  @IsNotEmpty()
  status_id!: number;
}

export class UpdateTicketPriorityModel {
  @IsNotEmpty()
  id!: number;

  @IsNotEmpty()
  @IsEnum(Priority)
  priority!: Priority;
}
