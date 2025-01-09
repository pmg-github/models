export declare class DeeplTranslationRequest {
    text: string;
    sourceLang: string;
    targetLang: string;
    constructor(data: Partial<DeeplTranslationRequest>);
}
export declare class TranslationSaveRequest {
    appId: number;
    key: string;
    value: string;
    language: string;
    portalCode: string | undefined;
    constructor(data: Partial<TranslationSaveRequest>);
}
