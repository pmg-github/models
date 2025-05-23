export declare class UserViewModel {
    id: number;
    email: string;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    gender: string | null;
    language: string | null;
    get fullName(): string | undefined;
    constructor(userAPIInterface: UserAPIInterface);
}
export declare class UserAboViewModel implements UserAboAPIInterface {
    expiryDate: string | null;
    get isActive(): boolean;
    constructor(userAboAPIInterface: UserAboAPIInterface);
}
export interface UserAPIInterface {
    id: number;
    email: string;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    gender: string | null;
    language: string | null;
}
export interface UserAboAPIInterface {
    expiryDate: string | null;
}
export declare class ContactCreateModel {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    lang: string;
    constructor(data: Partial<ContactCreateModel>);
}
export declare class ContactUpdateRequest {
    firstName: string;
    lastName: string;
    phone: string;
    language?: string;
    sex?: string;
    newsletter?: string;
    constructor(data: Partial<ContactUpdateRequest>);
}
export declare class EmailCodeRequest {
    email: string;
    portalCode: string;
    lang: string;
    constructor(data: Partial<EmailCodeRequest>);
}
export declare class BcEmailCodeRequest {
    email: string;
    klnr: string;
    lang: string;
    constructor(data: Partial<BcEmailCodeRequest>);
}
export declare class ValidateTokenRequest {
    email: string;
    code: string;
    language?: string;
    constructor(data: Partial<ValidateTokenRequest>);
}
export declare class BcValidateTokenRequest {
    email: string;
    klnr: string;
    code: string;
    constructor(data: Partial<ValidateTokenRequest>);
}
