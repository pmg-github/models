export interface SelectOptionViewModel {
  id: number;
  name: string;

  // New property names to use instead of id/name => remove old properties when other code is replaced!
  key: string;
  value: number | string;
}
