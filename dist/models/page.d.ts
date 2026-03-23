export declare enum BannerWidthEnum {
    SMARTPHONE = 0,
    TABLET = 681,
    STANDARD = 760
}
export interface BannerViewModel {
    SMARTPHONE: {
        id: number;
        url: string;
        width: number;
        targetUrl: string;
    }[];
    TABLET: {
        id: number;
        url: string;
        width: number;
        targetUrl: string;
    }[];
    STANDARD: {
        id: number;
        url: string;
        width: number;
        targetUrl: string;
    }[];
}
