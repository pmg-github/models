export declare class UserViewModel {
    id: number;
    email: string;
    firstName: string | undefined;
    lastName: string | undefined;
    get fullName(): string | undefined;
    constructor(id: number, email: string, firstName?: string, lastName?: string);
}
