import {
  IsOptional,
  IsString,
  IsBoolean,
  IsEmail,
  IsDateString,
  IsNumber,
  IsEnum,
  IsIBAN,
  IsIn,
  Matches,
} from "class-validator";

export interface EmployeesSearchListModel {
  code: string;
  firstName: string;
  lastName: string;
  internalPhoneNumber: string;
  teamName: string;
  functionName: string;
  presenceStatus: string;
  lastActivityTime: string;
}

export interface EmployeesSearchCursorListModel {
  nextCursor:string
  content:EmployeesSearchListModel[]
}

export interface EmployeeDetailModel {
  code: string;
  firstName: string;
  lastName: string;
  internalPhoneNumber: string; // Intern telefoonnummer
  privateMobileNumber: string; // Privé GSM-nummer
  teamName: string;
  functionName: string;
  presenceStatus: string;
  lastActivityTime: string;
  todayWorkSchedule: EmployeeWorkSchedule; // Uurrooster
}

export interface EmployeeWorkSchedule {
  dayOfWeek: number; // Huidige dag van de week (1 = maandag, 2 = dinsdag, etc.)
  morning: {
    startHour: string | null; // Startuur voormiddag
    endHour: string | null; // Einduur voormiddag
  };
  afternoon: {
    startHour: string | null; // Startuur namiddag
    endHour: string | null; // Einduur namiddag
  };
}

export enum Gender {
  M = "M",
  F = "F",
}
export interface PMGCompanyListModule{
  code: string;
  name: string;
}

export interface civilStatusListModel{
  code: string;
  name: string;
}

export interface contractTypeListModel{
  code: string;
  name: string;
}

export interface EmployeeFunctionListModel {
  code: string;
  name: string;
}

export interface EmployeeTeamListModel {
  code: string;
  name: string;
}

// Belgian Rijksregisternummer (basic check: 11 digits, optionally with separators like 00.00.00-000.00)
const RRNR_REGEX = /^(?:\d{2}\.\d{2}\.\d{2}-\d{3}\.\d{2}|\d{11})$/;

export class CreateEmployee {
  @IsString()  @Matches(/^[A-Za-z]{3}$/, { message: "parentCode must be exactly 3 letters (A–Z)" }) parentCode!: string;

  @IsOptional() @IsString() internNumber?: string;

  @IsOptional() @IsString() PMGCompany?: string;


  @IsOptional() @IsString() timeTable?: string;

  @IsOptional() @IsString() lastName?: string;
  @IsOptional() @IsString() firstName?: string;

  @IsEnum(Gender) gender?: Gender;

  // Address
  @IsOptional() @IsString() streetAdres?: string;
  @IsOptional() @IsString() zipCode?: string;        // keep as string to preserve leading zeros
  @IsOptional() @IsString() city?: string;

  // Civil status
  @IsOptional() @IsString() civilStatus?: string;
  @IsOptional() @IsString() partner?: string;

  // Personal
  @IsOptional() @IsDateString() birthDate?: string;  // ISO 8601 if you normalize
  @IsOptional() @IsString()    birthPlace?: string;

  @IsOptional() @Matches(RRNR_REGEX) nationalRegistrationNumber?: string;
  @IsOptional() @IsString()    sisKaart?: string;

  // Contacts
  @IsOptional() @IsString() phone?: string;
  @IsOptional() @IsString() mobile?: string;
  @IsOptional() @IsIBAN()   bankAccount?: string;
  @IsOptional() @IsEmail()  email?: string;

  // Employment
  @IsOptional() @IsDateString() startDate?: string;
  @IsOptional() @IsDateString() permanentStartDate?: string;
  @IsOptional() @IsDateString() endDate?: string;

  @IsOptional() @IsString() contractType?: string;

  @IsOptional() @IsString() ownCompany?: string;
  // Equipment / flags (DB often stores these as 0/1 → transform to boolean)

  @IsOptional() @IsBoolean() hasCompanyPhone?: boolean;
  @IsOptional() @IsBoolean() hasSimCard?: boolean;
  @IsOptional() @IsBoolean() hasVisa?: boolean;
  @IsOptional() @IsBoolean() hasLaptop?: boolean;
  @IsOptional() @IsBoolean() hasCardReader?: boolean;
  @IsOptional() @IsBoolean() mayWorkFromHome?: boolean;
  @IsOptional() @IsBoolean() isExecutive?: boolean;
  @IsOptional() @IsBoolean() hasRecup?: boolean;
  @IsOptional() @IsBoolean() timeRegistration?: boolean;

  // Misc
  @IsOptional() @IsString()  employeeNumber?: string;
  @IsOptional() @IsString()  carPlate?: string;

  @IsOptional() @IsString()  idCardNr?: string;
  @IsOptional() @IsDateString() idCardValidFrom?: string;   // note: renamed for consistency
  @IsOptional() @IsDateString() idCardValidUntil?: string;

  @IsOptional() @IsString() workplace?: string;

  @IsOptional() @IsNumber() personId?: number;

 // @IsOptional() @IsBoolean() isActive?: boolean;
  @IsOptional() @IsBoolean() allowSearch?: boolean;

  @IsOptional() @IsIn(["nl", "fr", "en"]) languagePreference?: "nl" | "fr" | "en";

  constructor(data: Partial<CreateEmployee>) {
    Object.assign(this, data);
  }

}