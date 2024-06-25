export interface CampagneViewModel {
  id: number;
  title: string;

  items: CampagneItemViewModel[] | undefined;
}

export interface CampagneItemViewModel {
  id: number;
  name: string;
  logoUrl: string;
  url: string;
}
