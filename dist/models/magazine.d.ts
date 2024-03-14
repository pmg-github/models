export declare class ViewerTileBaseViewModel {
    reference: string | undefined;
    title: string | undefined;
    isPremium: boolean | undefined;
    imageUrl: string | undefined;
}
export declare class ViewerArticleBaseViewModel {
    reference: string | undefined;
    jobCode: string | undefined;
    title: string | undefined;
    description: string | undefined;
    text: string | undefined;
    displayDate: Date | undefined;
    displayAuthor: string | undefined;
    isPremium: boolean | undefined;
    imageUrl: string | undefined;
    customerReference: string | undefined;
    interesses: ViewerInteresseViewModel[] | undefined;
    externalUrl: string | undefined;
}
export declare class ViewerAdBaseViewModel {
    typeId: number;
    imageUrl: string | undefined;
    customerReference: string | undefined;
}
export declare class ViewerCustomerTileViewModel {
    customerReference: string | undefined;
    name: string | undefined;
    brand: string | undefined;
    logoUrl: string | undefined;
    redirectUrl: string | undefined;
}
export declare class ViewerMetaDataViewModel {
    title: string | undefined;
    portalLogoUrl: string | undefined;
    domain: string | undefined;
    date: Date | undefined;
}
export declare class ViewerInteresseViewModel {
    name: string | undefined;
    code: string | undefined;
    isMain: boolean;
}
export declare class MagazineTileViewModel extends ViewerTileBaseViewModel {
}
export declare class MagazineArticleViewModel extends ViewerArticleBaseViewModel {
    interesses: MagazineInteresseViewModel[] | undefined;
}
export declare class MagazineAdViewModel extends ViewerAdBaseViewModel {
}
export declare class MagazineCustomerTileViewModel extends ViewerCustomerTileViewModel {
}
export declare class MagazineMetaDataViewModel extends ViewerMetaDataViewModel {
    coverImageUrl: string | undefined;
}
export declare class MagazineInteresseViewModel extends ViewerInteresseViewModel {
}
export declare class NewsletterTileViewModel extends ViewerTileBaseViewModel {
}
export declare class NewsletterMetaDataViewModel extends ViewerMetaDataViewModel {
}
export declare class MagazineImageArticleCombinationViewModel {
    reference: string | undefined;
    article: MagazineArticleViewModel | null;
    imageUrl: string | undefined;
}
export declare class RelatedMagazineViewModel {
    portalCode: string | undefined;
    domain: string | undefined;
    magazineReference: string | undefined;
    name: string | undefined;
    recentCover: string | undefined;
}
