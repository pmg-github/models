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
exports.AddressContactUpdateRequest = exports.AddressContactCreateRequest = exports.AddressViewModel = exports.AddressHelper = void 0;
const class_validator_1 = require("class-validator");
class AddressHelper {
    // remove spaces and dots for a clean comparison
    static cleanVat(vatNumber) {
        if (!vatNumber) {
            return "";
        }
        return vatNumber.replaceAll(" ", "").replaceAll(".", "");
    }
}
exports.AddressHelper = AddressHelper;
class AddressViewModel {
    id = undefined;
    street = undefined;
    streetNumber = undefined;
    streetBoxNumber = undefined;
    city = undefined;
    zipCode = undefined;
    countryCode = undefined;
}
exports.AddressViewModel = AddressViewModel;
class AddressContactCreateRequest {
    lang;
    street;
    streetNumber;
    streetBoxNumber;
    city;
    zipCode;
    countryCode;
    // Company stuff
    isB2b;
    vat;
    companyName;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.AddressContactCreateRequest = AddressContactCreateRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "lang", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(355),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "streetNumber", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "streetBoxNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "zipCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "countryCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AddressContactCreateRequest.prototype, "isB2b", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((obj, val) => obj.isB2b),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^(ATU|BE0|BG|CHE|CY|CZ|DE|DK|EE|EL|ES|FI|FR|GB|GR|HR|HU|IE|IT|LT|LU|LV|MT|NL|PL|PT|RO|SE|SI|SK)[\s-.]?[0-9A-Z]{2,12}[\s-.]?/),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "vat", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((obj, val) => obj.isB2b),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(80),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "companyName", void 0);
//  TODO: make create request an extension of this class
class AddressContactUpdateRequest {
    lang;
    street;
    streetNumber;
    streetBoxNumber;
    city;
    zipCode;
    countryCode;
    attention;
    // Company stuff CANNOT be changed later on!!!
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.AddressContactUpdateRequest = AddressContactUpdateRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], AddressContactUpdateRequest.prototype, "lang", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(355),
    __metadata("design:type", String)
], AddressContactUpdateRequest.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], AddressContactUpdateRequest.prototype, "streetNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], AddressContactUpdateRequest.prototype, "streetBoxNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], AddressContactUpdateRequest.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressContactUpdateRequest.prototype, "zipCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], AddressContactUpdateRequest.prototype, "countryCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], AddressContactUpdateRequest.prototype, "attention", void 0);
