export interface BoGroupsListModel {
    id: number;
    name: string;
}
export interface BoGroupsListWithCursorModel {
    cursor: number;
    groups: BoGroupsListModel[];
}
