"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcValidateTokenRequest = exports.ValidateTokenRequest = exports.BcEmailCodeRequest = exports.EmailCodeRequest = exports.ContactUpdateRequest = exports.ContactCreateModel = exports.UserAboViewModel = exports.UserViewModel = void 0;
const class_validator_1 = require("class-validator");
class UserViewModel {
    id; // = ContactID
    email;
    firstName;
    lastName;
    phone;
    get fullName() {
        let returnValue = "";
        if (this.firstName) {
            returnValue += this.firstName;
            returnValue += " ";
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
        this.phone = userAPIInterface.phone;
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
class ContactCreateModel {
    email;
    // For now make them required (maybe change later)
    firstName;
    lastName;
    phone;
    lang;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.ContactCreateModel = ContactCreateModel;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ContactCreateModel.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], ContactCreateModel.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(40),
    __metadata("design:type", String)
], ContactCreateModel.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(36),
    __metadata("design:type", String)
], ContactCreateModel.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], ContactCreateModel.prototype, "lang", void 0);
class ContactUpdateRequest {
    // For now make them required (maybe change later)
    firstName;
    lastName;
    phone;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.ContactUpdateRequest = ContactUpdateRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], ContactUpdateRequest.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(40),
    __metadata("design:type", String)
], ContactUpdateRequest.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(36),
    __metadata("design:type", String)
], ContactUpdateRequest.prototype, "phone", void 0);
class EmailCodeRequest {
    email;
    portalCode;
    lang;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.EmailCodeRequest = EmailCodeRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], EmailCodeRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(4, 4),
    __metadata("design:type", String)
], EmailCodeRequest.prototype, "portalCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], EmailCodeRequest.prototype, "lang", void 0);
class BcEmailCodeRequest {
    klnr;
    lang;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.BcEmailCodeRequest = BcEmailCodeRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BcEmailCodeRequest.prototype, "klnr", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], BcEmailCodeRequest.prototype, "lang", void 0);
class ValidateTokenRequest {
    email;
    code;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.ValidateTokenRequest = ValidateTokenRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], ValidateTokenRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(4, 4),
    __metadata("design:type", String)
], ValidateTokenRequest.prototype, "code", void 0);
class BcValidateTokenRequest {
    klnr;
    code;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.BcValidateTokenRequest = BcValidateTokenRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BcValidateTokenRequest.prototype, "klnr", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(6, 6),
    __metadata("design:type", String)
], BcValidateTokenRequest.prototype, "code", void 0);
