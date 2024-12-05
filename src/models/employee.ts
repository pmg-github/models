export interface EmployeesSearchListModel {
  code: string;
  firstName: string;
  lastName: string;
  internalPhoneNumber: string;
  privateMobileNumber: string;
  teamName: string;
  functionName: string;
  presenceStatus: string;
  lastActivityTime: string;
  workSchedule: EmployeeWorkSchedule;
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
