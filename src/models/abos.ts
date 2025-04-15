import { IsNotEmpty, Length, IsNumber } from "class-validator";

export interface AboViewModel {
  id: number;
  reference: string;
  portalCode: string;
  magazine: string;
  expiryDate: Date;
}

export class ProefAboCreateModel {
  @IsNotEmpty()
  @Length(4, 4)
  portalCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  lang!: string;

  @IsNotEmpty()
  // @IsNumber() -> somehow throws an error in nuxt??
  addressId!: number;

  constructor(data: Partial<ProefAboCreateModel>) {
    Object.assign(this, data);
  }
}
