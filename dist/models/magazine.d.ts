export declare class MagazineTileViewModel {
    reference: string | undefined;
    title: string | undefined;
    isPremium: boolean | undefined;
    imageUrl: string | undefined;
}
export declare class MagazineArticleViewModel {
    reference: string | undefined;
    title: string | undefined;
    description: string | undefined;
    text: string | undefined;
    displayDate: Date | undefined;
    displayAuthor: string | undefined;
    isPremium: boolean | undefined;
    imageUrl: string | undefined;
    customerReference: string | undefined;
}
export declare class MagazineAdViewModel {
    typeId: number;
    imageUrl: string | undefined;
    customerReference: string | undefined;
}
export declare class MagazineMetaDataViewModel {
    title: string | undefined;
    portalLogoUrl: string | undefined;
    coverImageUrl: string | undefined;
}
export declare class MagazineImageArticleCombinationViewModel {
    reference: string | undefined;
    article: MagazineArticleViewModel | null;
    imageUrl: string | undefined;
}
export declare class MagazineCustomerTileViewModel {
    customerReference: string | undefined;
    name: string | undefined;
    brand: string | undefined;
    logoUrl: string | undefined;
    redirectUrl: string | undefined;
}
