export declare class UserViewModel {
    id: number;
    email: string;
    firstName: string | null;
    lastName: string | null;
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
export declare class EmailCodeRequest {
    email: string;
    portalCode: string;
    lang: string;
}
