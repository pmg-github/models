import { IsNotEmpty, Length, IsNumber } from "class-validator";
import { AddressViewModel } from "./address";

export interface BoGroupsListModel {
  id: number;
  name: string;
}
export interface BoGroupsListWithCursorModel {
  cursor: number;
  content: BoGroupsListModel[];
}

export interface BoGroupsDetailModel {
  id:number
  name:string
  remarks:string
  users:number[]
}

// export class ProefAboCreateModel {
//   @IsNotEmpty()
//   @Length(4, 4)
//   portalCode!: string;

//   @IsNotEmpty()
//   @Length(2, 2)
//   lang!: string;

//   @IsNotEmpty()
//   // @IsNumber() -> somehow throws an error in nuxt??
//   addressId!: number;

//   constructor(data: Partial<ProefAboCreateModel>) {
//     Object.assign(this, data);
//   }
// }
