// BASE CLASSES
// Actual classes should inherit from this
export class ViewerTileBaseViewModel {
    reference = undefined;
    title = undefined;
    isPremium = undefined;
    imageUrl = undefined;
}
export class ViewerArticleBaseViewModel {
    reference = undefined;
    title = undefined;
    description = undefined;
    text = undefined;
    displayDate = undefined;
    displayAuthor = undefined;
    isPremium = undefined;
    imageUrl = undefined;
    customerReference = undefined;
}
export class ViewerAdBaseViewModel {
    typeId = 1; // for now only 1 type
    imageUrl = undefined;
    customerReference = undefined;
}
export class ViewerCustomerTileViewModel {
    customerReference = undefined;
    name = undefined;
    brand = undefined;
    logoUrl = undefined;
    redirectUrl = undefined;
}
// INHERITED CLASSES
// EXTEND HERE IF SEPERATION IS NEEDED AFTERWARDS
export class MagazineTileViewModel extends ViewerTileBaseViewModel {
}
export class MagazineArticleViewModel extends ViewerArticleBaseViewModel {
}
export class MagazineAdViewModel extends ViewerAdBaseViewModel {
}
export class MagazineCustomerTileViewModel extends ViewerCustomerTileViewModel {
}
// NEWSLETTERS (in magazine project)
export class NewsletterTileViewModel extends ViewerTileBaseViewModel {
}
// SPECIFIC CLASSES (no inheritance needed since only used on)
export class MagazineMetaDataViewModel {
    title = undefined;
    ;
    portalLogoUrl = undefined;
    coverImageUrl = undefined;
}
export class MagazineImageArticleCombinationViewModel {
    reference = undefined;
    article = null;
    imageUrl = undefined;
}
