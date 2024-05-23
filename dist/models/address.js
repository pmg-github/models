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
exports.AddressContactCreateRequest = exports.AddressViewModel = exports.AddressHelper = void 0;
const class_validator_1 = require("class-validator");
class AddressHelper {
    // remove spaces and dots for a clean comparison
    static cleanVat(vatNumber) {
        return vatNumber.replaceAll(" ", "").replaceAll(".", "");
    }
}
exports.AddressHelper = AddressHelper;
class AddressViewModel {
    street = undefined;
    streetNumber = undefined;
    streetBoxNumber = undefined;
    city = undefined;
    zipCode = undefined;
    countryCode = undefined;
}
exports.AddressViewModel = AddressViewModel;
class AddressContactCreateRequest {
    street;
    streetNumber;
    streetBoxNumber;
    city;
    zipCode;
    countryCode;
    // Company stuff
    type;
    get isB2b() {
        return this.type == "b2b";
    }
    vat;
    companyName;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.AddressContactCreateRequest = AddressContactCreateRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "streetNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "zipCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "countryCode", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((obj, val) => obj.isB2b),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^(ATU|BE0|BG|CHE|CY|CZ|DE|DK|EE|EL|ES|FI|FR|GB|GR|HR|HU|IE|IT|LT|LU|LV|MT|NL|PL|PT|RO|SE|SI|SK)[\s-.]?[0-9A-Z]{2,12}[\s-.]?/),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "vat", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((obj, val) => obj.isB2b),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressContactCreateRequest.prototype, "companyName", void 0);
