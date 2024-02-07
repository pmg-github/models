export declare class UserViewModel {
    id: number;
    email: string;
    firstName: string | undefined;
    lastName: string | undefined;
    get fullName(): string | undefined;
    constructor(id: number, email: string, firstName?: string, lastName?: string);
}
export declare class UserAboViewModel {
    expiryDate: Date | null;
    get isActive(): boolean;
}
