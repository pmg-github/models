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
exports.CartDiscountAddRequest = exports.CartUpdateRequest = exports.CartDeleteItemRequest = exports.CartUpdateItemRequest = exports.CartAddItemRequest = exports.CartBaseRequest = void 0;
const class_validator_1 = require("class-validator");
class CartBaseRequest {
    portalCode;
    userUuid;
}
exports.CartBaseRequest = CartBaseRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(4, 4),
    __metadata("design:type", String)
], CartBaseRequest.prototype, "portalCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CartBaseRequest.prototype, "userUuid", void 0);
class CartAddItemRequest {
    userUuid;
    language;
    portalCode;
    productId;
    amount;
    JSONData; // check if we want object or string here?
}
exports.CartAddItemRequest = CartAddItemRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(36, 36),
    __metadata("design:type", String)
], CartAddItemRequest.prototype, "userUuid", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], CartAddItemRequest.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 4),
    __metadata("design:type", String)
], CartAddItemRequest.prototype, "portalCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CartAddItemRequest.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CartAddItemRequest.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CartAddItemRequest.prototype, "JSONData", void 0);
class CartUpdateItemRequest {
    userUuid;
    portalCode;
    quantity;
    JSONData; // check if we want object or string here?
}
exports.CartUpdateItemRequest = CartUpdateItemRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(36, 36),
    __metadata("design:type", String)
], CartUpdateItemRequest.prototype, "userUuid", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 4),
    __metadata("design:type", String)
], CartUpdateItemRequest.prototype, "portalCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CartUpdateItemRequest.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CartUpdateItemRequest.prototype, "JSONData", void 0);
class CartDeleteItemRequest {
    userUuid;
    portalCode;
}
exports.CartDeleteItemRequest = CartDeleteItemRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(36, 36),
    __metadata("design:type", String)
], CartDeleteItemRequest.prototype, "userUuid", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 4),
    __metadata("design:type", String)
], CartDeleteItemRequest.prototype, "portalCode", void 0);
class CartUpdateRequest {
    userUuid;
    language;
    portalCode;
    email;
    firstName;
    lastName;
    phone;
    isB2B;
    klnr;
    companyName;
    // Either vatNumber or companyNumber must be provided
    vatNumber;
    companyNumber;
    hasDifferentInvoiceAddress;
    deliveryAddressId;
    invoiceAddressId;
    deliveryStreet;
    deliveryStreetNumber;
    deliveryStreetBoxNumber;
    deliveryZipCode;
    deliveryCity;
    deliveryCountryCode;
    deliveryAttention;
    invoiceStreet;
    invoiceStreetNumber;
    invoiceStreetBoxNumber;
    invoiceZipCode;
    invoiceCity;
    invoiceCountryCode;
    invoiceAttention;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.CartUpdateRequest = CartUpdateRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(36, 36),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "userUuid", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 4),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "portalCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], CartUpdateRequest.prototype, "isB2B", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "klnr", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.isB2B && !o.klnr),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "companyName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "vatNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "companyNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], CartUpdateRequest.prototype, "hasDifferentInvoiceAddress", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CartUpdateRequest.prototype, "deliveryAddressId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CartUpdateRequest.prototype, "invoiceAddressId", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => !o.deliveryAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "deliveryStreet", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => !o.deliveryAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "deliveryStreetNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "deliveryStreetBoxNumber", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => !o.deliveryAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "deliveryZipCode", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => !o.deliveryAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "deliveryCity", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => !o.deliveryAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "deliveryCountryCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CartUpdateRequest.prototype, "deliveryAttention", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "invoiceStreet", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "invoiceStreetNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "invoiceStreetBoxNumber", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "invoiceZipCode", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "invoiceCity", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CartUpdateRequest.prototype, "invoiceCountryCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CartUpdateRequest.prototype, "invoiceAttention", void 0);
class CartDiscountAddRequest extends CartBaseRequest {
    discountCode;
}
exports.CartDiscountAddRequest = CartDiscountAddRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 45),
    __metadata("design:type", String)
], CartDiscountAddRequest.prototype, "discountCode", void 0);
