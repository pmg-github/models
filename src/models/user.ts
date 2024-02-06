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