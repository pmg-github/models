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
exports.SearchResultsSaveRequest = void 0;
const class_validator_1 = require("class-validator");
class SearchResultsSaveRequest {
    keyword;
    portalCode;
    language;
    NrOfResults;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.SearchResultsSaveRequest = SearchResultsSaveRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SearchResultsSaveRequest.prototype, "keyword", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(4, 4),
    __metadata("design:type", String)
], SearchResultsSaveRequest.prototype, "portalCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], SearchResultsSaveRequest.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SearchResultsSaveRequest.prototype, "NrOfResults", void 0);
