// BASE CLASSES
// Actual classes should inherit from this
// TODO make a single article base class and use these for both tiles and detail!
export class ViewerTileBaseViewModel {
  id!: number;
  reference: string | undefined = undefined;
  title: string | undefined = undefined;
  description: string | undefined = undefined;
  isPremium: boolean | undefined = undefined;
  fileId: number | undefined = undefined;
  imageUrl: string | undefined = undefined;
  redirectUrl: string | undefined = undefined;
  interests: ViewerInteresseViewModel[] | undefined = undefined;
  orderByValue: string | undefined = undefined;
  portalDomain?: string | undefined = undefined;
  customerReference?: string | undefined = undefined;
  displayDate: Date | string | undefined = undefined;
}

export class ViewerArticleBaseViewModel {
  reference: string | undefined = undefined;
  jobCode: string | undefined = undefined;
  title: string | undefined = undefined;
  description: string | undefined = undefined;
  text: string | undefined = undefined;
  displayDate: Date | undefined = undefined;
  displayAuthor: string | undefined = undefined;
  isPremium: boolean | undefined = undefined;
  requiresRegistration: boolean | undefined = undefined;
  fileId: number | undefined = undefined;
  imageUrl: string | undefined = undefined;
  customerReference: string | undefined = undefined;
  interesses: ViewerInteresseViewModel[] | undefined = undefined;
  typeId: number | undefined = undefined;
  externalUrl: string | undefined = undefined;
  searchTextRelated: string | undefined = undefined;
  newsletterMoreLabel: string | undefined = undefined;
  moreLink:string|undefined=undefined
  moreLinkText:string|undefined=undefined
}

export class ViewerAdBaseViewModel {
  typeId: number = 1; // for now only 1 type
  imageUrl: string | undefined = undefined;
  redirectUrl: string | null | undefined = undefined;
  customerReference: string | undefined = undefined;
}

export class ViewerCustomerTileViewModel {
  customerReference: string | undefined = undefined;
  name: string | undefined = undefined;
  brand: string | undefined = undefined;
  logoUrl: string | undefined = undefined;
  redirectUrl: string | undefined = undefined;
}

export class ViewerMetaDataViewModel {
  title: string | undefined = undefined;
  portalLogoUrl: string | undefined = undefined;
  domain: string | undefined = undefined;
  date: Date | undefined = undefined;
  isFreePremium: boolean | undefined = undefined;
  showMRKs: boolean | undefined = undefined;
}

export class ViewerInteresseViewModel {
  name: string | undefined = undefined;
  code: string | undefined = undefined;
  isMain: boolean = false;
}

export interface ViewerMagazineViewModel {
  reference: string;
  name: string;
  description: string | null;
  releaseDate: Date | string; // note: cast to string when sending as API response!
  isFreePremium: boolean;
}

// INHERITED CLASSES
// EXTEND HERE IF SEPERATION IS NEEDED AFTERWARDS
export class MagazineTileViewModel extends ViewerTileBaseViewModel {}
export class MagazineArticleViewModel extends ViewerArticleBaseViewModel {
  interesses: MagazineInteresseViewModel[] | undefined = undefined;
}
export class MagazineAdViewModel extends ViewerAdBaseViewModel {}
export class MagazineCustomerTileViewModel extends ViewerCustomerTileViewModel {}
export class MagazineMetaDataViewModel extends ViewerMetaDataViewModel {
  coverImageUrl: string | undefined = undefined;
  isFreePremium: boolean | undefined = undefined;
}
export class MagazineInteresseViewModel extends ViewerInteresseViewModel {}

// NEWSLETTERS (in magazine project)
export class NewsletterTileViewModel extends ViewerTileBaseViewModel {}
export class NewsletterMetaDataViewModel extends ViewerMetaDataViewModel {}

// SPECIFIC CLASSES (no inheritance needed since only used on)

export class MagazineImageArticleCombinationViewModel {
  reference: string | undefined = undefined;
  article: MagazineArticleViewModel | null = null;
  imageUrl: string | undefined = undefined;
  redirectUrl: string | undefined = undefined;
}

export class RelatedMagazineViewModel {
  portalCode: string | undefined = undefined;
  domain: string | undefined = undefined;
  magazineReference: string | undefined = undefined;
  name: string | undefined = undefined;
  recentCover: string | undefined = undefined;
}

export interface BoDigitalMagazines {
  name: string;
  reference: string;
  code: string;
  baseMagazine?: string;
  baseMagazineCode?: string;
  amountOfArticles: number;
}

export interface BoDigitalMagazinesArticles {
  id: number;
  projectCode: string;
  articleReference: string;
  sortOrder: number;
  title: string;
  description: string;
  fileId: number;
  imageUrl: string;
  domain: string;
}

export interface BoDigitalMagazinesDetail extends BoDigitalMagazines {
  content: BoDigitalMagazinesArticles[];
}
