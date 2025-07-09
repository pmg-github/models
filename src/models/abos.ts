import { IsNotEmpty, Length, IsNumber } from "class-validator";
import { AddressViewModel } from "./address";

export interface AboViewModel {
  id: number;
  reference: string;
  portalCode: string;
  magazine: string;
  expiryDate: Date;
}
export interface AboDetailViewModel {
  id: number;
  magazine: string;
  variationKey: string;
  language: string;
  typeName: string;
  deliveryName: string;
  deliveryAdress: AddressViewModel;
  billingName: string;
  billingAdress: AddressViewModel;
  isActive: boolean;
  reference: string;
  expiryDate: string;
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

export class ContactenAboUpdateRequest {
  @IsNotEmpty()
  @Length(2, 2)
  lang!: string;

  @IsNotEmpty()
  deliveryAddressId!: number;

  @IsNotEmpty()
  invoiceAddressId!: number;

  constructor(data: Partial<ContactenAboUpdateRequest>) {
    Object.assign(this, data);
  }
}
