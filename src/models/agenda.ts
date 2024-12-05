import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export interface EventListModel {
  id: number;
  type: string;
  title: number;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location: string;
}
