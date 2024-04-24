import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class ProefAboCreateModel {
  @IsNotEmpty()
  firstName!: string;

  @IsNotEmpty()
  lastName!: string;

  @MinLength(6)
  password!: string;

  @IsEmail()
  email!: string;

  constructor(data: Partial<ProefAboCreateModel>) {
    Object.assign(this, data);
  }
}
