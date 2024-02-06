export class UserViewModel {
    id; // = ContactID
    email;
    firstName;
    lastName;
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    constructor(id, email, firstName, lastName) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
