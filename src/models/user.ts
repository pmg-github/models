export class UserViewModel {
    id: number; // = ContactID
    email: string; 
    firstName: string | null;
    lastName: string | null;

    get fullName(): string | undefined {
        let returnValue : string = '';
        if(this.firstName){
            returnValue += this.firstName
            returnValue += ' '; 
        }

        if(this.lastName) {
            returnValue += this.lastName;
        }

        return returnValue;
    }

    constructor(userAPIInterface : UserAPIInterface){
        this.id = userAPIInterface.id;
        this.email = userAPIInterface.email
        this.firstName = userAPIInterface.firstName;
        this.lastName = userAPIInterface.lastName;
    }
}

// Class which will return if the user has an active abo and when it expires
export class UserAboViewModel implements UserAboAPIInterface {
    expiryDate: string | null = null;

    get isActive() : boolean{
        return this.expiryDate != null && new Date(this.expiryDate) > new Date()
    }

    constructor(userAboAPIInterface: UserAboAPIInterface) {
        this.expiryDate = userAboAPIInterface.expiryDate;
    }
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