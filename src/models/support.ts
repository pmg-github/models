import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { PmgUserInterface } from "./pmguser";

export interface SupportCategory {
  id: number;
  name: string;
}

export interface SupportStatus {
  id: number;
  name: string;
}

enum Priority {
  "low",
  "medium",
  "high",
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
}

export interface SupportTicketViewModel {
  id: number;
  user: PmgUserInterface;
  connected_users: PmgUserInterface[];
  category: string;
  status: string;
  subject: string;
  description: string;
  priority: Priority;
  created_at: string;
}

export interface SupportCommentViewModel {
  id: number;
  user: PmgUserInterface;
  comment: string;
  updated_at: string;
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
