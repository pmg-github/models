import { IsEnum, IsNotEmpty, IsString } from "class-validator";


export interface EventListModel {
  id: number;
  type: string;
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location: string;
}

export interface AgendaModel {
  Date:Date;
  Appointments:EventListModel[];
} 
