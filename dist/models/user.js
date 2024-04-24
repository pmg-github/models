"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAboViewModel = exports.UserViewModel = void 0;
class UserViewModel {
    id; // = ContactID
    email;
    firstName;
    lastName;
    get fullName() {
        let returnValue = '';
        if (this.firstName) {
            returnValue += this.firstName;
            returnValue += ' ';
        }
        if (this.lastName) {
            returnValue += this.lastName;
        }
        return returnValue;
    }
    constructor(userAPIInterface) {
        this.id = userAPIInterface.id;
        this.email = userAPIInterface.email;
        this.firstName = userAPIInterface.firstName;
        this.lastName = userAPIInterface.lastName;
    }
}
exports.UserViewModel = UserViewModel;
// Class which will return if the user has an active abo and when it expires
class UserAboViewModel {
    expiryDate = null;
    get isActive() {
        return this.expiryDate != null && new Date(this.expiryDate) > new Date();
    }
    constructor(userAboAPIInterface) {
        this.expiryDate = userAboAPIInterface.expiryDate;
    }
}
exports.UserAboViewModel = UserAboViewModel;
