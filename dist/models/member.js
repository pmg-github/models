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
exports.MemberCreateRequest = void 0;
const class_validator_1 = require("class-validator");
class MemberCreateRequest {
    language;
    portalCode;
    selectedAboProductId;
    email;
    firstName;
    lastName;
    phone;
    isB2B;
    klnr;
    vatNumber;
    companyName;
    hasDifferentInvoiceAddress;
    deliveryAddressId;
    invoiceAddressId;
    deliveryStreet;
    deliveryStreetNumber;
    deliveryStreetBoxNumber;
    deliveryZipCode;
    deliveryCity;
    deliveryCountryCode;
    invoiceStreet;
    invoiceStreetNumber;
    invoiceStreetBoxNumber;
    invoiceZipCode;
    invoiceCity;
    invoiceCountryCode;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.MemberCreateRequest = MemberCreateRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 4),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "portalCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], MemberCreateRequest.prototype, "selectedAboProductId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], MemberCreateRequest.prototype, "isB2B", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "klnr", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.isB2B && !o.klnr),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "vatNumber", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.isB2B && !o.klnr),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "companyName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], MemberCreateRequest.prototype, "hasDifferentInvoiceAddress", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MemberCreateRequest.prototype, "deliveryAddressId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MemberCreateRequest.prototype, "invoiceAddressId", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => !o.deliveryAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "deliveryStreet", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => !o.deliveryAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "deliveryStreetNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "deliveryStreetBoxNumber", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => !o.deliveryAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "deliveryZipCode", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => !o.deliveryAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "deliveryCity", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => !o.deliveryAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "deliveryCountryCode", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "invoiceStreet", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "invoiceStreetNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "invoiceStreetBoxNumber", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "invoiceZipCode", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "invoiceCity", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MemberCreateRequest.prototype, "invoiceCountryCode", void 0);
