export class UserViewModel {
    id: number; // = ContactID
    email: string; 
    firstName: string | undefined;
    lastName: string | undefined;

    get fullName(): string | undefined {
        return `${this.firstName} ${this.lastName}`;
    }

    constructor(id : number, email : string, firstName?:string, lastName?:string){
        this.id = id;
        this.email = email
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Class which will return if the user has an active abo and when it expires
export class UserAboViewModel {
    expiryDate: Date | null = null;

    get isActive() : boolean{
        return this.expiryDate != null && this.expiryDate > new Date(Date.now())
    }
}