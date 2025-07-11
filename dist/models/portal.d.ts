export interface PortalViewModel {
    id: number;
    code: string;
    name: string;
    title: string;
    domain: string;
    logo: string;
}
export interface BoPortalViewModel {
    id: number;
    code: string;
    title: string;
    domain: string;
    hasSecurity: boolean;
    countInteresses: number;
    countContext: number;
}
export interface PortalComponentViewModel {
    code: string;
    title: string;
    domain: string;
}
export interface PortalCarouselViewModel {
    link: string;
    src: string;
    name: string;
}
export interface BoPortalContextInteresses {
    code: string;
    name: string;
    creator: string;
    interesses: {
        code: string;
        name: string;
    }[];
}
export interface BoPortalContextPortal {
    code: string;
    name: string;
    context: {
        code: string;
        name: string;
    }[];
}
