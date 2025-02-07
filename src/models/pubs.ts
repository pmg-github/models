import { CompanyCardViewModel } from "./company";
import { SelectOptionViewModel } from "./selectoption"

export interface PubsListView {
  customer: CompanyCardViewModel;
  id:number;
  description:string
  pubCode:string
  format:SelectOptionViewModel
}

export interface PubsListCursorView {
    Pubs:PubsListView[]
    cursor:number
}