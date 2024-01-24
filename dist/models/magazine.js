"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazineImageArticleCombinationViewModel = exports.MagazineMetaDataViewModel = exports.NewsletterTileViewModel = exports.MagazineCustomerTileViewModel = exports.MagazineAdViewModel = exports.MagazineArticleViewModel = exports.MagazineTileViewModel = exports.ViewerCustomerTileViewModel = exports.ViewerAdBaseViewModel = exports.ViewerArticleBaseViewModel = exports.ViewerTileBaseViewModel = void 0;
// BASE CLASSES
// Actual classes should inherit from this
class ViewerTileBaseViewModel {
    constructor() {
        this.reference = undefined;
        this.title = undefined;
        this.isPremium = undefined;
        this.imageUrl = undefined;
    }
}
exports.ViewerTileBaseViewModel = ViewerTileBaseViewModel;
class ViewerArticleBaseViewModel {
    constructor() {
        this.reference = undefined;
        this.title = undefined;
        this.description = undefined;
        this.text = undefined;
        this.displayDate = undefined;
        this.displayAuthor = undefined;
        this.isPremium = undefined;
        this.imageUrl = undefined;
        this.customerReference = undefined;
    }
}
exports.ViewerArticleBaseViewModel = ViewerArticleBaseViewModel;
class ViewerAdBaseViewModel {
    constructor() {
        this.typeId = 1; // for now only 1 type
        this.imageUrl = undefined;
        this.customerReference = undefined;
    }
}
exports.ViewerAdBaseViewModel = ViewerAdBaseViewModel;
class ViewerCustomerTileViewModel {
    constructor() {
        this.customerReference = undefined;
        this.name = undefined;
        this.brand = undefined;
        this.logoUrl = undefined;
        this.redirectUrl = undefined;
    }
}
exports.ViewerCustomerTileViewModel = ViewerCustomerTileViewModel;
// INHERITED CLASSES
// EXTEND HERE IF SEPERATION IS NEEDED AFTERWARDS
class MagazineTileViewModel extends ViewerTileBaseViewModel {
}
exports.MagazineTileViewModel = MagazineTileViewModel;
class MagazineArticleViewModel extends ViewerArticleBaseViewModel {
}
exports.MagazineArticleViewModel = MagazineArticleViewModel;
class MagazineAdViewModel extends ViewerAdBaseViewModel {
}
exports.MagazineAdViewModel = MagazineAdViewModel;
class MagazineCustomerTileViewModel extends ViewerCustomerTileViewModel {
}
exports.MagazineCustomerTileViewModel = MagazineCustomerTileViewModel;
// NEWSLETTERS (in magazine project)
class NewsletterTileViewModel extends ViewerTileBaseViewModel {
}
exports.NewsletterTileViewModel = NewsletterTileViewModel;
// SPECIFIC CLASSES (no inheritance needed since only used on)
class MagazineMetaDataViewModel {
    constructor() {
        this.title = undefined;
        this.portalLogoUrl = undefined;
        this.coverImageUrl = undefined;
    }
    ;
}
exports.MagazineMetaDataViewModel = MagazineMetaDataViewModel;
class MagazineImageArticleCombinationViewModel {
    constructor() {
        this.reference = undefined;
        this.article = null;
        this.imageUrl = undefined;
    }
}
exports.MagazineImageArticleCombinationViewModel = MagazineImageArticleCombinationViewModel;
