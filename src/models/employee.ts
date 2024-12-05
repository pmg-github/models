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
  workSchedule: EmployeeWorkSchedule; // Uurrooster
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
