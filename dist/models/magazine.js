"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedMagazineViewModel = exports.MagazineImageArticleCombinationViewModel = exports.NewsletterMetaDataViewModel = exports.NewsletterTileViewModel = exports.MagazineInteresseViewModel = exports.MagazineMetaDataViewModel = exports.MagazineCustomerTileViewModel = exports.MagazineAdViewModel = exports.MagazineArticleViewModel = exports.MagazineTileViewModel = exports.ViewerInteresseViewModel = exports.ViewerMetaDataViewModel = exports.ViewerCustomerTileViewModel = exports.ViewerAdBaseViewModel = exports.ViewerArticleBaseViewModel = exports.ViewerTileBaseViewModel = void 0;
// BASE CLASSES
// Actual classes should inherit from this
class ViewerTileBaseViewModel {
    reference = undefined;
    title = undefined;
    isPremium = undefined;
    imageUrl = undefined;
}
exports.ViewerTileBaseViewModel = ViewerTileBaseViewModel;
class ViewerArticleBaseViewModel {
    reference = undefined;
    jobCode = undefined;
    title = undefined;
    description = undefined;
    text = undefined;
    displayDate = undefined;
    displayAuthor = undefined;
    isPremium = undefined;
    imageUrl = undefined;
    customerReference = undefined;
    interesses = undefined;
    typeId = undefined;
    externalUrl = undefined;
}
exports.ViewerArticleBaseViewModel = ViewerArticleBaseViewModel;
class ViewerAdBaseViewModel {
    typeId = 1; // for now only 1 type
    imageUrl = undefined;
    customerReference = undefined;
}
exports.ViewerAdBaseViewModel = ViewerAdBaseViewModel;
class ViewerCustomerTileViewModel {
    customerReference = undefined;
    name = undefined;
    brand = undefined;
    logoUrl = undefined;
    redirectUrl = undefined;
}
exports.ViewerCustomerTileViewModel = ViewerCustomerTileViewModel;
class ViewerMetaDataViewModel {
    title = undefined;
    portalLogoUrl = undefined;
    domain = undefined;
    date = undefined;
}
exports.ViewerMetaDataViewModel = ViewerMetaDataViewModel;
class ViewerInteresseViewModel {
    name = undefined;
    code = undefined;
    isMain = false;
}
exports.ViewerInteresseViewModel = ViewerInteresseViewModel;
// INHERITED CLASSES
// EXTEND HERE IF SEPERATION IS NEEDED AFTERWARDS
class MagazineTileViewModel extends ViewerTileBaseViewModel {
}
exports.MagazineTileViewModel = MagazineTileViewModel;
class MagazineArticleViewModel extends ViewerArticleBaseViewModel {
    interesses = undefined;
}
exports.MagazineArticleViewModel = MagazineArticleViewModel;
class MagazineAdViewModel extends ViewerAdBaseViewModel {
}
exports.MagazineAdViewModel = MagazineAdViewModel;
class MagazineCustomerTileViewModel extends ViewerCustomerTileViewModel {
}
exports.MagazineCustomerTileViewModel = MagazineCustomerTileViewModel;
class MagazineMetaDataViewModel extends ViewerMetaDataViewModel {
    coverImageUrl = undefined;
}
exports.MagazineMetaDataViewModel = MagazineMetaDataViewModel;
class MagazineInteresseViewModel extends ViewerInteresseViewModel {
}
exports.MagazineInteresseViewModel = MagazineInteresseViewModel;
// NEWSLETTERS (in magazine project)
class NewsletterTileViewModel extends ViewerTileBaseViewModel {
}
exports.NewsletterTileViewModel = NewsletterTileViewModel;
class NewsletterMetaDataViewModel extends ViewerMetaDataViewModel {
}
exports.NewsletterMetaDataViewModel = NewsletterMetaDataViewModel;
// SPECIFIC CLASSES (no inheritance needed since only used on)
class MagazineImageArticleCombinationViewModel {
    reference = undefined;
    article = null;
    imageUrl = undefined;
}
exports.MagazineImageArticleCombinationViewModel = MagazineImageArticleCombinationViewModel;
class RelatedMagazineViewModel {
    portalCode = undefined;
    domain = undefined;
    magazineReference = undefined;
    name = undefined;
    recentCover = undefined;
}
exports.RelatedMagazineViewModel = RelatedMagazineViewModel;
