export interface SelectOptionViewModel {
  // New property names to use instead of id/name => remove old properties when other code is replaced!
  key: string;
  value: number | string;
}

export interface SelectOptionIconViewModel extends SelectOptionDescriptionViewModel {
  // New property names to use instead of id/name => remove old properties when other code is replaced!
  Icon: string;
}

export interface SelectOptionDescriptionViewModel
  extends SelectOptionViewModel {
  description?: string;
}

export interface SelectOptionDescriptionTagsViewModel
  extends SelectOptionDescriptionViewModel {
  tags?: string;
}
