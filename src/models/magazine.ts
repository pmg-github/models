// BASE CLASSES
// Actual classes should inherit from this
export class ViewerTileBaseViewModel {
  reference: string | undefined = undefined;
  title: string | undefined = undefined;
  isPremium: boolean | undefined = undefined;
  imageUrl: string | undefined = undefined;
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
  imageUrl: string | undefined = undefined;
  customerReference: string | undefined = undefined;
  interesses: ViewerInteresseViewModel[] | undefined = undefined;
  typeId: number | undefined = undefined;
  externalUrl: string | undefined = undefined;
}

export class ViewerAdBaseViewModel {
  typeId: number = 1; // for now only 1 type
  imageUrl: string | undefined = undefined;
  redirectUrl: string | undefined = undefined;
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
}

export class ViewerInteresseViewModel {
  name: string | undefined = undefined;
  code: string | undefined = undefined;
  isMain: boolean = false;
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
}

export class RelatedMagazineViewModel {
  portalCode: string | undefined = undefined;
  domain: string | undefined = undefined;
  magazineReference: string | undefined = undefined;
  name: string | undefined = undefined;
  recentCover: string | undefined = undefined;
}
