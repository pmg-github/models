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
// Class which will return if the user has an active abo and when it expires
export class UserAboViewModel {
    expiryDate = null;
    get isActive() {
        return this.expiryDate != null && new Date(this.expiryDate) > new Date(Date.now());
    }
}
