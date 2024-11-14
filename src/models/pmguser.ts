export class PmgUserModel {
  constructor(
    public id?: number,
    public code?: string,
    public firstName?: string,
    public lastName?: string
  ) {}
}

export type PmgUserInterface = Partial<PmgUserModel>;
