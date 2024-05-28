import { IsNotEmpty, Length, IsNumber } from "class-validator";

export class ProefAboCreateModel {
  @IsNotEmpty()
  @Length(4, 4)
  portalCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  lang!: string;

  @IsNotEmpty()
  @IsNumber()
  addressId!: number;

  constructor(data: Partial<ProefAboCreateModel>) {
    Object.assign(this, data);
  }
}
