export class PmgUserModel {
  id?: number;
  code?: string;
  firstName?: string;
  lastName?: string;

  constructor(pmgUserInterface: PmgUserInterface) {
    this.id = pmgUserInterface.id;
    this.code = pmgUserInterface.code;
    this.firstName = pmgUserInterface.firstName;
    this.lastName = pmgUserInterface.lastName;
  }
}

export type PmgUserInterface = Partial<PmgUserModel>;
