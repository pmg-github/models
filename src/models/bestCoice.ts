import { BcCompanyViewModel } from "./company";

export interface BestChoiceCategories {
  code: string;
  name: string;
  categories: {
    code: string;
    name: string;
    tools: { code: string; name: string }[];
  }[];
}

export interface BestChoiceParticipationView{
  projectCode:string
  contextCode:string
  categoryCode:string
  statusId:number
  activeStep:number
  toolId:number
  klnr:string
  firstName:string
  lastName:string
  email:string
  company:BcCompanyViewModel
}
export interface BestChoiceEditModel{
  key:string
  project:string
  uid:string
  id:number
  tool:number
  contextCode:string
  category:string
  company:BcCompanyViewModel
  contact:{
    firstName:string
    lastName:string
    email:string
  }
}