export interface BoGroupsListModel {
    id: number;
    name: string;
}
export interface BoGroupsListWithCursorModel {
    cursor: number;
    content: BoGroupsListModel[];
}
export interface BoGroupsDetailModel {
    id: number;
    name: string;
    remarks: string;
    users: number[];
}
