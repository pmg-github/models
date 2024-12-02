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
exports.UpdateTicketPriorityModel = exports.UpdateTicketStatusModel = exports.UpdateCommentToTicketModel = exports.AddCommentToTicketModel = exports.AddUserToTicketModel = exports.CreateSuportTicketModel = void 0;
const class_validator_1 = require("class-validator");
var Priority;
(function (Priority) {
    Priority[Priority["low"] = 0] = "low";
    Priority[Priority["medium"] = 1] = "medium";
    Priority[Priority["high"] = 2] = "high";
})(Priority || (Priority = {}));
;
class CreateSuportTicketModel {
    user_id;
    category_id;
    subject;
    description;
    priority;
    file;
}
exports.CreateSuportTicketModel = CreateSuportTicketModel;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSuportTicketModel.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSuportTicketModel.prototype, "category_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSuportTicketModel.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSuportTicketModel.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(Priority),
    __metadata("design:type", Number)
], CreateSuportTicketModel.prototype, "priority", void 0);
class AddUserToTicketModel {
    ticket_id;
    user_id;
}
exports.AddUserToTicketModel = AddUserToTicketModel;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AddUserToTicketModel.prototype, "ticket_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AddUserToTicketModel.prototype, "user_id", void 0);
class AddCommentToTicketModel {
    ticket_id;
    comment;
}
exports.AddCommentToTicketModel = AddCommentToTicketModel;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AddCommentToTicketModel.prototype, "ticket_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddCommentToTicketModel.prototype, "comment", void 0);
class UpdateCommentToTicketModel {
    id;
    comment;
}
exports.UpdateCommentToTicketModel = UpdateCommentToTicketModel;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateCommentToTicketModel.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCommentToTicketModel.prototype, "comment", void 0);
class UpdateTicketStatusModel {
    id;
    status_id;
}
exports.UpdateTicketStatusModel = UpdateTicketStatusModel;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateTicketStatusModel.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateTicketStatusModel.prototype, "status_id", void 0);
class UpdateTicketPriorityModel {
    id;
    priority;
}
exports.UpdateTicketPriorityModel = UpdateTicketPriorityModel;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateTicketPriorityModel.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(Priority),
    __metadata("design:type", Number)
], UpdateTicketPriorityModel.prototype, "priority", void 0);
