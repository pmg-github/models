import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export interface EventListModel {
  id: number;
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location: string;
}
